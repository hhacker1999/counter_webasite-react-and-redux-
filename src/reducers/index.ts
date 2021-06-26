import { combineReducers } from "redux";
import counterReducer from "./counter_reduces";

const reducer = combineReducers({
  counter: counterReducer,
});

export default reducer;
// export type DefaultRootState = ReturnType<typeof reducer>