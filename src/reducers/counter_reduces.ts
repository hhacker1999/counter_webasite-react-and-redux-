import actions from "../actions/interface";

const counterReducer = (state: number = 0, action: actions) : number => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};


export default counterReducer;