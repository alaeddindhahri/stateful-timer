import React, { Component } from 'react'

export default class Timer extends Component {
    constructor(props){
        super(props);
        this.state={
            init:0,
            start:true,
            counter:null
        };
    }

    
    /* functions start-stop-reset*/
    handleStart=() =>{
        this.setState({
            start:!this.state.start
        })
        if(this.state.start) {
            this.setState({
                counter:setInterval(()=>{
                    // if(!this.state.start)
                    this.setState({
                    init:this.state.init+1
                })},1000)
            })
        } else {
            clearInterval(this.state.counter)
        }
        
    }
    handleReset=()=> {
        this.setState({
            init:0,
            start:true
        })
        clearInterval(this.state.counter)
    }
    
    
    render() {
        const hours = String(Math.floor(this.state.init/3600)).padStart(2,"0")
        const minutes = String(Math.floor((this.state.init%3600)/60)).padStart(2,"0")
        const seconds = String(Math.floor((this.state.init%3600)%60)).padStart(2,"0")
        return (
            <div className="timer-display">
            <div className="time">
                <p>{(hours)} :</p>
                <p>{minutes} :</p>
                <p>{seconds}</p>
            </div>
            <div className="time-caption">
                <p>Hour</p>
                <p>Minute</p>
                <p>Second</p>
            </div>
            <div className="buttons">
                <input className="start-stop-button" type="button" value={this.state.start?"Start":"Stop"} onClick={this.handleStart}></input>
                <input className="reset-button" type="button" value="Reset" onClick={this.handleReset}></input>
            </div>
            </div>
        )
    }
}
