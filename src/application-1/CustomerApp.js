import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';
import CounterApp from '../examples/counter-example';
import 'bootstrap/dist/css/bootstrap.min.css';
class CustomerApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            isSuccessfull: true
        }
        this.onParentSubmit = this.onParentSubmit.bind(this);
    }

    onParentSubmit(customer) {
        try {
            if(customer) {
                this.setState((prevState) => {
                    return {
                        customers: [            //Spread Customers
                            ...prevState.customers,
                            customer
                        ]
                    }
                })
            }
            else {
                this.setState((prevState) => {
                    return {
                        isSuccessfull: false
                    }
                })
            }
        }
        catch(err) {
            this.setState((prevState) => {
                return {
                    isSuccessfull: false
                }
            })
        }
    }

    render() {
        return (
            <div className="container">
                <Header title="SBSS" subTitle="Customer App" />
                <CustomerForm onParentSubmit={this.onParentSubmit} isSuccessfull={this.state.isSuccessfull} />
                <CustomerList customers={this.state.customers} />
                <hr />
                <CounterApp />
                <hr />
            </div>
        );
    }
}

export default CustomerApp;