import Things from "../Things";

const initial = JSON.parse(localStorage.getItem('value')) || Things;

const Reducer = (state = initial, action) => {
    let transaction;
    switch (action.type) {
        case 'add':

            if (action.payload == 'Milk') {

                transaction = { ...state, Milk: { ...state.Milk, no_of_items: state.Milk.no_of_items + 1 } }
                localStorage.setItem('value', JSON.stringify(transaction))
                return transaction;
            }
            if (action.payload == 'Orange') {
                transaction = { ...state, Orange: { ...state.Orange, no_of_items: state.Orange.no_of_items + 1 } }
                localStorage.setItem('value', JSON.stringify(transaction))
                return transaction
            }
            if (action.payload == 'Papaya') {
                transaction = { ...state, Papaya: { ...state.Papaya, no_of_items: state.Papaya.no_of_items + 1 } }
                localStorage.setItem('value', JSON.stringify(transaction))
                return transaction;
            }
            if (action.payload == 'Banana') {
                transaction = { ...state, Banana: { ...state.Banana, no_of_items: state.Banana.no_of_items + 1 } }
                localStorage.setItem('value', JSON.stringify(transaction))
                return transaction;
            }



        case 'remove':
            localStorage.setItem('value', JSON.stringify(transaction))
            return transaction; if (state[action.payload]['no_of_items'] < 1) { return state; }
            if (action.payload == 'Milk') {
                transaction = { ...state, Milk: { ...state.Milk, no_of_items: state.Milk.no_of_items - 1 } }

            }
            if (action.payload == 'Orange') {
                transaction = { ...state, Orange: { ...state.Orange, no_of_items: state.Orange.no_of_items - 1 } }
                localStorage.setItem('value', JSON.stringify(transaction))
                return transaction;
            }
            if (action.payload == 'Papaya') {
                transaction = { ...state, Papaya: { ...state.Papaya, no_of_items: state.Papaya.no_of_items - 1 } }
                localStorage.setItem('value', JSON.stringify(transaction))
                return transaction;
            }
            if (action.payload == 'Banana') {
                transaction = { ...state, Banana: { ...state.Banana, no_of_items: state.Banana.no_of_items - 1 } }
                localStorage.setItem('value', JSON.stringify(transaction))
                return transaction;
            }

        default:
            return state;

    }
}
export default Reducer;