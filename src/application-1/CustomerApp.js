import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';
import CounterApp from '../examples/counter-example';
import HttpService from '../Utils/HttpService'
import 'bootstrap/dist/css/bootstrap.min.css';
class CustomerApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            customers: [],
            isSuccessfull: true
        }
        this.onParentSubmit = this.onParentSubmit.bind(this);
        this.OnGetCustomers = this.OnGetCustomers.bind(this);
        this.onPostCustomer = this.onPostCustomer.bind(this);
    }

    componentDidMount() {
        const httpService = new HttpService('http://localhost:3000/customers', null,
            this.OnGetCustomers,
            () => {
                this.setState((prevState) => {
                    return {
                        "errors": ['Something went wrong. Pls try again later...']
                    }
                });
            });

        httpService.Get();
    }

    OnGetCustomers(data) {
        console.log('Success');
        // let customerList = data.map((customer) => {
        //     return customer;
        // });

        console.log(data);

        this.setState((prevState) => {
            console.log(prevState);
            return {
                customers: data
            }
        });

        console.log('state updated');
    }

    onPostCustomer(customer) {
        console.log('OnPost')
        console.log(customer)
        this.setState((prevState) => {
            return {
                customers: [            //Spread Customers
                    ...prevState.customers,
                    customer
                ]
            }
        })
    }
    // componentWillMount() {
    //     console.log('componentDidMount');
    // }

    // componentDidUpdate(newProps, newState) {
    //     console.log('componentDidUpdate',
    //     newProps, newState);
    // }

    // componentWillUpdate() {
    //     console.log('componentWillUpdate');
    // }

    onParentSubmit(customer) {
        try {
            if (customer) {
                const httpService = new HttpService('http://localhost:3000/customers', customer,
                    this.onPostCustomer, () => {
                        this.setState((prevState) => {
                            return {
                                "errors": ['Something went wrong. Pls try again later...']
                            }
                        });
                    });
                httpService.postWithJSON();
            }
            else {
                this.setState((prevState) => {
                    return {
                        isSuccessfull: false
                    }
                })
            }
        }
        catch (err) {
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