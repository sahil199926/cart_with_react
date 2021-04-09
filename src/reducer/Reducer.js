import Things from "../Things";

const initial= Things;

const Reducer=(state=initial,action)=>{

    switch(action.type){
        case 'add':
            for(i in state){
                if (i.item_name===action.payload){
                    return {...i,no_of_items:i.no_of_items+1}
                }
            }
        
        case 'remove':
            for(var i in state){
                if (state[i].item_name===action.payload&&state[i].no_of_items>=0){
                    return {...state[i],no_of_items:state[i].no_of_items-1}
                }
            }
        
        // case 'delete':
        default:
            return state;
        
    }
}
export default Reducer;