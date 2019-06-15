import { observable, action } from "mobx";
import axios from 'axios';

class MovieStore {

  @observable.ref movies = [];
  @observable.ref isFetching = false;
  @observable.ref error = false;

  @action async fetchMovies() {
    this.isFetching = true;
    this.error = null;

    try {
      const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=53d88ecb18fb8d7d9236e070c0fabdbc&language=tr-TR&page=1');
      this.movies = await response.data.results;
      this.isFetching = false;
    } catch(err) {
      this.error = err;
      this.isFetching = false;
    };
  };

};

const store = new MovieStore();
export default store;
