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
>>>>>>> 365a6be932eb9e6ee2c17df3442da24bc9eeb353
    return (
        <Context.Provider value={state}>
            <PassedComponent {...props}/>
        </Context.Provider>
    )

  }
  return StoreWrapper;  
}

export default injectContext;