import Store from './Store.js'

class CounterStore extends Store {
  constructor() {
  super(0) ;
  }
}

const counterStore = new CounterStore();

export default counterStore;
