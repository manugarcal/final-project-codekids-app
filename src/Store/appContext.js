import React, { useState, useEffect } from 'react';
import getState from './flux';

export const Context = React.createContext(null);

const injectContext = PassedComponent => {
  const StoreWrapper = props => {
    const [state, setState] = useState(getState({
        getStore: () => state.store,
        getActions: () => state.actions,
        setStore: updateStore => setState({
            store: Object.assign(state.store, updateStore),
            actions: {...state.actions}
        })
    }));

<<<<<<< HEAD
        
=======
>>>>>>> 1c06a45db7fd39a6b2b23731695d6540d2109381
    return (
        <Context.Provider value={state}>
            <PassedComponent {...props}/>
        </Context.Provider>
    )

  }
  return StoreWrapper;  
}

export default injectContext;