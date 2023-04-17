import styles from "../assets/components/scss/ListUsers.module.scss";
import ItemUser from "./ItemUser";
import Card from "./UI/Card";

const ListUsers = ({users}) => {
    return (
        <Card className={styles.listUsers}>
            <h2 className={styles.h2}>ListUsers</h2>
            {
                users.map(user =>  <ItemUser {...user} key={user.id}/>)
            }
        </Card>
    );
}
export default ListUsers;