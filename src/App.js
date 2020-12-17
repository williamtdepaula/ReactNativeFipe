import React from 'react'
import Navigator from './Navigator'
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};

export default App;
