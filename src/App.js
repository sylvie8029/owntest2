import React, { Component } from 'react';
import './App.css';
import MainPage from '../src/todoManagement/mainPage/mainPage';
import { Provider } from 'react-redux';
import store from './store/store';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <MainPage />
        </Provider>
      </div>
    );
  }
}

export default App;
