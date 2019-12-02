import React from 'react'
import "../../styles/components/sidelist.css"

class Sidelist extends React.Component {
  render() {
    return (
        <div className="sidelist">
          <div className="sidelistbox">
            {/*<a href="#" align="left"><img src="favicon.ico" /></a>*/}
            <ul className="sidelist_ul">
              <div id="menu">
                  <Linktag id="beans" name="焼豆"/>
                  <Linktag id="dripbag" name="ドリップバッグコーヒー"/>
                  <Linktag id="instant" name="インスタントコーヒー"/>
                  <Linktag id="ice" name="アイスコーヒー"/>
                  <Linktag id="othorproducts" name="その他（コーヒー関連商品）"/>
                  <Linktag id="equipmentexpendables" name="備品・消耗品"/>
              </div>
            </ul>
              <div className="sidelist_space"></div>
          </div>
        </div>
    )
  }
}

function Linktag(props) {
  return(
    <li>
      <Link to={props.id} className="sidelist_linktag">{props.name}</Link>
    </li>
  )
}

export default Sidelist;
