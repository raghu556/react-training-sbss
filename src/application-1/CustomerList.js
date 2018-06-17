import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';
class CustomerList extends React.Component {
    render() {
        console.log("data" , this.props.customers);
        return (
            <div>
                <hr />
                {
                    (this.props.customers.length <= 0) ?
                        <div className="text-center">
                            <h3>No Customers in List</h3>
                        </div>
                        :
                        <div>
                            <h3>Customers List</h3>
                            <table className="table table-striped table-bordered">
                                <tbody>
                                    <tr>
                                        <th>Customer Code</th>
                                        <th>Customer Name</th>
                                        <th>Customer Address</th>
                                        <th>Customer Amount</th>
                                    </tr>
                                    {
                                        this.props.customers.map((customer, i) => {
                                            return <CustomerListItem key={i} row={customer} />
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                }
            </div>
        );
    }
}
export default CustomerList;