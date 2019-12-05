import React from 'react'
import {Link ,Route} from 'react-router-dom'
import Seachbar from './searchbar';
import Login from './login_form';

class Main_view extends React.Component {
  render() {
    return (
        <div className="main">
            <Route path="/search" component={Seachbar} />
        </div>

    )
  }
}



export default Main_view;
