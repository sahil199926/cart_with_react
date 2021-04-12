import React, { useEffect, useState } from 'react'
import Things from '../Things';
import Reducer from '../reducer/Reducer';
import { add, remove, del } from "../reducer/Action";
import { connect } from 'react-redux';
function Item(props) {

    return (
        <div className='grid' >
            {Object.keys(props.items).map((key, i) =>
             props.items[key]!=null?
                <div style={{ display: 'flex', gridColumnGap: '4px' }}>
                    <div className='badge badge-warning'>{props.val(key)}</div>
                    <div><button onClick={() => props.action_add(key)} >+</button></div>
                    <div><button onClick={() => props.action_remove(key)} >-</button></div>
                     <div>{key}</div>
                </div>:<div></div>
            )}

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {

    return {
        action_add: (item) => { dispatch(add(item)) },
        action_remove: (item) => dispatch(remove(item)),
        
    }
}
const mapStateToProps = (state) => {
    return {
        val: (k) => state[k]['no_of_items'],
        items: state
    
}}
export default connect(mapStateToProps, mapDispatchToProps)(Item);
