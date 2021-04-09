import Things from "../Things";

const initial= Things;

const Reducer=(state=initial,action)=>{
  
    switch(action.type){
        case 'add':
            for(var i in state){
                if (state[i].item_name===action.payload&&state[i].no_of_items>=0){
                    state[i]= {...state[i],no_of_items:state[i].no_of_items+1}
                    return state;
                }
            }
        
        case 'remove':
            for(var i in state){
                if (state[i].item_name===action.payload&&state[i].no_of_items>=0){
                    state[i]= {...state[i],no_of_items:state[i].no_of_items-1}
                    return state;
                }
            }
        
        // case 'delete':
        default:
            return state;
        
    }
}
export default Reducer;