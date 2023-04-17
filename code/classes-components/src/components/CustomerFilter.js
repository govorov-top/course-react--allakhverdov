import { Component } from "react";
import Customers from "./Customers";
import styles from "../assets/components/scss/CustomerFilter.module.scss";
import CustomersContext from "../store/customers-context";
import ErrorBoundary from "./ErrorBoundary";

class CustomerFilter extends Component {
  static contextType = CustomersContext;

  constructor(props) {
    super(props);
    this.state = {
      filteredCustomers: [],
      filter: "",
    };

  }

  componentDidMount() {
    this.setState({
      filteredCustomers: this.context.customers,
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.filter !== this.state.filter) {
      this.setState({
        filteredCustomers: this.context.customers.filter((customer) =>
          customer.name.includes(this.state.filter)
        ),
      });
    }
  }

  filterHandler(event) {
    this.setState({
      filter: event.target.value,
    });
  }

  render() {
    return (
      <>
        <div className={styles.filter}>
          <input type="search" onChange={this.filterHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Customers customers={this.state.filteredCustomers} />
        </ErrorBoundary>
      </>
    );
  }
}

export default CustomerFilter;
