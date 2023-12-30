import React, { ComponentType, useEffect } from "react";
import { useSnapshot } from "valtio";
import { modalStore } from "../../../store/modalStore";

const PrivateRoute = (AuthComponent: ComponentType) => {
  function PrivateComponent({ children }: any) {
    const { loggedIn } = useSnapshot(modalStore);

    useEffect(() => {
      if (!loggedIn) {
        modalStore.signInModal.setOpen(true);
      }
    }, [loggedIn]);

    return <>{loggedIn && <> {children} </>} </>;
  }

  return class Higher extends React.Component {
    render() {
      return (
        <PrivateComponent>
          <AuthComponent {...this.props} />
        </PrivateComponent>
      );
    }
  };
};

export { PrivateRoute };
