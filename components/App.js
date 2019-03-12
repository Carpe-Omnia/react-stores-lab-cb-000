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
    // Your implementation here.
  }
  componentWillUnmount () {
    // Your implementation here.
  }
  render () {
    return (
      <div className='app'>
        <h1 className='counter'></h1>
        <div className='actions'>
          <button className='decrement'>
            -
          </button>
          <button className='increment'>
            +
          </button>
        </div>
      </div>
    );
  }
}

export default App;
