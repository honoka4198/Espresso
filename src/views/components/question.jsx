import React from 'react'
import '../../styles/components/question.css';
import '../../styles/components/gear_components/caption.css';
import { BrowserRouter,Link,Route } from 'react-router-dom';

class Question extends React.Component {
    render() {
      return (
        <BrowserRouter>
        <div className="page-link-nav">
          <section className="page-title-bg-wrap">
            <div className="page-title-bg-wrap__inner">
              <div className="page-title-wrap">
                <div className="breadcrumbs-list">
                  <ol className="mod-panel-layout">
                    <li><Link to="home">ホーム</Link></li>
                    <li>＞</li>
                    <li>よくあるご質問</li>
                  </ol>
                  </div>
                  <h1 className="page-title">よくあるご質問</h1>
                </div>
              </div>
            </section>
            <ul className="panel-layout">
                <Linktag id="about_product" name="商品について" />
                <Linktag id="about_order" name="ご注文について" />
                <Linktag id="about_delivery" name="配送について" />
                <Linktag id="about_shop" name="当ショップについて" />
            </ul>

            <Route path="/about_product" component={Product} />
            <Route path="/about_order" component={Order} />
            <Route path="/about_delivery" component={Delivery} />
            <Route path="/about_shop" component={Shop} />
        </div>
      </BrowserRouter>
      );
    }
  }

  const Product = () => (
    <div class="faq-wrap" id="category-02">
    <h2 class="sub-title">商品について</h2>
    <ul class="toggle-accordion-list">
        <li><span class="toggle-accordion">
              コーヒーの保管はどこが適していますか？
            </span>
            <div class="toggle-accordion-target">
              <p>高温・多湿を避け、冷暗所にて保管してください。また、開封後は密閉容器に入れてできるだけ早くお使いください。<br/> 
              冷凍庫にて保存することをおすすめします。<br/> 
              冷蔵庫保存の場合、他の食品のにおいが移りやすい為、必ず密封し、お早めにお召し上がりください。<br/><br/></p>
            </div>
        </li>
        <li>
            <span class="toggle-accordion">
              アイスコーヒー豆の油について
            </span>
            <div class="toggle-accordion-target">
              <p>コーヒー豆は、深煎りすると、植物性の脂肪分が表面に現れ、油でベタベタしている状態になることがあります。<br /> 
              ※ロースト直後のアイスコーヒー豆(深煎りの豆）を、パックするとこの様な状態が起こりやすくなります。<br /> 
              品質、味的には問題はありません。<br/><br/></p>
            </div>
        </li>
        <li>
            <span class="toggle-accordion">
              レギュラーコーヒー袋が真空状態で固くなっている時と、やわらかい状態になっている時があります。なぜでしょうか？
            </span>
            <div class="toggle-accordion-target">
              <p>製造時には、真空パックされています。<br/> 
              時間の経過とともに、『ガス抜きバルブ』（袋の前上部の真ん中に取り付けてあります）からコーヒー豆の炭酸ガスが外へ放出されますので、次第にやわらかく(ソフト)なっていきます。<br/> 
              深煎りほど、炭酸ガスがたくさん出るため、短時間で真空パックからやわらかい状態になります。<br/>
            　但し、季節、室温、保管方法により、やわらかくなるまでの日数は異なりますことをご了承ください。(室温が高いほどソフトになりやすい特性があります。)<br/>
            　お届けの際に、カチカチの真空状態とソフト状態の商品が混在する場合がありますが、品質は全く問題ありませんので、ご安心してご使用ください。<br/><br/></p>
            </div>
        </li>
        <li>
            <span class="toggle-accordion">
              返品・交換はできますか？       
            </span>
            <div class="toggle-accordion-target">
              <p>商品には万全を期しておりますが、万が一、商品が不足・破損・誤りがあった場合は、お届け後7日間以内に当店までご連絡ください。<br/> 
              早急に返品・交換をさせていただきます。（返品・交換に掛かる発送費用は当店が負担致します。）<br/> 
              但し、お客様都合による場合は、返品・交換をお断りさせていただく場合があります。<br/><br/></p>
            </div>
        </li>
        <li>
            <span class="toggle-accordion">
              お取り寄せ商品は配達まで何日くらいかかりますか？     
            </span>
            <div class="toggle-accordion-target">
              <p>カリタの商品であれば約1週間程度、メリタ・ハリオなどは3週間前後みていただいています。（一部在庫を持っているものもあります。）<br/> 
              メーカー側の在庫の関係上、それ以上のお時間をいただく場合もございます。<br/> 
              また、お取り寄せ商品につきましては、ご注文後のキャンセルはご容赦くださいませ。<br/><br/></p>
            </div>
        </li>
    </ul>
    </div>
  )

  const Order = () => (
    <div class="faq-wrap" id="category-03">
    <h2 class="sub-title">ご注文について</h2>
    <ul class="toggle-accordion-list">
        <li>
            <span class="toggle-accordion">
            支払いの際、代引手数料はかかりますか？             
            </span>
            <div class="toggle-accordion-target">
              <p>代引手数料はいただいておりません。弊社で負担します。<br/><br/></p>
            </div>
        </li>
        <li>
            <span class="toggle-accordion">
              初めての注文ですが、支払い方法はどのようにすればいいですか？ 
            </span>
            <div class="toggle-accordion-target">
              <p>コーヒー流通センターをご利用いただく際のお支払い方法は、「代金引換」「クレジット決済」「コンビニ支払い」<br/><br/></p>
            </div>
        </li>
        <li>
            <span class="toggle-accordion">
              できるだけ早くほしいのですが注文後どれくらいで届きますか？       
            </span>
            <div class="toggle-accordion-target">
              <p>平日（月～金）17時までのご注文は、翌営業日以降発送いたします。（在庫不足、取り寄せ品などを除く）<br/> 
              それ以降のご注文は翌々営業日の発送となります。<br/> 
              お急ぎの場合は必ず至急という事をご記入ください。可能な限りご対応させていただきます。<br />
              ※但しエリアによって到着日時は異なります。<br /><br />
              </p>
            </div>
        </li>
        <li>
            <span class="toggle-accordion">
              開店時間はいつですか？                  
            </span>
            <div class="toggle-accordion-target">
              <p>平日（月～金）9:00～17:00<br />土日祝　　　　お休み<br />お盆・お正月　お休み<br /><br /><br />
              ※お電話でのお問い合わせは、平日9:00～17:00のみとなっております。<br /> 
              ※お休みの前後の発送は、交通事情や運送会社の出荷量増加に伴いお届けが遅れることがございますので、お早めにご注文ください。<br/><br/></p>
            </div>
        </li>
    </ul>                                                                                                                                                              
    </div>
  )

  const Delivery = () => (
    <div class="faq-wrap" id="category-04">
    <h2 class="sub-title">配送について</h2>
    <ul class="toggle-accordion-list">
        <li>
            <span class="toggle-accordion">
              配達日・時間帯の指定はできますか？        
            </span>
            <div class="toggle-accordion-target">
              <p>配達ご希望日の5日前（平日：月～金）にはご注文ください。<br class="firstChild empty" /> 
              ご希望日にお届けできない場合はご連絡させていただきます。<br /><br />細かく時間指定をご希望の場合は、下記の時間帯からお選びください。<br class="lastChild empty" /> 
              尚、20時以降の配達は承っておりません。<br /><br />・午前中<br class="firstChild empty" /> 
              ・12時～14時<br class="empty" /> ・14時～16時<br class="empty" /> 
              ・16時～18時<br/> ・18時～20時<br /><br />
              ※配送会社によってご指定いただける時間帯は異なります。
              <br/></p>
            </div>
        </li>
    </ul>
    </div>
  )

  const Shop = () => (
    <div class="faq-wrap" id="category-05">
    <h2 class="sub-title">当ショップについて</h2>
    <ul class="toggle-accordion-list">
        <li>
            <span class="toggle-accordion">
              サイトが正常に表示されないのですが…？  
            </span>
            <div class="toggle-accordion-target">
              <p>コーヒー流通センターのシステムは、下記のOS/ブラウザを対象に最適化した設計を行っています。（2018年2月時点で最新のものです）<br /><br />
              Windows 10：Chrome最新、Firefox最新、edge最新、IE11<br />Mac：safari最新<br /> iOS11：safari最新 <br />
              アンドロイドOS7.x：Chrome最新</p>
              <p>※古いバージョンのブラウザ、またはUNIXでは、一部表示の乱れや動作の不良が発生する場合があります。<br /> 
              上記以外のOS/ブラウザをお使いの場合は、さしつかえなければバージョンアップをおすすめいたします。<br/><br/>
              </p>
            </div>
        </li>
        <li>
            <span class="toggle-accordion">
              問合せメールを送ったけど、返信が来ない。  
            </span>
            <div class="toggle-accordion-target">
              <p>ご質問いただいた当日または翌日にお返事をお送りしています。<br/> 
              （休業日の前日18時以降にいただいたご質問については、休業日明けの返信になります。）<br /> 
              もし、返事が遅いと思われた時は、ご一報ください。<br class="empty" /> 
              また、フリーメールをお使いの場合はメールが届かなかったり、迷惑メールホルダーに入っていることもあるようです。<br /> 
              そのような時は違うメールアドレスを使っていただいたくことをお勧めします。<br /><br />
              ※フリーメールとは、インターネットを通じて無料で提供されるeメールサービスです。<br /> 
              ・yahoo<br/> ・google<br/> ・Hotmail<br /> ・AOL<br/><br/></p>
            </div>
        </li>
        <li>
            <span class="toggle-accordion">
              販売価格は変わることはありますか？
            </span>
            <div class="toggle-accordion-target">
              <p>コーヒーは相場商品のため、コーヒー相場が高騰した場合、値上げをさせていただく場合があります。<br/> 
              またコーヒー器具等のメーカー品につきましても、メーカー小売価格が上昇した場合、販売価格を値上げさせていただくことになります。
              <br/><br/></p>
            </div>
        </li>
        <li>
            <span class="toggle-accordion">
              注文ができない、または注文確認画面に進めないのですが。                 
            </span>
            <div class="toggle-accordion-target">
              <p>セキュリティ強化のためにcookieが無効に設定されている可能性があります。 <br/> 
              Cookieの設定を有効にしてください。
              <br/><br/></p>
            </div>
        </li>
        <li>
            <span class="toggle-accordion">
              ログインすることができません。        
            </span>
            <div class="toggle-accordion-target">
              <p>ログインできない場合は、以下の原因が考えられます。<br/> <br/> 
              ・メールアドレス、もしくはパスワードの情報が正しくない。半角、全角、大文字、小文字が<br/>
               間違っていないか再度ご確認ください。<br /> <br/> ・パスワードを忘れてしまった場合。<br /> 
               パスワード問い合わせ画面より、登録されたメールアドレスをご入力のうえ、<br /> 
               「パスワードを送信する」ボタンをクリックしてください。<br /><br /><Linktag id="" name="お問い合わせフォーム"/>
               パスワード問い合わせはこちらから。<br /><br/> 
               ・メールアドレスを忘れてしまった場合。<br/> 
               登録完了時にメール送信しております。そちらがご登録のメールアドレスになります。<br/> 
               メールを確認することができない場合、または、メールアドレスをお忘れの場合は、<br/> 
               コーヒー流通センターまでお問い合わせください。<br/><br/></p>
            </div>
        </li>
        <li>
            <span class="toggle-accordion">
              ギフトは対応していますか？          
            </span>
            <div class="toggle-accordion-target">
              <p>弊社商品はギフト・お中元・お歳暮としての配送は行っておりません。<br/> 
              お送りする際には原則包装などはない状態でお送りいたします。
              <br/><br/></p>
            </div>
        </li>
    </ul>
  </div>
  )

  function Linktag(props) {
    return(
      <li>
        <Link to={props.id} className="question_linktag">{props.name}</Link>
      </li>
    )
  }

export default Question;