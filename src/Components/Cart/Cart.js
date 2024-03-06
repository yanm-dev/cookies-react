import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCart, getTotal} from '../../Redux/cookieReducer';
import Loading from '../Loading/Loading';
import CartItem from '../CartItem/CartItem';
import './Cart.css';
import {Link} from 'react-router-dom'


class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alert: true,
            cart: []
        }
        this.alert = this.alert.bind.this;
    }
    async componentDidMount(){
        await this.props.getCart()
        await this.props.getTotal();
        this.setState({
            cart: this.props.cart
        })
    }
    alert(){
        this.setState({
            alert: false
        })
    }
    render() { 
        const items = this.props.user.cart.map((elm, index) => {
            return <CartItem key={index} elm={elm} index={index} />
        })
        return ( 
            this.props.user.cart.length === 0 ? <Loading /> : 
            
            <div style={{"min-height": "95vh"}}>
                <div id='total-div'>
                    <span id='menu-h4'>Your Items</span>
                    <span id='total-price'>Total Price: ${this.props.user.total}</span>
                </div>
                <div class='back-to-menu-div'>
                    <Link style={{"margin-left": "10px"}} to='/menu'>
                    &#60; Back To Menu
                    </Link>
                </div>
                <div className='flex-cont'>
                    {items}
                </div>
            </div>
         );
    }
}
 
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getCart, getTotal})(Cart); 