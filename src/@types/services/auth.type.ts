export type Login = (username: string, password: string) => Promise<any>;

export type Register = (
  username: string,
  email: string,
  password: string
) => Promise<any>;
