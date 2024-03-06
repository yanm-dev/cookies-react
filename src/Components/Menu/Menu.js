import React, {Component} from 'react';
import './Menu.css';
import {connect} from 'react-redux';
import {getItems} from '../../Redux/cookieReducer';
import Loading from '../Loading/Loading';
import Items from '../Items/Items';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            option: '',
            items: []
         }
    }
    async componentDidMount(){
       await this.props.getItems();
    }
    change(e) {
        console.log(e.target)
    }

    render() { 
        const items = this.props.items.map((elm, index) => {
            return (
                <Items key={index} elm={elm} index={index}/>
                )
        })
        return ( 
            this.props.loading ? 
                <Loading />
            :
            <div>
                <h4 id='menu-h4'>Menu</h4>
            <div className='main-cont flex-cont-menu'>
                {items}
            </div>
            </div>
         );
    }
}
 
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getItems})(Menu);