export interface Appointment {
  id: string;
  game: Game;
  guild: Guild;
  category: string;
  date: string;
  description: string;
}

export interface Guild {
  id: string;
  name: string;
  icon: string | null | undefined;
  owner: boolean;
}

export interface Member {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}

export interface User {
  id: string;
  username: string;
  firstName: string;
  avatar: string;
  email: string;
  token: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  metacritic: number;
}
