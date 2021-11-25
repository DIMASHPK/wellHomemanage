export interface UserBodyType {
  username: string;
  password: string;
  expiresIn: string;
}

export interface RefreshTokenBodyType {
  accessToken: string;
}

export interface TokenListType {
  [key: string]: {
    accessToken: string;
    username: string;
  };
}
