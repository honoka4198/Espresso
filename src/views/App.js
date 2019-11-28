import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Sidelist from './components/sidelist';
import Signup_Form from './components/signup_form';

class App extends Component {
  render() {
    return (
      <main>
       <header>
         <Header />
       </header>
       <div>
         <Sidelist />
       </div>
         <Signup_Form />
       <footer>
         <Footer />
       </footer>
     </main>
    );
  }
}

export default App;
