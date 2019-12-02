import React from 'react'
import "../../styles/components/header.css"
import {Link ,Route} from 'react-router-dom'

class Header extends React.Component {
  render() {
    return (
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
          </div>
        </div>

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
