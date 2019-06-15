import React, { Fragment } from 'react';
import Link from 'next/link';

//import logo from "../assets_dist/img/logo.jpeg";

export default () => {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link href="/">
          <a className="navbar-brand">PXLayer</a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/counter">
                <a className="nav-link">Counter</a>
              </Link>
            </li>
          </ul>
          <Link href="/signin">
            <a className="btn btn-dark">Sign In</a>
          </Link>
          <Link href="/signup">
            <a className="btn btn-dark ml-2">Sign Up</a>
          </Link>
        </div>
      </nav>
    </Fragment>
  );
};
