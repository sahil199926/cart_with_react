import {createStore} from 'redux';
import connect from 'react-redux';
import Reducer from '../reducer/Reducer';


const Store=createStore(Reducer);

export default Store;