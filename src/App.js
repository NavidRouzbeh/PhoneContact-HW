import React from 'react';
import {store, persistor} from './Components/redux/store';
import {Provider} from 'react-redux';
import Home from './Components/Home/Home';
import {PersistGate} from 'redux-persist/integration/react'
import './App.css';

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Home />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
