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
  }
}

export default Store;
