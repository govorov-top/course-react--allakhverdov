import useCounter from "../hooks/useCounter";
import Card from "./UI/Card";

const NegativeCounter = () => {
  return <Card>{useCounter(0, '-')}</Card>;
};

export default NegativeCounter;
