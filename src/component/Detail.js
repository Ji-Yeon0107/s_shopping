import { Nav } from 'react-bootstrap'
import React, { useEffect, useState } from 'react';
// import { propTypes } from 'react-bootstrap/esm/Image';
import { useHistory, useParams } from 'react-router-dom';
// import { CSSTransition } from "react-transition-group"
import '../App.css'
import DetailData from '../data/detailData'
import { connect, useSelector, useDispatch  } from 'react-redux'
import BodyAndBath from './BodyAndBath';


function Detail(props) {
 const body = document.querySelector('body')
  function controlScroll() {
    if(props.cartMessage === true){
    body.style.overflow = 'hidden'
    }else if(props.cartMessage === false) {
    body.style.overflow = 'visible'
  }
  }

let state = useSelector((state)=> state)
let dispatch = useDispatch();

let [activeTab, activeTabM] = useState(0) ;
let [tabSwitch, tabSwitchM] = useState(false);
let [alertMessage, alertMessageM] = useState(true);

let history = useHistory();
let { num } = useParams();
let findProduct = props.product.find(function(pro){ return pro.id == num })

useEffect(()=>{
  let alertTimer = setTimeout(()=> {alertMessageM(false)}, 3000);
  return ()=>{ clearTimeout(alertTimer) }
},[])

return(
<> 

  {
    props.cartMessage === true
  
    ? (
      <div className ="modal-cart">
        {controlScroll()}
        <p>장바구니에 담겼습니다.</p>
        <span className="hover" onClick={()=>props.setCartMessage(false)}>계속보기</span>
        <span className="hover" onClick={()=>{
          history.push('/cart');
        }}>장바구니로</span>
      </div>
    )
    : null
  }
  {controlScroll()}
  <div className="detail-banner-top">
      <h1>Products</h1>
  </div>
  <div className="container">
    <div className="mt-5 mb-5">
      <h2 className="title">
        Detail
      </h2> 
    </div>

    <div className="row">
    {
    alertMessage ===true
    ? (
      <div className="my-alert">
      <p>재고가 얼마 남지 않았습니다! <br/> 구매를 서두르세요.</p>
    </div>
    )
    :null
  }
      <div className="col-md-6">
        <img src={'https://ji-yeon0107.github.io/s_shopping/product' + (findProduct.id) + '.png'} width="100%" />
      </div>
      <div className="col-md-6 margin">
        <h4 className="pt-5">{findProduct.title}</h4>
        <p>{findProduct.content}</p>
        <p>{findProduct.price} 원</p>
        <button className="btn btn-danger" onClick={() => { 
          props.setCartMessage(true); 
          props.dispatch({type : '항목추가', payload:{ id:state.length, name:findProduct.title, quan:1, price: findProduct.price}})
        }
          }>주문하기</button>
        <button className="btn btn-danger" onClick={ ()=>{
          history.goBack()
        }
          }>돌아가기</button> 
      </div>
    </div>
    

    <Nav className="mt-5" variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={()=>{ tabSwitchM(false);activeTabM(0) }}><p className="txt-color">제품상세</p></Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={()=>{ tabSwitchM(false); activeTabM(1) }}><p className="txt-color">배송/교환/환불</p></Nav.Link>
        </Nav.Item>
    </Nav>
      <TabContent activeTab={activeTab} tabSwitchM={tabSwitchM}/>
    {/* <CSSTransition in={tabSwitch} classNames="tab-ani" timeout={500}>
      <TabContent activeTab={activeTab} tabSwitchM={tabSwitchM}></TabContent>
    </CSSTransition> */}
  </div> 
</>
)
}

function TabContent(props) {
// 등장하거나 업데이트 될 떄 tabSwitch를 true로 바뀌게
  useEffect(()=>{
    props.tabSwitchM(true)
  },[])
  if(props.activeTab ===0 ) {
    return <div className="w-800 mt-5 mb-5">{DetailData[1].desc}</div>
  } else if(props.activeTab ===1) {
    return <div className="w-800 mt-5 mb-5">{DetailData[0].desc}</div>
  }
}

function getState(state) {
  return {
      state : state.reducer
}
}

export default connect(getState)(Detail)
