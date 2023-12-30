import { proxy } from "valtio";

interface IModalStore {
  loggedIn: boolean;
  setLoggedIn: () => void;
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
  forgotPassword: {
    open: boolean;
    setOpen: (val: boolean) => void;
  };
}
export const modalStore = proxy<IModalStore>({
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
  forgotPassword: {
    open: false,
    setOpen(val) {
      this.open = val;
    },
  },
});
