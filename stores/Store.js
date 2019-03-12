class Store {
  constructor (initialState) {
    this.state = initialState ;
    this.listeners = [] ;
  }
  setState (state) {
    this.state = state ;
  }
  getState () {
    return this.state ;
  }
  addListener (listener) {
    this.listeners.push(listener) ;
    const removeListener = () => {
      this.listeners = this.listeners.filter((1) => listener !== 1);
    };
    return removeListener ;
  }
}

export default Store;
