import Counteractions from "./interface";



export const increment = (): Counteractions => {
  return { type: "INCREMENT"};
};


export const decrement = (): Counteractions => {
    return { type: "DECREMENT" };
  };


