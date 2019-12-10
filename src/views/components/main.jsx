import React from 'react'
import {Link ,Route} from 'react-router-dom'
import Seachbar from './searchbar';
import Login from './login_form';
import Question from './question';
import Signup_Form from './signup_form';
import Login_form from './login_form';
import Payment from './payment';
import Contact_form from './contact_form';
import Home_form from './home_form';

class Main_view extends React.Component {
  render() {
    return (
        <div className="main">
            <Route path="/search" component={Seachbar} />
            <Route path="/question" component={Question} />
            <Route path="/signup" component={Signup_Form} />
            <Route path="/login" component={Login_form} />
            <Route path="/payment" component={Payment} />
            <Route path="/info" component={Contact_form} />
            <Route path="/home" component={Home_form} />
        </div>

    )
  }
}



export default Main_view;
