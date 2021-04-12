import React from 'react'
import { connect } from 'react-redux';
import Things from '../Things';

function Opencart(prop) {
    return (
        <div className='grid' >
            {Object.keys(Things).map((key, i) => prop.val(key)>0 ? <div key={i} ><img width='10%' src={Things[key].image} /> {prop.val(key)} no. of {key} cost which will cost you {prop.amount(key)} rs  </div>:<div></div>)}
        </div>
    )
}

const mapStateToProps = (state) => {

    return {
        val: (key) => state[key].no_of_items,
        amount: (key) => state[key].no_of_items * state[key].price };
}
export default connect(mapStateToProps)(Opencart);
