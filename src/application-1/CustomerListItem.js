import React from 'react';
import PropTypes from 'prop-types';
class CustomerListItem extends React.Component {
    render() {
        console.log(this.props.row);
        const customerRow = this.props.row;
        let rowJSX = null;
        if(customerRow) {
            rowJSX = (
                <tr>
                    <td>{customerRow.CustomerCode}</td>
                    <td>{customerRow.CustomerName}</td>
                    <td>{customerRow.CustomerAddress}</td>
                    <td>{customerRow.CustomerAmount}</td>
                </tr>
            )
        }
        return ( rowJSX );
    }
}

export default CustomerListItem;