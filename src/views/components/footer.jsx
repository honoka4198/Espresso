import React from 'react'
import '../../styles/components/footer.css';
import { BrowserRouter,Link } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="footer">
          <ul id="footerNavi">
            <li><Link to="question">よくあるご質問</Link></li><li>  | </li>
            <li><Link to="payment_methods">お支払い方法</Link></li><li>  | </li>
            <li><Link to="delivery_charge">配送料について</Link></li><li>  | </li>
            <li><Link to="TOS">ご利用規約</Link></li><li>  | </li>
            <li><Link to="notation">特定商取引法に基づく表記</Link></li><li>  | </li>
            <li><Link to="policy">プライバシー＆セキュリティーポリシー</Link></li>
          </ul>
          <p id="Copyright">Copyright @ 2019 coffee shop.</p>
        </div>
      </BrowserRouter>
    );
    
  }
}

export default Footer;
