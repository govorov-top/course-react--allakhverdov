import useCounter from "../hooks/useCounter";
import Card from "./UI/Card";

const PositiveCounter = () => {
  return <Card>{useCounter(0, '+')}</Card>;
};

export default PositiveCounter;
