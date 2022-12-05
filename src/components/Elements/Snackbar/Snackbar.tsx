import { SnackbarMessage } from "@/providers/snackbar";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { snackbarItem, snackbarWrapper } from "./style.css";

type SnackbarProps = {
  snackbarMessages: SnackbarMessage[];
};
export const Snackbar = ({ snackbarMessages }: SnackbarProps) => {
  return (
    <TransitionGroup className={snackbarWrapper}>
      {snackbarMessages.map(({ id, message, nodeRef }: SnackbarMessage) => (
        <CSSTransition
          key={id}
          classNames={snackbarItem}
          timeout={500}
          nodeRef={nodeRef}
        >
          <div className={snackbarItem} ref={nodeRef}>
            {message}
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};
