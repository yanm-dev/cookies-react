import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeCart} from '../../Redux/cookieReducer';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            mobileNav: false,
         }
    }
    closeNav(){
        this.setState({
            mobileNav: false
        })
    }
    render() { 
        return ( 
            <div id='header-cont'>
                <div>
                    <img className='hidden-img' alt='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' src={this.state.mobileNav ? 'https://pic.onlinewebfonts.com/svg/img_143166.png' : 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png'} onClick={() => this.setState({mobileNav: !this.state.mobileNav})} />
                    <ul className={`mobile-nav ${this.state.mobileNav ? 'mobile-nav-open' : 'desktop-nav'}`}>
                    <Link onClick={() => this.closeNav()} className='mobile-links' to='/'>Home</Link>
                    <Link onClick={() => this.closeNav()} className='mobile-links' to='/menu'>Menu</Link>
                    <Link onClick={() => this.closeNav()} className='mobile-links' to='/guide'>Nutrtion Guide</Link>
                    </ul>
                </div>
                <div className='cake-div'>
                <Link to='/'>
                    <i className="fa fa-birthday-cake" aria-hidden="true"></i>
                </Link>
                </div>
                <div className='cart-div'>
                <Link className={`notification-cart ${this.props.cartFull || this.props.user.cart.length >= 1 ? 'cart-animation' : 'cart-animation-off'}`} to='/cart'>
                    <i className="fa fa-shopping-cart"></i>
                <span className='badge'>{}</span>
                </Link>
                </div> 
            </div>
         );
    }
}
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {changeCart})(Header);