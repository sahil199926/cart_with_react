import React,{useEffect} from 'react'
import Things from '../Things';
import Reducer from '../reducer/Reducer';
import { add, remove,del } from "../reducer/Action";
import { connect } from 'react-redux';
function Item(props) {

    useEffect(() => {
         alert('sss')
    }, [Things]);
    return (
        <div style={{display:'grid',gridRowGap:'5px'}} >
            { Things.map((thing) => 
                <div style={{display:'flex', gridColumnGap:'4px'}}>
                    <div className='badge badge-warning'>{thing.no_of_items}</div>
                    <div><button onClick={(e)=>props.action_add(e.target.parentNode.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML)} >+</button></div>
                    <div><button>-</button></div>
                    <div><button>Delete</button></div>
                    <div>{thing.item_name}</div>
                </div>
            )}

        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{

return {action_add:(item)=>{dispatch(add(item))}}
}

export default connect(null,mapDispatchToProps)(Item);
