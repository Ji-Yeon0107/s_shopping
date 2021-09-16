import React, {useState} from 'react';
import { useHistory } from 'react-router-dom'


function Gifts(props){

    let history = useHistory();

    let promotionList = [
        {
            id:0,
            imgURL: "https://ji-yeon0107.github.io/s_shopping/promotion0.jpg",
            title: '도쿄 Edition, New Arrival For Gift',
            desc: <html>`업그레이드 된 향의 샤워 오일과 바디 로션을 만나보세요.<br/>
            최다 판매 제품 20%의 세일 기회`</html>
         },
        {
           id:1,
           imgURL: "https://ji-yeon0107.github.io/s_shopping/promotion1.jpg",
           title: '20% Sale, 샤워오일 & 바디로션 Collection Gift',
           desc: <html>`업그레이드 된 향의 샤워 오일과 바디 로션을 만나보세요.<br/>
           최다 판매 제품 20%의 세일 기회`</html>
        },
        {
            id:2,
            imgURL: "https://ji-yeon0107.github.io/s_shopping/promotion2.jpg",
            title: '여행용 Mini Kit, HandCream & Shower Oil',
            desc: <html>`[Package증정] 인기제품들의 귀여운 mini제품<br/>이번 기회에 만나보세요`</html>
         },
        {
            id:3,
            imgURL: "https://ji-yeon0107.github.io/s_shopping/promotion3.jpg",
            title: 'Big Sale, Body Scrub Delicate Jasmine',
            desc: <html>`Body Scrub 새로운 향이 출시되었습니다! <br/> 출시기념 이벤트 중`</html>
         },
         
    ]
return(
<>
    <div className="Container">
        <div className="row detail-banner-top">
            <h1 className="mt-5 mb-5">Gifts & Promotion</h1>
        </div>
        <div className="row">
            <h2 className="title mt-5 mb-5">Promotion</h2> 
            <ul>
                {
                promotionList.map((listItem, i)=>{
                    return (
                    <li className="promotion-list mt-3 hover" onClick={()=>{ 
                        history.push('/detail/'+props.product[i].id) }}>
                        <div><img className="promo-img" src={listItem.imgURL} alt="promotion"/></div>
                        <div>
                            <h3>[{listItem.title}]</h3>
                            <p className="mt-4">{listItem.desc}</p>
                        </div>
                    </li>
                    )
                })
            } 
            </ul>
    </div>
</div>
</>
)
}

export default Gifts