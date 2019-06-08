import { observable, action } from "mobx";

class CounterStore {

  @observable counter = 0;

  @action increment = () => {
    this.counter++;
  }
  
  @action decrement = () => {
    if(this.counter > 0) {
      this.counter--;
    }
  }

}

const store = new CounterStore()
export default store;
