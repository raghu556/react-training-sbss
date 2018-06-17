import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import CustomerList from './CustomerList';
import CustomerForm from './CustomerForm';
import CounterApp from '../examples/counter-example';
import 'bootstrap/dist/css/bootstrap.min.css';
class CustomerApp extends React.Component {
    render() {
        const customers = [{
            "CustomerCode": "C001",
            "CustomerName": "Kumar",
            "CustomerAddress": "Mumbai",
            "CustomerAmount": "1000",
        },
        {
            "CustomerCode": "C002",
            "CustomerName": "Rajesh",
            "CustomerAddress": "Pune",
            "CustomerAmount": "2000",
        }
        ]
        return (
            <div className="container">
                <Header title="NEW" subTitle="Customer App" />
                <CustomerForm/>
                <CustomerList customers={customers} />
                <hr/>
                <CounterApp/>
                <hr/>
            </div>
        );
    }
}

export default CustomerApp;