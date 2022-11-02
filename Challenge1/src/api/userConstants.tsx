interface Props {
  username: string;
  password: string;
}
export interface Response {
  data: UserData | null;
  error: boolean;
  message: string;
}

export const userLogin = ({username, password}: Props) => {
  const userDB = {
    username: 'ash123',
    password: '123',
  };
  if (userDB.username === username && userDB.password === password) {
    return {
      data: userDetails,
      error: false,
      message: '',
    } as Response;
  }
  return {data: null, error: true, message: 'Bad credentials'} as Response;
};

interface UserData {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
}

const userDetails: UserData = {
  username: 'ash123',
  firstname: 'Ash',
  lastname: 'Ketchup',
  email: 'ashketchup@pokeapi.com',
};
