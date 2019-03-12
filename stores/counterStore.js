import Store from './Store.js'
class CounterStore extends Store {
  // Your implementation here.
  // Hint: extend the Store class!
}

const counterStore = new CounterStore({count: 0});

export default counterStore;
