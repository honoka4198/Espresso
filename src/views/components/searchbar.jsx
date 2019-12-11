import React from 'react'
import '../../styles/components/searchbar.css';
import '../../styles/components/gear_components/caption.css';
import Search from '../../views/components/gear_components/caption.jsx';

class Seachbar extends React.Component {
  render() {
    return (
      <div className="form_area">
      <Search />
        <div className="searchbar">
          <div className="section" align="center">
            <p> キーワード、条件を指定して商品を検索することができます。</p>
            <input type="text" name="search_keyword" size="40" id="form_search_sort_type" />
          </div>
          <div className="section" align="center">
            <select name="search_category_id">
              <option value="" selected>商品カテゴリー</option>
              <option value="1">焼豆</option>
              <option value="2">ドリップバッグコーヒー</option>
              <option value="3">インスタントコーヒー</option>
              <option value="4">アイスコーヒー</option>
              <option value="5">その他(コーヒー関連商品)</option>
              <option value="6">備品・消耗品</option>
            </select>
            <select name="search_sales_price">
              <option value="" selected>価格</option>
              <option value="11">1~1000</option>
              <option value="12">1001~2000</option>
              <option value="13">2001~3000</option>
              <option value="14">3001~4000</option>
              <option value="15">4001~5000</option>
              <option value="16">5001~10000</option>
              <option value="17">10001~20000</option>
              <option value="18">20001~</option>
            </select>
          </div>
          <div className="search-btn">
            <button type="submit" class="js-action-submit" value="検索">検索</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Seachbar