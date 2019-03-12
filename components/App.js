import React from 'react';
import Actions from '../actions/index.js'
import counterStore from '../stores/counterStore.js'

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      counterStore.getState()
    };
  }
  componentDidMount () {
    this.removeListener = counterStore.addListener((state) => {
      this.setState(state) ;
    });
    this.setState(counterStore.getState());
  }
  componentWillUnmount () {
    this.removeListener() ;
  }
  render () {
    return (
      <div className='app'>
        <h1 className='counter'></h1>
        <div className='actions'>
          <button onClick={Actions.decrement()} className='decrement'>
            -
          </button>
          <button onClick={Actions.increment()} className='increment'>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
