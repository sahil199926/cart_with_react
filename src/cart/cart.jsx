import Navbar from 'react-bootstrap/Navbar';
import Display from '../display';
import { connect } from 'react-redux';
import Opencart from './Opencart'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
const Cart = (props) => {

    return (
        <Router>
            <>
                <Navbar bg="light" >
                    <Navbar.Brand ><Link to="/home">HOME</Link></Navbar.Brand>
                    <Navbar.Brand style={{ display: 'flex', marginLeft: 'auto', gridColumnGap: '5px' }}>
                        <div id='tooltip'>
                            <Link to='/cart' >
                                <img
                                    alt=""
                                    src="/cart.png"

                                    width="30"
                                    height="30"

                                />
                            </Link>

                            <div id='tooltiptext' >Go to cart</div>
                        </div>
                        <span className='badge badge-warning' > {props.total_itms} </span>


                        <span className='badge badge-success'>Total price {props.tp} rs </span>
                    </Navbar.Brand>
                </Navbar>
                <Switch>
                    <Route exact path='/cart'><Opencart /></Route>
                    <Route exact path='/home'><Display /></Route>
                </Switch>
                
                



            </>
        </Router>
    )
}
const mapStateToProps = (state) => {
    var cart_val = 0;
    for (const key in state) {
        if (state[key]['no_of_items'] > 0) { cart_val++; }
    }
    const total_price = Object.values(state).reduce((t, { no_of_items, price }) => t + no_of_items * price, 0);
    return { total_itms: cart_val, tp: total_price }
}

export default connect(mapStateToProps)(Cart);