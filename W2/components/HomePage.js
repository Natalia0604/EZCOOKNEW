import React from 'react';
import {Link} from "react-router-dom";


function HomePage(){
        
        return <div className="container">
            <div className="title">React 練習專案</div>
            <div className="welcome">歡迎光臨我的頁面</div>
            <Link to="/list">
                <button className="start_btn">點此開始</button>
            </Link>
        </div>
}
export default HomePage;