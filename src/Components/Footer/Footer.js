import React, {Component} from 'react';
import './Footer.css';

class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <>
            <footer>
            <div>
                <address>
                    C.E.O.: <a href="mailto:johnwilliams@example.com">John Williams</a>.<br /> 
                    Box 564, New Orleans, LA<br />
                    USA
                </address>
            </div>
            </footer>
            </>
         );
    }
}
 
export default Footer;