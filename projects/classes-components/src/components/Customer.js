import {Component} from "react";
import styles from "../assets/components/scss/Customer.module.scss";
class Customer extends Component{
  componentWillUnmount() {
    console.log('User will deleted');
  }

  render() {
    return <li className={styles.customer}>{this.props.name}</li>;
  }
}
export default Customer;