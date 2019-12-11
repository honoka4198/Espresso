import React from 'react'
import '../../styles/components/payment.css'
import '../../styles/components/gear_components/caption.css';
import { Link } from 'react-router-dom';

class Payment extends React.Component {
  render() {
    return (
      <div className="payment">
        <div className="page-link-nav">
          <section className="page-title-bg-wrap">
            <div className="page-title-bg-wrap__inner">
              <div className="page-title-wrap">
                <div className="breadcrumbs-list">
                  <ol className="mod-panel-layout">
                    <li><Link to="home">ホーム</Link></li>
                    <li>＞</li>
                    <li>お支払い方法</li>
                  </ol>
                  </div>
                  <h1 className="page-title">お支払い方法</h1>
                </div>
              </div>
            </section>
        </div>
        <div class="payment-nav">
        <section class="section-contents__block section-contents__block--bdr-none">
            <h2 class="outer-sub-title">お支払い方法について</h2>
            <div class="section-contents__box">
                <div class="section-contents__box__block">
                    <p><b>【1】代金引換</b></p>
                    <p>代引手数料は弊社が負担いたします。 <br/>（荷物到着時に運送会社にお支払いください。 ）</p>
                </div>
                <div class="section-contents__box__block">
                    <p class="txt-basic"><b>【2】クレジットカード</b></p><br/>
                    <p><b>VISA、Master、JCB、Amex(準備中)</b><br/>がご利用いただけます。お支払い回数は一括となりますのでご了承ください。<br/>
                    <span class="txt-note">※生豆を麻袋及び樽でご購入いただく場合、正確な金額は計量後に確定いたします。<br/>
                    クレジット決済をご利用の場合、弊社にて金額の変更をいたしかねますので<br/>
                    「代金引換」または「クロネコ掛払いサービス」での販売とさせていただいております。
                    </span><br/><br/>
                    クレジットカードの決済は、決済代行会社であるヤマトフィナンシャル株式会社の決済サービス「トークン（JavaScript）型」を利用しています。<br/>
                    当社サーバーを経由せず、直接ヤマトフィナンシャル株式会社にカード情報を送信するため、当店では一切お客様のカード情報を保持いたしません。<br/>
                    </p>
                    <p>決済代行会社の仕様上、環境依存文字での登録名の場合クレジットカードのエラーがでることがあります。<br/>
                    お手数ですが、会員登録名を修正いただけますでしょうか。<br/>
                    【    サポート外文字例】　髙・﨑・倞・㈱・㈲・―・～   </p>
                    <p>お客様のご利用されている環境によっては、正しく動作しない場合がございます。</p><br/>
                    <p>上記以外にも、限度額オーバーや滞納などの理由によりクレジットカードをご利用いただけない場合がございますので、予めご了承くださいませ。<br/>
                    ※カードのご利用に関するお問い合わせは、各カード会社に直接お問い合わせください。</p>
                </div>
                <div class="section-contents__box__block">
                    <p><b>【3】コンビニ決済</b></p>
                    <p>オンラインショップでのご注文完了後、ご注文日を含め7日以内にお近くのコンビニエンスストアでお支払いください。<br/>
                    期限を過ぎますと注文番号が無効になり、その注文番号でのお支払いができなくなりますのでご注意ください。<br/>
                    お支払いは、原則として現金のみとなります。ご入金を確認次第、発送いたします。<br/>
                    コンビニ決済の場合のお支払い可能金額は1回につき「200円以上30万円未満」となります。<br/>
                    領収書：お支払い時にコンビニより発行される領収書をご利用ください。<br/><br/>

                    お近くのコンビニエンスストアからお支払いできます。<br/>
                    </p>
                </div>
                <div class="section-contents__box__block">
                    <p><b>【4】全額ポイント決済</b></p>
                    <p>お持ちのポイント（「1ポイント＝2円」換算）が、お支払い合計金額（商品代金+送料+消費税）<br/>
                    を上回る場合のみ、表示され、ご利用いただけます。<br/><br/>
                    領収書：出荷完了後、お客様ご自身でご注文履歴ページより領収書をご発行いただけます。<br/>
                    </p>
                </div>
            </div>
        </section>

        <section class="section-contents__block section-contents__block--bdr-none">
        <h2 class="outer-sub-title">領収書の発行について</h2>
        <div class="text-box">
          <p class="txt-basic">クレジットカード・掛け払いでのお支払いは、領収書の発行はできません。予めご了承ください。</p>
        </div>
        <div class="section-contents__box">
          <div class="section-contents__box__block">
            <p class="txt-basic"><b>・クレジットカードでのお支払の場合</b></p>
            <p>
              お客様のご契約先（お支払先）はご利用の各クレジット会社様となるため、クレジットカード会社様から発行される請求書（兼ご利用明細書）が領収書となります。
            </p>
          </div>
        </div>
      </section>
        
      <section class="section-contents__block" id="section-delivery-cost">
        <h2 class="outer-sub-title">送料について</h2>
        <p>
          <p>1個口（20kgまで）ごとに下記の通り送料を申し受けます。</p>
          <span class="txt-basic txt-note">※生豆を麻袋・樽でご注文場合、福山通運での配達となります。</span>
        </p>
        <table class="cost-table">
          <tr>
            <th>運送業者</th>
            <td colspan="2">福山通運・佐川急便</td>
            <td>ヤマト運輸</td>
          </tr>
          <tr>
            <th>本州、四国、九州</th>
            <td colspan="2">
              <ul>
                <li>・1個口（20kgまで）ごとに一律530円（税込み）</li>
                <li>・生豆（10kg単位・麻袋）には送料が含まれています。</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>・1個口（20kgまで）ごとに一律980円（税込み</li>
                <li>・生豆（10kg単位・麻袋）ご注文の場合、1個口（20kgまで）ごとに一律450円（税込み）</li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>北海道、沖縄</th>
            <td colspan="2">
              <ul>
                <li>・1個口（20kgまで）ごとに一律780円（税込み）</li>
                <li>※但し、沖縄県の一部と離島につきましては送料を実費計算しこちらからご連絡させて頂きます。</li>
                <li><strong>・生豆を麻袋または樽でのご注文場合</strong></li>
                <li>送料を実費計算し、こちらからご連絡させて頂きます。</li>
              </ul>
            </td>
            <td>
              <ul>
                <li>・1個口（20kgまで）ごとに一律2,620円（税込み）</li>
                <li>※但し、沖縄県の一部と離島につきましては送料を実費計算しこちらからご連絡させて頂きます。</li>
              </ul>
            </td>
          </tr>
        </table>
      </section>
      <section class="section-contents__block">
        <h2 class="outer-sub-title">お届け希望日・希望時間の指定について</h2>
        <div class="text-box">
          <p><b>コーヒー備品をケース単位でご注文の場合</b></p>
          <p>1ケースの重量が20Kg未満でも1個口分の送料を申し受ける場合がございます。<br/><br/></p>
          <p>
            <span class="txt-note">※お急ぎの方は代金引換をご利用ください。</span><br/>
            お届けの地域・ご希望日によっては、運送業者・送料が変わります。<br/>
            クレジット決済の場合、弊社ではご注文金額の変更はいたしかねます。<br/>
            お手数ですが、お急ぎの場合は代金引換をご利用くださいませ。<br/>
          </p>
        </div>
      </section>
      </div>
    </div>
    );
  }
}

export default Payment;
