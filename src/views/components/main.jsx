import React from 'react'
import {Link ,Route} from 'react-router-dom'
import Seachbar from './searchbar';
import Login from './login_form';
import Question from './question';
import Signup_Form from './signup_form';
import Login_form from './login_form';

class Main_view extends React.Component {
  render() {
    return (
        <div className="main">
            <Route path="/search" component={Seachbar} />
            <Route path="/question" component={Question} />
            <Route path="/signup" component={Signup_Form} />
            <Route path="/login" component={Login_form} />
        </div>

    )
  }
}



export default Main_view;
