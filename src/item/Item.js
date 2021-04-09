import React from 'react'
import Things from '../Things';
import Reducer from '../reducer/Reducer';
import { add, remove,del } from "../reducer/Action";
function Item() {
    return (
        <div style={{display:'grid',gridRowGap:'5px'}} >
            { Things.map((thing) => 
                <div style={{display:'flex', gridColumnGap:'4px'}}>
                    <div className='badge badge-warning'>{thing.no_of_items}</div>
                    <div><button>+</button></div>
                    <div><button>-</button></div>
                    <div><button>Delete</button></div>
                    <div>{thing.item_name}</div>
                </div>
            )}

        </div>
    )
}

export default Item;
