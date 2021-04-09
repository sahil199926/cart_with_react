import createStore from 'redux'
import connect from 'react-redux'
import Reducer from '../reducer/Reducer';


const store=createStore(Reducer);
