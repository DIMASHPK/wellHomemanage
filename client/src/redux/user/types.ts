export interface UserStateType {
  data: {
    userName: string | null;
    token: string | null;
    tokenExpiredDate: string | null;
  };
}
