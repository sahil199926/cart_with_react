export const add=(item) => {

    return {
        type:'add',
        payload: item,
        
    }

}
export const remove =(item,id) => {
    return {
        type:'remove',
        payload: item,
        
    }

}
