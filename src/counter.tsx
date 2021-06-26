import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./actions/counter_action";


function Counter() {
  const counterValue: number = useSelector((state: RootStateOrAny) => state.counter);
  const dispatch = useDispatch();

  return (
    <div>
      {counterValue}
      <div>
        <button onClick={() =>dispatch(increment())}>increase counter</button>
        <button onClick={() =>dispatch(decrement())}>decrease counter</button>
      </div>
    </div>
  );
}

export default Counter;
