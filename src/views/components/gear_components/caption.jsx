import React from 'react'
import { BrowserRouter,Link } from 'react-router-dom';

class Caption extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <section className="page-title-bg-wrap">
                    <div className="page-title-bg-wrap__inner">
                        <div className="page-title-wrap">
                            <div className="breadcrumbs-list">
                                <ol className="mod-panel-layout">
                                    <li><Link to="home">ホーム</Link></li>
                                    <li>＞</li>
                                    <li>商品一覧</li>
                                </ol>
                            </div>
                            <h1 className="page-title">商品一覧</h1>
                        </div>
                    </div>
                </section>
            </BrowserRouter>
        );
    }
}

export default Caption;
