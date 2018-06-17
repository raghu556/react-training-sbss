import React from 'react';
import ReactDom from 'react-dom'

const reactElement = React.createElement(
    "h1",
    { id: "heading" },
    "Hello React"
);
const layoutJSX = (
    <div>
        <h1 className="divClass">Hello React</h1>
        <div>
            <h2>SBSS</h2>
        </div>
    </div>
);

const userInfo = {
    name: "Raghavendra",
    age: 29,
    location: "Mumbai"
}

const isMinor = (age) => {
    return age < 18 ? 'yes' : 'no'
}

const jsxExpression = (
    <div>
        <h1>
            {userInfo.name}
        </h1>
        <p>
            Age : {userInfo.age} <br/>
            Location: {userInfo.location}
        </p>
        <p>isMinor: {isMinor(userInfo.age)}</p>
    </div>
)

ReactDom.render(jsxExpression, document.getElementById('app-container'));