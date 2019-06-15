import { observable, action } from "mobx";
import axios from 'axios';

class UserStore {

  @observable.ref userData   = null;
  @observable.ref addLoading = false;
  @observable.ref addError   = false;

  @action async add(data) {
    this.addLoading = true;

    try {
      const response = await axios.post('/api/users/add', data);
      //this.movies = response.data.results;
      this.addLoading = false;
    } catch(err) {
      this.addError = err;
      this.addLoading = false;
    };
  };

};

const store = new UserStore();
export default store;
