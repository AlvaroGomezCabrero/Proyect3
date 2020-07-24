import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import AuthService from './../service/AuthService'

import { Switch, Route, Redirect } from 'react-router-dom'

import Navigation from './ui/Navbar'


import SignupForm from './auth/Signup-form'
import LoginForm from './auth/Login-form'
import ProfilePage from './pages/profile'
import IndexPage from './pages/index'

import CourseList from './courses/course-list/course-list'
// import CourseDetail from './courses/course-detail'


import ContentList from './conten/content-list/content-list'
import ContentDetail from './conten/content-detail'


class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedInUser: null,
    }

    this.AuthService = new AuthService()
  }

  setTheUser = user => this.setState({ loggedInUser: user }, () => console.log("El estado de App ha cambiado:", this.state))

  fetchUser = () => {
    this.AuthService
      .isLoggedIn()
      .then(response => this.state.loggedInUser === null && this.setState({ loggedInUser: response.data }))
      .catch(err => console.log({ err }))
  }

  render() {

    this.fetchUser()

    return (

      <>

        <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} handleToast={this.handleToast} />

        <Switch>
          <Route exact path="/" render={() => <IndexPage />} />
          <Route path="/profile" render={() => this.state.loggedInUser ? <ProfilePage loggedInUser={this.state.loggedInUser} /> : <Redirect to='/signup' />}/>
          <Route path="/signup" render={props => <SignupForm {...props} setTheUser={this.setTheUser} handleToast={this.handleToast} />} />
          <Route path="/login" render={props => <LoginForm {...props} setTheUser={this.setTheUser} handleToast={this.handleToast} />} />
          <Route path="/profile" render={() => <ProfilePage loggedInUser={this.state.loggedInUser} />} />

          <Route path="/courses" render={() => <CourseList/>} />
          {/* <Route path="/courses/:course_id" render={props => <CourseDetail {...props} />} /> */}

          <Route path="/conten" render={() => <ContentList />} />
          <Route path="/conten/:conten_id" render={() => <ContentDetail />} />

        </Switch>

        {/* Añadir un Footer */}


      </>

    )
  }
}

export default App;
