import React from 'react';
import { Provider } from 'react-redux'
import { store } from './redux/createStore'
import { MainScreen } from './screens';
import { AppBar } from './components'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppBar />
        <MainScreen />
      </Provider>

    );
  }
}

export default App;
