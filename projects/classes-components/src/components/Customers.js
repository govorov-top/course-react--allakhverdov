import { Component } from "react";
import Customer from "./Customer";

import styles from "../assets/components/scss/Customers.module.scss";
class Customers extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showCustomers: true
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.customers.length === 0){
      throw new Error('Error...')
    }
  }

  toggleCustomersHandler() {
    this.setState({
      ...this.state,
      showCustomers: ((curState) => !curState)
    })
  };

  render() {
    const customersList = (
        <ul>
          {this.props.customers.map((customer) => (
              <Customer key={customer.id} name={customer.name} />
          ))}
        </ul>
    );
    return (
        <div className={styles.customers}>
          <button onClick={this.toggleCustomersHandler.bind(this)}>
            {this.state.showCustomers ? "Спрятать" : "Показать"} Заказчиков
          </button>
          {this.state.showCustomers && customersList}
        </div>
    );
  }
}

export default Customers;