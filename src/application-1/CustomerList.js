import React from 'react';
import PropTypes from 'prop-types';
import CustomerListItem from './CustomerListItem';
class CustomerList extends React.Component {
    render() {
        console.log(this.props.customers);
        return (
            <div>
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
        );
    }
}
export default CustomerList;