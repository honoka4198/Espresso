import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Sidelist from './components/sidelist';

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
       <footer>
         <Footer />
       </footer>
     </main>
    );
  }
}

export default App;
