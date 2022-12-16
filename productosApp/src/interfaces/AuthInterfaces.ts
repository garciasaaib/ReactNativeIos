// user api interface
export interface User {
  rol: string;
  estado: string;
  google: string;
  nombre: string;
  correo: string;
  uid: string;
  img?: string;
}

// successfully response from auth request api
export interface LoginResponse {
  usuario: User;
  token: string;
}

// data to do a register request
export interface RegisterRequest {
  correo: string;
  nombre: string;
  password: string;
  rol: 'USER_ROLE' | 'ADMIN_ROLE';
}

// data to do login request
export interface LoginRequest {
  email: string;
  password: string;
}

// error in login request
export interface LoginError {
  msg: string;
}
