import React, {Component} from 'react';
import './Guide.css';
import {Link} from 'react-router-dom'

class Guide extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='main-cont'>
                <h1>Guide</h1>
                <div class='back-to-menu-div'>
                    <Link style={{"margin-left": "10px"}} to='/menu'>
                    &#60; Back To Menu
                    </Link>
                </div>
                <table id='table-guide-cont'>
                    <tr>
                        <th>Cookie</th>
                        <th>Ingredients</th>
                    </tr>
                    <tr>
                        <td>Chocolate Chip</td>
                        <td>All-Purpose Flour, Baking Soda, Salt, Butter, Brown Suagr, White Sugar, Eggs, Vanilla Extract, 
                            Chocolate Chips</td>
                    </tr>
                    <tr>
                        <td>Macadanium</td>
                        <td>Butter, Brown Suagr, White Sugar, Eggs, Vanilla Extract, Almond Extract, All-Purpose Flour
                            Baking Soda, Salt, Macadamia Nuts, White Chocolate</td>
                    </tr>
                    <tr>
                        <td>Sugar Cookies</td>
                        <td>Eggs, White Sugar, Vanilla Extract, All-Purpose Flour, Baking Soda, Butter, Cream of Tartar</td>
                    </tr>
                    <tr>
                        <td>Peanut Butter</td>
                        <td>Peanut Butter, Brown Sugar, Butter, Eggs, Vanilla Extract, All-Purpose Flour, Baking Soda, 
                            Chocolate Chips, Peanuts, Shortening</td>
                    </tr>
                    <tr>
                        <td>Oatmeal Cookies</td>
                        <td>Raisins, Vanilla Extract, Brown Sugar, White Sugar, All-Purpose Flour, Baking Soda, Salt, Ground Cinnamon,
                            Cooking Oats, Walnuts
                        </td>
                    </tr>
                    </table>
            </div>
         );
    }
}
 
export default Guide;