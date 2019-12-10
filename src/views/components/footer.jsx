import React from 'react'
import '../../styles/components/footer.css';
import {Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
        <div className="footer">
          <ul id="footerNavi">
            <Linktag id="question" name="よくあるご質問"/>
            <Linktag id="payment" name="お支払方法"/>
            <Linktag id="delivery_charge" name="配送料について"/>
            <Linktag id="TOS" name="ご利用規約"/>
            <Linktag id="notation" name="特定商取引法に基づく表記"/>
            <Linktag id="policy" name="プライバシー＆セキュリティーポリシー"/>
          </ul>
          <p id="Copyright">Copyright @ 2019 coffee shop.</p>
        </div>
    );
  }
}

function Linktag(props) {
  return(
    <li>
      <Link to={props.id} className="footer_linktag">{props.name}</Link>
    </li>
  )
}

export default Footer;
