import React, { Component } from 'react';
import './App.css';
import Timer from './timer'



class Watch extends Component {
    state = {
        status: false,
        runningTime: 0
    };
    handleStart = () => {
        this.setState(state => {
            if (!state.status) {
                const startTime = Date.now() - this.state.runningTime;
                this.timer = setInterval(() => {
                    this.setState({ runningTime: Date.now() - startTime });
                });
            }
            return { status: !state.status };
        });
    };
    handlePause = () => {
        this.setState(state => {
            if (state.status) {
                clearInterval(this.timer);
            }
            return { status: !state.status };
        });
    };

    handleReset = () => {
        clearInterval(this.timer); // new
        this.setState({ runningTime: 0, status: false });
    };
    render() {
        const { status, runningTime } = this.state;
        return (
            <div className="hunter">
                <Timer a={runningTime} />
                {/*<p>{runningTime}ms</p>*/}
                <div className="btn">
                    <button onClick={this.handleStart} className="start">Start</button>
                    <button onClick={this.handlePause} className="pause">Pause</button>
                    <button onClick={this.handleReset} className="reset">Reset</button>
                </div>


            </div>
        );
    }
}
export default Watch;