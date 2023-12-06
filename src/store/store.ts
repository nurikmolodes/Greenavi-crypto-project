import { create } from 'zustand';

type registrationStore = {
  email: string;
  password: string;
  login: string;
  pinCode: string;
  handleChangeField: (text: string, field: string) => void;
  clearPinCode: () => void;
  errorText: boolean | string;
  setErrorText: (text: string | boolean) => void;
};

type authStore = {
  isAuth: boolean;
  setIsAuth: any;
};

interface userStore {
  user: User | null;
  setUser: any;
}
interface User {
  id: number;
  login: string;
  email: string;
  phone: string;
  first_name: string;
  last_name: string;
  patronymic: any;
  verify_status: number;
  telegram: string;
  currency: Currency;
  chart: Chart;
  status: number;
  two_factor: boolean;
  image: string;
}

interface Currency {
  id: number;
  name: string;
  symbol: string;
  icon: string;
}

interface Chart {
  id: number;
  name: string;
  symbol: string;
  price: string;
  lowPrice: string;
  highPrice: string;
  percent: string;
  icon: string;
}

interface accessTokenStore {
  token: string | null;
  setToken: any;
}

interface qrCodeStore {
  qrCodeUrl: string;
  secret: string;
  setQrCodeUrl: any;
  setSecret: any;
}

export const useRegistrationStore = create<registrationStore>((set) => ({
  email: '',
  password: '',
  login: '',
  pinCode: '',
  clearPinCode: () => set(() => ({ pinCode: '' })),
  handleChangeField: (text, field) => set(() => ({ [field]: text })),

  errorText: false,
  setErrorText: (text) => set(() => ({ errorText: text })),
}));

export const useAuth = create<authStore>((set) => ({
  isAuth: false,
  setIsAuth: (value: boolean) => set(() => ({ isAuth: value })),
}));

export const useUser = create<userStore>((set) => ({
  user: null,
  setUser: (user: User) => set(() => ({ user })),
}));

export const useAccessToken = create<accessTokenStore>((set) => ({
  token: null,
  setToken: (value: string) => set(() => ({ token: value })),
}));

export const useQrCode = create<qrCodeStore>((set) => ({
  qrCodeUrl: '',
  secret: '',
  setQrCodeUrl: (value: string) => set(() => ({ qrCodeUrl: value })),
  setSecret: (value: string) => set(() => ({ secret: value })),
}));
