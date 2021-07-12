import React from 'react';

export default function SearchBar() {
    return (
    <>
        <div className="search-bar-container">
            <div className="search-1">
                <label className="search-text">關鍵食材</label>
                <input className="search-input"/><br/>
                <div>把輸入的食材顯示在這邊</div>
                <div className="search-catergory">
                    <label className="search-text">料理分類</label>
                    <select name="serving">
                        <option value="">--請選擇種類--</option>
                        <option value="ch">台式</option>
                        <option value="ja">日式</option>
                        <option value="it">義式</option>
                        <option value="am">美式</option>
                    </select><br/>
                        <button className="search-btn">搜尋</button>
                </div>
            </div>
            <div className="search-2">
                <label className="search-text-2">找食譜</label>
                <input className="search-input"/>
                <div>
                    <button className="search-btn">搜尋</button>
                </div>
            </div>
        </div>
    </>
    )
}
