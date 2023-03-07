import styles from "../../assets/scss/components/UI/Modal.module.scss"
import ReactDOM from "react-dom";
const Backdrop = (props) => {
    return <div className={styles.backdrop} onClick={props.onHideCart}></div>
}
const ModalWindow = (props) => {
    return <div className={styles.modal}>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>
}

const Modal = (props) => {
    const portalElement = document.getElementById('modals');
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onHideCart={props.onHideCart}/>,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalWindow>
                    {props.children}
                </ModalWindow>,
                portalElement
            )}
        </>
    );
}
export default Modal;