import Navbar from 'react-bootstrap/Navbar';
import Display from '../display';

const Cart = () => {

    return (
        <>
            <Navbar bg="light">
                <div style={{ marginLeft: 'auto' }} >Cart</div>
                <Navbar.Brand href="#home" style={{ float: 'right' }}>
                    <img
                        alt=""
                        src="/cart.png"

                        width="30"
                        height="30"

                    />

                    <span className='badge badge-warning'> 5 </span>
                    <span className='badge badge-success'>Total price 0 </span>
                </Navbar.Brand>
            </Navbar>
            <Display />

        </>
    )
}
export default Cart;