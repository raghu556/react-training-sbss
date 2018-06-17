import React from 'react';

class CustomerForm extends React.Component {
    onSubmit(e) {
        e.preventDefault();
        console.log('Submit Called');

        const customer = {
            CustomerCode: e.target.elements.txtCustomerCode.value,
            CustomerName: e.target.elements.txtCustomerName.value,
            CustomerAddress: e.target.elements.txtCustomerAddress.value,
            CustomerAmount: e.target.elements.txtCustomerAmount.value
        }

        console.log(customer);
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} className="form">
                <div className="form-group">
                    <label>Code</label>
                    <input id="customerCode" name="customerCode" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input id="customerName" name="customerName" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Address</label>
                    <input id="customerAddress" name="customerAddress" className="form-control" />
                </div>
                <div className="form-group">
                    <label>Amount</label>
                    <input id="customerAmount" name="customerAmount" className="form-control" />
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" />
                </div>
            </form>
        );

    }
}

export default CustomerForm;