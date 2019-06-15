import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import axios from 'axios';

import DefaultLayout from '../components/Layouts/DefaultLayout';

import { HomeComponents } from '../components';

@inject('MovieStore', 'UserStore')
@observer
class Home extends Component {
  constructor() {
    super();

    this.handleSubmit = this.handleSubmit.bind(this);

    this.getMovies = () => this.props.MovieStore.fetchMovies();
  }

  componentDidMount() {
    axios.get('/api/users')
      .then(res => console.log(res.data));
  }

  componentWillMount() {
    this.getMovies();
  };

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      fullname: e.target.fullname.value,
      username: e.target.username.value,
      password: e.target.password.value,
      email: e.target.email.value,
      admin: false
    };
    this.props.UserStore.add(data);

    e.target.fullname.value = '';
    e.target.username.value = '';
    e.target.password.value = '';
    e.target.email.value = '';
  }

  render() {
    const { MovieCard } = HomeComponents;

    const formData = {
      fullname: 'Yunus HİÇYORULMAZLAR',
      username: 'yunuzzlo',
      password: 'asldkd55',
      email   : 'yunus_hicyorulmaz@gmail.com'
    }

    return(
      <DefaultLayout title="Homepage">
        <div className="container py-5">
          {
            this.props.UserStore.addLoading ? (
              <span>Loading...</span>
            ):(
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label htmlFor="fullname">Full Name</label>
                  <input type="text" className="form-control" id="fullname" name="fullname" placeholder="Enter full name" value={formData.fullname} />
                </div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" id="username" name="username" placeholder="Enter username" value={formData.username} />
                </div>
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" id="password" name="password" placeholder="Enter password" value={formData.password} />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" id="email" name="email" placeholder="Enter email" value={formData.email} />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
              </form>
            )
          }
          <br />
          <div className="row">
            <div className="col-12">
              <h4>In Theaters</h4>
            </div>
            {
              this.props.MovieStore.movies.map((movie) => {
                return(
                  <div className="col-md-3" key={movie.id}>
                    <MovieCard id={movie.id} poster={movie.poster_path} title={movie.original_title} />
                  </div>
                );
              })
            }
          </div>
        </div>
      </DefaultLayout>
    );
  };
}

export default Home;
