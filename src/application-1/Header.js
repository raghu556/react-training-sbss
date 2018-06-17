import React from 'react';
import PropTypes from 'prop-types';

class Header extends React.Component {
    constructor(){
        super();
        this.TestProp = "something";
        this.test = this.test.bind(this);
    }
    test(){
        console.log(this.TestProp)
    }
    render() {
        return (
            <div>
                <div align="center">
                    <h1 onClick={this.test} style={{ "backgroundColor": "lightgrey"}}>
                    
                     {this.props.title}
                    </h1>
                </div>
                <hr />
                <div align="center">
                    <h3>
                    {this.props.subTitle}
                    </h3>
                </div> 
            </div>
        );
    }
}

Header.defaultProps = {
    title: "SBSS"
};

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired
};

export default Header;
// const jsx = (
//     <div>
//         <Header />
//         <Header />
//         <Header />
//         <Header />
//         <Header />
//     </div>
// );

