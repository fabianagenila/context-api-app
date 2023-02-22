import ChangeCounter from "../components/ChangeCounter";
import { useCounterContext } from "../hook/useCounterContext";
import { useTitleColorContext } from "../hook/useTitleColorContext";

const Home = () => {
  const { counter } = useCounterContext();
  const { color } = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  );
};

export default Home;
