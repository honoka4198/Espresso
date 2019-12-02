import React from 'react'
import "../../styles/components/header.css"
import { BrowserRouter, Link ,Route} from 'react-router-dom'
import Seachbar from './searchbar';

class Header extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="header">
          <div className="box">
            <a href="#" align="left"><img src="favicon.ico" /></a>
            <ul className="header_ul">
              <Linktag id="home" name="ホーム"/>
              <Linktag id="search" name="商品一覧"/>
              <Linktag id="login" name="ログイン"/>
              <Linktag id="shopping" name="お買い物かご"/>
              <Linktag id="info" name="お問い合わせ"/>
            </ul>
            <Route path="/search" component={Seachbar} />
          </div>
        </div>
    </BrowserRouter>

    )
  }
}

function Linktag(props) {
  return(
    <li>
      <Link to={props.id} className="linktag">{props.name}</Link>
    </li>
  )
}

export default Header;
