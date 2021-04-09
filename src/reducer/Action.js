export const add=(item) => {

    return {
        type:'add',
        payload: item
    }

}
export const remove =(item) => {
    return {
        type:'remove',
        payload: item
    }

}
export const del =(item)=> {
    return {
        type:'delete',
        payload: item
    }

}