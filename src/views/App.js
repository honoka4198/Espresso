import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Sidelist from './components/sidelist';
import Main_view from './components/main';
import { BrowserRouter, Link ,Route} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <body>
         <header>
           <Header />
         </header>
         <main>
            <Sidelist />
            <Main_view />
         </main>
         <footer>
           <Footer />
         </footer>
       </body>
      </BrowserRouter>

    );
  }
}

export default App;
