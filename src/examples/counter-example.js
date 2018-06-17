import React from 'react';
import ReactDom from 'react-dom';

class CounterApp extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            text: 'Default is 0'
        }
        this.onAdd = this.onAdd.bind(this);
        this.onMinus = this.onMinus.bind(this);
        this.onReset = this.onReset.bind(this);
    }

    onAdd() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1,
                text: 'Counter is Incremmented'
            }
        })
    }

    onMinus() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1,
                text: 'Counter is Decremmented'
            }
        })
    }

    onReset() {
        this.setState((prevState) => {
            return {
                count: 0,
                text: 'Counter is set to Default'
            }
        })
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4">
                    <h2>Counter Example</h2>
                    <div>Count = {this.state.count}</div>
                    <div>Message = {this.state.text}</div>
                    <br/>
                    <div className="text-center">
                        <button onClick={this.onAdd}>+</button>&nbsp;
                        <button onClick={this.onMinus}>-</button>&nbsp;
                        <button onClick={this.onReset}>Reset</button>&nbsp;
                    </div>
                </div>
                <div className="col-md-4"></div>

            </div>
        )
    }
}

export default CounterApp;