import ReactDom from "react-dom";
import { Rules } from "./Rules";

const modalRoot = document.getElementById("modal-root");
export const NewWindow = (props) => {
  return ReactDom.createPortal(
    <div
      style={{
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(15, 15, 15, 0.8)",
      }}
    >
      <Rules props={props} />
    </div>,
    modalRoot
  );
};
