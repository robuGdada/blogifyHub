import { proxy } from "valtio";

interface IModalStore {
  loggedIn: boolean;
  token: string;
  setToken: (token: string) => void;
  setLoggedIn: () => void;

  setLogOut: () => void;
  signUpModal: {
    open: boolean;
    setOpen: (val: boolean) => void;
  };
  signInModal: {
    open: boolean;
    setOpen: (val: boolean) => void;
  };
  logout: {
    open: boolean;
    setOpen: (val: boolean) => void;
  };
}
export const modalStore = proxy<IModalStore>({
  token: "",
  setToken(jwtToken) {
    this.token = jwtToken;
  },
  loggedIn: false,
  setLoggedIn() {
    this.loggedIn = true;
  },
  signUpModal: {
    open: false,
    setOpen(val) {
      this.open = val;
    },
  },

  setLogOut() {
    this.loggedIn = false;
  },
  signInModal: {
    open: false,
    setOpen(val) {
      this.open = val;
    },
  },
  logout: {
    open: false,
    setOpen(val) {
      this.open = val;
    },
  },
});
