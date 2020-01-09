import React, {Component} from "react";
import {connect} from 'react-redux'
import './Password.css'
const  arr = [7,8,9,4,5,6,1,2,3];
class Password extends Component {

    render() {
        let bgColor ={
          background:'yellow'
        };
       if (this.props.locked){
           bgColor ={
               background:'green'
           };
        }
        return (
            <div  className="wrap">
                <h2>{this.props.locked &&"Access Granted"} </h2>
                <input id="inp" style={bgColor} type="password" value={this.props.str} disabled/>
                <div className="btn-wrap">
                    {arr.map((number)=>{
                        return <button key={number} onClick={() => this.props.addNumber(number)}>{number}</button>
                    })}

                    <button onClick={this.props.remove}>&lt;</button>
                    <button onClick={() => {this.props.addNumber(0)}}>0</button>
                    <button onClick={this.props.check}>E</button>
                </div>
            </div>
        )
    }


}

const mapStateToProps = (state) => {
    return {
        str: state.str,
        locked: state.locked
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        addNumber: (number) => dispatch({type: 'ADD_NUMBER', number: number}),
        remove: () => dispatch({type: 'REMOVE'}),
        check: () => dispatch({type: 'CHECK'})
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Password);