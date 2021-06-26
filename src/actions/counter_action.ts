import actions from "./interface";



export const increment = (): actions => {
  return { type: "INCREMENT"};
};


export const decrement = (): actions => {
    return { type: "DECREMENT" };
  };


