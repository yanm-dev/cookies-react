import React, {Component} from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import axios from 'axios';

import svg from '../../Pictures/svg2.png';
import cookie1 from '../../Pictures/chocolate-chip.jpg';
import cookie2 from '../../Pictures/strawberry-cookie.jpg';
import cookie3 from '../../Pictures/macadamian.jpg';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Name: '',
            Email: '',
            Message: '',
            NameInp: true,
            EmailInp: true,
            MessageInp: true
         }
    }
    handleChange(e){
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    checkname(e){
        this.handleChange(e)
        if (/[a-z]{3}/gmi.test(this.state.Name) === true){
            this.setState({
                NameInp: true
            })   
        } else {
            this.setState({
                NameInp: false
            })
        }
    }
    checkemail(e){
        this.handleChange(e)
        if (/[a-z0-9]{3,50}@[a-z]{3,7}.[a-z]{2,3}/gmi.test(this.state.Email) === true){
            this.setState({
                EmailInp: true,
            })
        } else {
            this.setState({
                EmailInp: false,
            })
        }
    }
    checkmessage(e){
        this.handleChange(e)
        if(/[a-z]{1,500}/.test(this.state.Message) === true){
            this.setState({
                MessageInp: true
            })
        } else {
            this.setState({
                MessageInp: false
            })
        }
    }
    createNotification = (event) => {
        event.preventDefault();
        const {Name, Email, Message} = this.state;
        console.log(Name, Email, Message)
        const inpName = document.getElementById('inpName');
        const inpEmail = document.getElementById('inpEmail');
        const inpMessage = document.getElementById('inpMessage');      
        if (/[a-z]{3}/gmi.test(Name) === true){
            this.setState({
                NameInp: true
            })   
        } else {
            this.setState({
                NameInp: false
            })
        }
        if (/[a-z0-9]{3,50}@[a-z]{3,7}.[a-z]{2,3}/gmi.test(Email) === true){
            this.setState({
                EmailInp: true,
            })
        } else {
            this.setState({
                EmailInp: false,
            })
        }
        if(/[a-z]{1,500}/.test(Message) === true){
            this.setState({
                MessageInp: true
            })
        } else {
            return this.setState({
                MessageInp: false
            })
        }
        if(this.state.NameInp === false || this.state.EmailInp === false || this.state.MessageInp === false){
            return console.log('Forgot something')
        }
        
        axios.post('/email', {Name, Email, Message})
        inpName.value = '';
        inpEmail.value = '';
        inpMessage.value = '';
        NotificationManager.info("We'll be in touch", 'Message Sent!', 2000);
    }
    render() {
        return ( 
            <div className='main-cont'>
                <div id='landing-div'>
                    <div>
                        <p>Treat Yourself</p>
                    </div>
                    <div>
                        <Link to='/menu'><button style={{"cursor":"pointer"}}>Order Now</button></Link>
                    </div>
                </div>

                <div id='home-popular-cookies-cont'>
                    <h1 style={{"marginBottom":"10px"}}>Popular Items</h1>
                    <div id="home-popular-cookies-1">
                        <div className="home-cookie-card">
                            <div>
                                <img className='popular-cookie-img' src={cookie1} />
                            </div>
                            <div>
                                <h5>Chocolate Chip</h5>
                                {/* <button>View Menu</button> */}
                                <img className='svg-wave' src={svg} />
                            </div>
                        </div>
                        <div className="home-cookie-card">
                            <div>
                                <img className='popular-cookie-img' src={cookie2} />
                            </div>
                            <div>
                                <h5>Strawberry</h5>
                                <img className='svg-wave' src={svg} />
                            </div>
                        </div>
                        <div className="home-cookie-card">
                            <div>
                                <img className='popular-cookie-img' src={cookie3} />
                            </div>
                            <div>
                                <h5>macadamian</h5>
                                <img className='svg-wave' src={svg} />
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="home-aboutus-cont">
                    <div className="home-aboutus-card">
                        
                    </div>
                    <div className="home-aboutus-card">
                        Hello
                    </div>
                </div>

                <div className='home-tagline-cont'>
                    <p>Cookies and baked goods that are a JOY to eat!</p>
                </div>

                <div id='landing-slideshow'> 
                    
                </div>
                
                <div id='info-box'>
                    <div>
                    <h4>Hours Of Operation</h4>
                    <address>
                    Monday 7:30 am - 7:00 pm <br />
                    Tuesday 7:30 am - 7:00 pm <br />
                    Wednesday 7:30 am - 7:00 pm <br />
                    Thursday 7:30 am - 7:00 pm <br />
                    Friday 7:30 am - 7:00 pm <br />
                    Saturday 7:30 am - 7:00 pm <br />
                    Sunday Closed
                    </address>
                </div>
                </div>

                <div id='contact-form'>
                    <h4 style={{'marginBottom':"5px"}}>Contact Us</h4>
                    <p style={{'marginTop':"0"}}>What's on your mind?</p>
                    <form>
                        <input className = {this.state.NameInp ? 'accepted' : 'denied'} id='inpName' placeholder='Name' name='Name' onChange={(e)=>this.checkname(e) } /> <br />
                        <input className = {this.state.EmailInp ? 'accepted' : 'denied'} id='inpEmail' placeholder='Email' name='Email' onChange={(e)=>this.checkemail(e) } /> <br />
                        <input className = {this.state.MessageInp ? 'accepted' : 'denied'} id='inpMessage' placeholder="I loved your chocolate chip cookies!" name='Message' type='textarea' onChange={(e)=>this.checkmessage(e) } /> <br />
                        <button className='btn btn-info info-btn' onClick={(event) => this.createNotification(event)}>Send Message</button>
                    </form>
                </div>

                <NotificationContainer/>
            </div>
         );
    }
}
 
export default Home;