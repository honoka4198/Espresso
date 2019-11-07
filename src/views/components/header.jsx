import React from 'react'
import "../../styles/components/header.css"

class Header extends React.Component {
  render() {
    return (
        <div>
          <div className="header">
            <h1>Header</h1>
            <div className="box">
              <ul>
                <li className="en_btn">
                  <a id="goEnglishPage-h" shape="rect" href="#">English</a>
                </li>
                <li className="search_btn">
                  <a shape="rect" href="#">商品検索</a>
                </li>
                <li className="login_btn">
                  <a id="goLoginPage-h" shape="rect" href="#">ログイン</a>
                </li>
                <li className="shopping_btn">
                  <a shape="rect" href="#">お買いものかご</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
    )
  }
}

export default Header;
