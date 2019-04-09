/** @format */

import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
        <div className="container">
          <Link className="navbar-brand" to="/">
            DevConnector
          </Link>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav" />
          <span className="navbar-toggler-icon" />
        </div>

        <div className="collapse navbar-collapse" id="mobile-nav">
          <Link className="nav-item" to="/profiles">
            Developers
          </Link>

          <ul className="navbar-nav ml-auto">
            <Link className="nav-link" to="/register">
              Sign Up
            </Link>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar
