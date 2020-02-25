import React, { useReducer } from "react";

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    //console.log("im here", action(dispatch));
    const boundActions = {};
    for (let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    console.log(boundActions);
    return (
      // <Context.Provider value={{ state, addBlogPost: actions(dispatch) }}>
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };
  return { Context, Provider };
};
