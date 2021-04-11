import Navbar from 'react-bootstrap/Navbar';
import Display from '../display';
import { connect } from 'react-redux';
import Opencart from './Opencart'
const Cart = (props) => {

    return (
        <>
            <Navbar bg="light" >
            <Navbar.Brand >HOME</Navbar.Brand>
                <Navbar.Brand href="#home"  style={{ display:'flex', marginLeft: 'auto',gridColumnGap:'5px' }}>
                    <img
                        alt=""
                        src="/cart.png"

                        width="30"
                        height="30"

                    />

                    <span className='badge badge-warning' > {props.total_itms} </span>
                   <Opencart />
                </Navbar.Brand>
            </Navbar>
            <Display />

        </>
    )
}
const mapStateToProps=(state)=>{
    var cart_val=0;
    for(const key in state){
        if(state[key]['no_of_items']>0){cart_val++;}
    }
    return {total_itms:cart_val}
}

export default connect(mapStateToProps)(Cart);