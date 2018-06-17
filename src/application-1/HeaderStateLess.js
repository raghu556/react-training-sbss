import React from 'react';
import PropTypes from 'prop-types';

const HeaderStateLess = (props) => {
    return (
        <div>
            <div align="center">
                <h1 style={{ "backgroundColor": "lightgrey" }}>
                    {props.title}
                </h1>
            </div>
            <hr />
            <div align="center">
                <h3>
                    {props.subTitle}
                </h3>
            </div>
        </div >
    );
}
export default HeaderStateLess;
