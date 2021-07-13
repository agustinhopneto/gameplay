export interface Appointment {
  id: string;
  game: string;
  guild: Guild;
  category: string;
  date: string;
  description: string;
}

export interface Guild {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
}

export interface Member {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
}
