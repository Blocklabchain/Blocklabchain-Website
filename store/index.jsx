import * as React from 'react'

export const GlobalContext = React.createContext();

export const GLobalStore = {
  askModalIsShown: false,
}

function reducer(state, action) {
  switch (action.type) {
    case 'show': {
      return {askModalIsShown: true}
    }
    case 'hide': {
      return {askModalIsShown: false}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export function Provider(props) {
  const [state, dispatch] = React.useReducer(reducer, GLobalStore)

  const value = {state, dispatch}

  return (
    <GlobalContext.Provider value={value}>
      {props.children}
    </GlobalContext.Provider>
  );
}
