import React from 'react';
import { useHistory } from 'react-router-dom'


function Card(props) {
  let history = useHistory();
  return(
  <div className="col-md-4">
        <img src={'https://ji-yeon0107.github.io/s_shopping/product' + (props.product.id) + '.png'} onClick={()=>{ 
          history.push('/detail/'+props.product.id) }} alt="bestseller" width="300px" 
          className="hover" />
    <h4>{props.product.title}</h4>
    <p>{props.product.content}<br/>
    {props.product.price} 원</p>
  </div>
  )
}
  
  export default Card;