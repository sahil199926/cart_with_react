import React from 'react'
import { connect } from 'react-redux';
function Opencart(props) {
    return (
        <div>
          <span className='badge badge-success'>Total price {props.tp} rs </span>
        </div>
    )
}
const mapStateToProps=(state)=>{

    const total_price=Object.values(state).reduce((t,{no_of_items,price})=>t+no_of_items*price,0);
    return {tp:total_price}
}

export default  connect(mapStateToProps)(Opencart);
