import React from 'react';
import Card from './Card';
import '../App.css';

function BodyAndBath(props){

return(
<>
    <div className="Container">
        <div className="row detail-banner-top">
            <h1 className="mt-5 mb-5">Body & Bath</h1>
        </div>
        <div className="row">
            {
            props.product.map(
              (a, i) => {
                return(
                  <Card product={a} i={i} key={i}></Card>
                )
              }
            )
          }
          <button className="btn btn-seemore" onClick={()=>{  
            if(props.product.length === 6) {
            fetch('https://Ji-Yeon0107.github.io/shopping/productList.json')
            .then( res=> res.json() )
            .then( res=>{ props.setProduct([...props.product, ...res]);})
            .catch(()=>{
            alert("로드에 실패했습니다!")
            })
          }else{
            alert('마지막입니다')
          }
            }}>더보기
          </button>
          
        </div>
 </div>
</>
)
}

export default BodyAndBath