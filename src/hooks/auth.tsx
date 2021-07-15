import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from 'react';
import * as AuthSession from 'expo-auth-session';

import { User } from '../utils/interfaces';

import {
  SCOPE,
  CLIENT_ID,
  REDIRECT_URI,
  RESPONSE_TYPE,
  CDN_IMAGE,
} from '../configs';
import { api } from '../services/api';

type AuthContextData = {
  user: User;
  loading: boolean;
  signIn: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token: string;
  };
};

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(false);

  const signIn = useCallback(async () => {
    try {
      setLoading(true);

      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthorizationResponse;

      if (type === 'success') {
        api.defaults.headers.authorization = `Bearer ${params.access_token}`;

        const userInfo = await api.get('/users/@me');

        const firstName = userInfo.data.username.split(' ')[0];

        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

        setUser({
          ...userInfo.data,
          firstName,
          token: params.access_token,
        });
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch {
      setLoading(false);

      throw new Error('Não foi posspivel autenticar!');
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);

  return context;
};

export { AuthProvider, useAuth };
