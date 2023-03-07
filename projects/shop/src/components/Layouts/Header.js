import img from "../../assets/images/components/Layouts/Header/sushi.jpg";
import styles from "../../assets/scss/components/Layouts/Header.module.scss"
import HeaderCartButton from "./HeaderCartButton";
function Header(props) {
    return (
        <>
            <header className={styles.header}>
                <h1>China kitchen</h1>
                <HeaderCartButton onShowCart={props.onShowCart}/>
            </header>
            <div className={styles['main-image']}>
                <img src={img} alt="China kitchen"/>
            </div>
        </>
    );
}

export default Header;