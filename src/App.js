import React, {Component} from 'react';
import './App.css';
import Routes from './routes';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import {connect} from 'react-redux';
import {getUser} from './Redux/cookieReducer';
import axios from 'axios';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  async componentDidMount(){
    await axios.get('/session')
    .then(res => this.props.getUser(res.data))
    .catch(err => console.log(err))
  }
  render() { 
    return ( 
      <div className="App">
      <Header />
      {Routes}
      <Footer />
    </div>
     );
  }
}
const mapStateToProps = reduxState => reduxState;
export default connect(mapStateToProps, {getUser})(App);
