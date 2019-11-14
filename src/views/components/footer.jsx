import React from 'react'
import '../../styles/components/footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className="footer">
        <ul id="footerNavi">
            <li><link to="/question">よくあるご質問  | </link></li> 
            <li><link to="/payment_methods">お支払い方法  | </link></li>
            <li><link to="/delivery_charge">配送料について  | </link></li>
            <li><link to="/TOS">ご利用規約  | </link></li>
            <li><link to="/notation">特定商取引法に基づく表記  | </link></li>
            <li><link to="/policy">プライバシー＆セキュリティーポリシー</link></li>
        </ul>
        <p id="Copyright">Copyright @ 2019 coffee shop.</p>
      </div>
    );
  }
}

export default Footer;
