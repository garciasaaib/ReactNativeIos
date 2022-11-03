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

export interface UserData {
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  image: string;
}
const shinji: string =
  'https://i.pinimg.com/736x/72/d6/36/72d6362d0568d145ee7d8e6f6de371e7.jpg';
const gravatar: string =
  'https://s.gravatar.com/avatar/76b9eed5ecd95a292eefeb002db55bc7?s=80';
const userDetails: UserData = {
  username: 'ash123',
  firstname: 'Ash',
  lastname: 'Ketchup',
  email: 'ashketchup@pokeapi.com',
  image: gravatar,
};
