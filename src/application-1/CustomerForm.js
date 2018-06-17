import React from 'react';

class CustomerForm extends React.Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

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

        this.props.onParentSubmit(customer);

        if (this.props.isSuccessfull) {
            console.log('success');
            this.resetControls(e);
        }
    }

    resetControls(e) {
        e.target.elements.txtCustomerCode.value = '',
            e.target.elements.txtCustomerName.value = '',
            e.target.elements.txtCustomerAddress.value = '',
            e.target.elements.txtCustomerAmount.value = ''
    }

    render() {
        return (
            <div onSubmit={this.onSubmit} className="col-xl-4">
                <form className="form-horizontal">
                    <div className="form-group">
                        <label htmlFor="txtCustomerCode">Customer Code</label>
                        <input
                            type="text"
                            id="txtCustomerCode"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="txtCustomerName">Customer Name</label>
                        <input
                            type="text"
                            id="txtCustomerName"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="txtCustomerAddress">Customer Address</label>
                        <input
                            type="text"
                            id="txtCustomerAddress"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="txtCustomerAmount">Customer Amount</label>
                        <input
                            type="number"
                            id="txtCustomerAmount"
                            className="form-control" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        );

    }
}

export default CustomerForm;