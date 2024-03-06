import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {changeCart} from '../../Redux/cookieReducer';

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    async componentDidMount(){
        await this.props.changeCart(false);
    }
    render() { 
        
        return ( 
            this.props.location.pathname === '/menu' ? 

            <div className='main-cont'>
                <img style={{"opacity": "0.5"}} src='https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif' alt='loading icon'/>
                <h4>Getting those menu items for you ! ...</h4>
            </div>

            :

            <div className='main-cont'>
                <img style={{"opacity": "0.5"}} src='https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif' alt='loading icon'/>
                <h4>Fetching your items! Did you <Link to='/menu'>Add Items</Link> to your cart?</h4>
            </div>
         );
    }
}
 
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {changeCart})(withRouter(Loading));