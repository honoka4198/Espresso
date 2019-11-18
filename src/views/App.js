import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import LoginForm from './components/login_form';
import SignupForm from './components/signup_form';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <LoginForm />
        <Footer />
        <SignupForm />
      </div>
    );
  }
}

export default App;
