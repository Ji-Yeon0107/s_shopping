import React, { useEffect } from 'react';
import { Table } from 'react-bootstrap';
// import { propTypes } from 'react-bootstrap/esm/Image';
import { connect, useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import '../App.css'

function Cart(props) {
    let state = useSelector((state)=> state)
    let dispatch = useDispatch();
    let history =useHistory();

    const body = document.querySelector('body')
    useEffect(()=>{
        props.setCartMessage(false);
        body.style.overflow = 'visible'
        return null
    },[])
    let copy = [...state];

    const calcPriceSum = ()=>{
        let sum = 0
        for(var i=0; i < copy.length; i++)
        sum += copy[i].quan*copy[i].price;
        return sum
    }
    const calcQuanSum = ()=>{
        let sum = 0
        for(var i=0; i < copy.length; i++)
        sum += copy[i].quan;
        return sum
    }

return(
    <div className="w-800">
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>상품번호</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                    <th>가격</th>
                    <th>제거</th>
                </tr>
            </thead>
            <tbody>
                {state.map((listItem, i)=>{
                return(
                    <tr key={i}> 
                        <td>{ listItem.id }</td>
                        <td>{ listItem.name }</td>
                        <td>{ listItem.quan }</td>
                        <td>
                            <button className="button-quan" onClick={()=>{ 
                            dispatch({ 
                                type: '수량증가', item : listItem.id, price : listItem.price }) }}>+
                            </button>
                            <button className="button-quan" onClick={()=>{ 
                            dispatch({
                                 type: '수량감소', item : listItem.id }) }}>-
                            </button>
                        </td>
                        <td>{ listItem.price*listItem.quan }</td>
                        <td className="hover" onClick={()=>{
                            dispatch({
                                type: '항목제거', item: listItem.id
                            })
                        }
                        }>X</td>
                    </tr>
                )
                })
                }
                <tr>
                    <td>전체</td>
                    <td>전체상품</td>
                    <td className="sum">{ calcQuanSum() } 개</td>
                    <td></td>
                    <td className="sum">{ calcPriceSum() } 원</td>
                    <td></td>
                </tr>
            </tbody>
        </Table>
        {
            state.length===0
            ? (
                <div>장바구니에 상품이 없습니다. 상품을 담아보세요.</div>
            )
            :null
        }
        <button className="btn btn-danger">구매하기</button>
        <button className="btn btn-danger" onClick={()=>{history.push('/bodyandbath')}}>더 둘러보기</button>
        <button className="btn" onClick={()=>{
            dispatch({ type:'항목모두제거' })
        }}>장바구니 비우기</button>

    </div>
)
}

function stateToProps(state) {
    return {
        stateReducer : state.reducer,
}
}
export default connect(stateToProps)(Cart);
// export default Cart