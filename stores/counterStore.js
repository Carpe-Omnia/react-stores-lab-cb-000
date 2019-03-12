import Store from './Store.js'
import Actions from '../actions/index.js'
class CounterStore extends Store {
  this.increment = Actions.increment.bind(this) ;
  this.decrement = Actions.decrement.bind(this) ;
}

const counterStore = new CounterStore({count: 0});

export default counterStore;
