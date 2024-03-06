import React, {Component} from 'react';
import './Items.css';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import {connect} from 'react-redux';
import {changeCart} from '../../Redux/cookieReducer';

class Items extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            quantity: 6
         }
    }
   async addToCart(type){
    await this.props.changeCart(true);
    const {title, price, img} = this.props.elm;
    // const {index} = this.props;
    
    const {quantity} = this.state;
    const addedItem = await axios.post('/session/add', {title, quantity, price, img});
    console.log(addedItem);
    NotificationManager.success('', `${title} added to cart`, 2000);
}
    
    render() { 
        return ( 
            <div className='item-cont'>
                    <div className='item-box'>
                        <img src={this.props.elm.img} alt='menu item'></img>
                        <div style={{"fontSize":"13px"}}>
                            <span>*View Nutrtion Facts <Link to='/guide'>Here</Link> !</span>
                        </div>
                    </div>
                    <div className='item-box'>
                        <span>Name:</span>
                        <p>{this.props.elm.title}</p>
                        <span>Price:</span>
                        <p style={{"padding-top":"0px"}}>${this.props.elm.price}/ each</p>
                        <button className={this.state.quantity === 6 ? 'buttonClose' : 'buttonOpen'} onClick={() => this.setState({quantity: this.state.quantity - 1})}>-</button>
                        <span id='quantity'>{this.state.quantity}</span>
                        <button className={this.state.quantity === 36 ? 'buttonClose' : 'buttonOpen'} onClick={() => this.setState({quantity: this.state.quantity + 1})}>+</button>
                        <br /> <button className='btn btn-success info-btn' onClick={() => this.addToCart('success')}>Add To Cart</button> <br />
                    </div>
                    <NotificationContainer/>
                </div>
         )
    }
}
 
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {changeCart})(Items);