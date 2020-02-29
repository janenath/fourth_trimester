import React, { Component } from 'react';
import { connect } from 'react-redux';

class Today extends Component {
    render() {
        console.log(this.props.user)
        return(
            <main>
                <h1>today</h1>
                <ul>
                    <li>read <a href="./topics">articles</a></li>
                </ul>
            </main>
        )
    }
}

const mapStateToProps = state => {
    return{
      user: state.user
    } 
  }
  
export default connect(
    mapStateToProps
  )(Today);
