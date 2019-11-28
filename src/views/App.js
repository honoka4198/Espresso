import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Sidelist from './components/sidelist';
import Signup_Form from './components/signup_form';

class App extends Component {
  render() {
    return (
      <body>
       <header>
         <Header />
       </header>
       <main>

         
       </main>
         <Signup_Form />
       <footer>
         <Footer />
       </footer>
     </body>
    );
  }
}

export default App;
