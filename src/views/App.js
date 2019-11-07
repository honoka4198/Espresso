import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <main>
       <header>
         <Header />
       </header>
       <div>
         
       </div>
       <footer>
         <Footer />
       </footer>
     </main>
    );
  }
}

export default App;
