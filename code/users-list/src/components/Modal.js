import styles from "../assets/components/scss/Modal.module.scss";
import { GrFormClose } from 'react-icons/gr';
import { v4 as uuidv4 } from 'uuid';
import Button from "./UI/Button";
import ReactDOM from "react-dom";
const ModalPortal = ({errors,checkErrors}) => {
    const body = document.querySelector('body');
    body.classList.add('modal-bg');

    const closeModalHandler = () => {
        body.classList.remove('modal-bg');
        checkErrors();
    }
    return <div className={styles.modal}>
        <div className={styles.header}>
            <p>Error</p>
            <GrFormClose onClick={closeModalHandler}/>
        </div>
        <div className={styles.body}>
            <ul>
                {
                    errors.map(error => <li key={uuidv4()}>{error}</li>)
                }
            </ul>
            <Button onClick={closeModalHandler}>I'll fix it...</Button>
        </div>
    </div>
}

const Modal = ({errors,checkErrors}) => {
    const rootForModels = document.getElementById('models');
    return (
        <>
            {
                ReactDOM.createPortal(
                    <ModalPortal errors={errors} checkErrors={checkErrors}/>,
                    rootForModels
                )
            }
        </>
    );
}
export default Modal;