import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import AuthService from './../service/AuthService'

import { Switch, Route, Redirect } from 'react-router-dom'

import Navigation from './ui/Navbar'
//import Message from './ui/CustomToast'

import CourseList from './courses/course-list/course-list'
import CourseDetail from './courses/course-detail/course-detail'

import MaterialList from './materials/material-list/material-list'

import MaterialForm from './materials/material-form'



import ComedyList from './materials/materialCards/comedy/comedyList'



import SignupForm from './auth/Signup-form'
import LoginForm from './auth/Login-form'
import ProfilePage from './pages/profile'
import IndexPage from './pages/index'
//import MaterialDetail from './materials/material-detail/material-detail'


class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedInUser: null,
      toast: {
        visible: false,
        text: ''
      }
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

  // handleToast = (visible, text = '') => {
  //   let toastCopy = { ...this.state.toast }
  //   toastCopy = { visible, text }
  //   this.setState({ toast: toastCopy })
  // }

  render() {

    this.fetchUser()

    return (

      <>

        <Navigation setTheUser={this.setTheUser} loggedInUser={this.state.loggedInUser} handleToast={this.handleToast} />

        <Switch>
          <Route exact path="/" render={() => <IndexPage />} />

          <Route path="/profile" render={() =>
            this.state.loggedInUser ? <ProfilePage loggedInUser={this.state.loggedInUser} /> : <Redirect to='/signup' />} 
          />

          <Route exact path="/courses" render={() => <CourseList loggedInUser={this.state.loggedInUser} />} />
          <Route path="/courses/:course_id" render={props => <CourseDetail {...props}/>} /> 

          <Route exact path="/materials" render={() => <MaterialList loggedInUser={this.state.loggedInUser} />} />
          
          <Route exact path="/materials/new-comedia" render={() => <ComedyList/>} />{/* //me lo subo para evitar error 500, tema:id */}


          <Route path="/materials/new-tragedia" render={props => <MaterialForm {...props} />} />
          <Route path="/materials/new-infantil" render={props => <MaterialForm {...props} />} />
          <Route path="/materials/new-mimica" render={props => <MaterialForm {...props} />} />
         

          <Route path="/signup" render={props => <SignupForm {...props} setTheUser={this.setTheUser} handleToast={this.handleToast} />} />
          <Route path="/login" render={props => <LoginForm {...props} setTheUser={this.setTheUser} handleToast={this.handleToast} />} />
          <Route path="/profile" render={() => <ProfilePage loggedInUser={this.state.loggedInUser} />} />

        </Switch>

        {/* <Message {...this.state.toast} handleToast={this.handleToast} /> */}

        {/* Añadir un Footer */}


      </>

    )
  }
}

export default App;
