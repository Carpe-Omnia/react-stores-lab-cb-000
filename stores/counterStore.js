import Store from './Store.js'
import Actions from '../actions/index.js'
class CounterStore extends Store {
  constructor() {
  super(0) ;
  }
}

const counterStore = new CounterStore();

export default counterStore;
