import React, { useEffect } from "react";
import style from "./modal.module.css";

const Modal = ({ children, ...props }) => {
    useEffect(() => {
        if (props.open) document.body.style.overflow = "hidden";
        else document.body.style.overflow = "auto";

        const handleEscKey = (event) => {
            if (event.key === "Escape") {
                props.onClose();
            }
        };

        window.addEventListener("keydown", handleEscKey);

        return () => {
            window.removeEventListener("keydown", handleEscKey);
            document.body.style.overflow = "auto";
        };
    }, [props.open]);

    return (
        <>
            <div className={style.backDrop} onClick={props.onClose} />
            <div className={style.modal}>
                <div className={style.Header}>{props.title}</div>
                <div className={style.body}>{children}</div>
                <div className="text-center">
                    <button className="btn m-auto" onClick={props.onClose}>
                        Close
                    </button>
                </div>
            </div>
        </>
    );
};

export default Modal;
