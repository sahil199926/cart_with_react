import Things from "../Things";

const initial = Things;

const Reducer = (state = initial, action) => {

    switch (action.type) {
        case 'add':
           
            if (action.payload == 'Milk') {
                
                return { ...state,Milk: { ...state.Milk, no_of_items: state.Milk.no_of_items + 1 } }
            }
            if (action.payload == 'Orange') {
                return { ...state,Orange: { ...state.Orange, no_of_items: state.Orange.no_of_items + 1 } }
            }
            if (action.payload == 'Papaya') {
                return { ...state,Papaya: { ...state.Papaya, no_of_items:state.Papaya.no_of_items + 1 } }
            }
            if (action.payload == 'Banana') {
                return { ...state,Banana: { ...state.Banana, no_of_items:state.Banana.no_of_items + 1 } }
            }

    
        
        case 'remove':
            if(state[action.payload]['no_of_items']<1){return state;}
            if (action.payload == 'Milk') {
                return { ...state,Milk: { ...state.Milk, no_of_items: state.Milk.no_of_items - 1 } }
            }
            if (action.payload == 'Orange') {
                return { ...state,Orange: { ...state.Orange, no_of_items: state.Orange.no_of_items - 1 } }
            }
            if (action.payload == 'Papaya') {
                return { ...state,Papaya: { ...state.Papaya, no_of_items:state.Papaya.no_of_items - 1 } }
            }
            if (action.payload == 'Banana') {
                return { ...state,Banana: { ...state.Banana, no_of_items:state.Banana.no_of_items - 1 } }
            }


        // case 'delete':
        default:
return state;
        
    }
}
export default Reducer;