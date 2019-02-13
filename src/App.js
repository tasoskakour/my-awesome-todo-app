import React from 'react';
import { Provider } from 'react-redux'
import { store } from './redux/createStore'
import { MainScreen } from './screens';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <MainScreen />
      </Provider>

    );
  }
}

export default App;
