import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "../../../../src/styles/components/gear_components/mypage.css";

class MyPage extends Component{
    render(){
        return(
            <li>
                <Link to="mypage" className="linktag">マイページ</Link>
                <ul>
                  <Linktag id="cart" name="カート" />
                  <Linktag id="buylog" name="購入履歴" />
                  <Linktag id="userchange" name="ユーザー情報設定・変更" />
                  <Linktag id="address" name="届け先住所" />
                  <Linktag id="passchange" name="パスワード変更" />
                  <Linktag id="paymentchange" name="支払変更" />
                  <Linktag id="logout" name="ログアウト" />
                </ul>
              </li>
        );
    }
}

function Linktag(props) {
    return (
      <li>
        <Link to={props.id} className="linktag">{props.name}</Link>
      </li>
    )
  }

export default MyPage;