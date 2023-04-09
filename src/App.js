import './App.css';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from './actions/shared';

function App(props) {

  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Hello, goddess Inna
      </header>
    </div>
  );
}

export default connect()(App);
