import React from 'react'
import "../../styles/components/header.css"
import { BrowserRouter, Route, Link } from 'react-router-dom'
import App from '../App'

class Header extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="header">
          <div className="box">
            <a href="#" align="left"><img src="favicon.ico" /></a>
            <ul className="header_ul">
              <li className="home_btn">
                <Link to="/home">ホーム</Link>
                <Route exact path='/Home' component={App} />
              </li>
              <li className="search_btn">
                <Link to="/search">商品一覧</Link>
              </li>
              <li className="login_btn">
                <Link to="/login">ログイン</Link>
              </li>
              <li className="shopping_btn">
                <Link to="/shopping">お買い物かご</Link>
              </li>
              <li className="info_btn">
                <Link to="/info">お問い合わせ</Link>
              </li>
            </ul>
          </div>
        </div>
      </BrowserRouter>

    )
  }
}

export default Header;