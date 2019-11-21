import React, { Component } from 'react';
import Header from './components/header';
import Footer from './components/footer';
import Sidelist from './components/sidelist';
import {MuiThemeProvider} from '@material-ui/core/styles'  // 追加
import {theme} from './components/theme'  // 追加

class App extends Component {
  render() {
    return (
      <main>
       <header>
         <Header />
       </header>
       <div>
        <MuiThemeProvider theme={theme}>  {/* 追加 */}
         <Sidelist />
        </MuiThemeProvider>
       </div>
       <footer>
         <Footer />
       </footer>
     </main>
    );
  }
}

export default App;
