import React from 'react';
import ReactDOM from 'react-dom'

const reactElement = React.createElement
(
    "h1",
    { id: "headerID"},
    "Hello React"
);

const layoutJSX = (
    <div className="divClass">
        <h1>Hello World</h1>
        <div>
            <h2>SBSS</h2>
        </div>
    </div>
);

const isMinor = (age) => {
    return age < 18 ? "Yes" : "No";
}

const arrNames = ["Kumar", "Manish", "Amit"];
console.log(arrNames);
console.log([...arrNames]);
console.log([...arrNames, "Rakesh"]);
console.log(["A", [...arrNames], "B", "C"]);

// const arrMap = arrNames.map((name) => {
//     return "My name is " + name;
// });

const arrFilter = arrNames.filter((name) => {
    console.log(name);
    return name != "Kumar";
});

console.log(arrFilter);

//console.log(arrMap);



const userInfo = {
    //name: "Kumar",
    age: 29,
    //location: "Mumbai"
}

const { name } = userInfo;
console.log(name);

const jsxExpression = (
    <div>
        <h1>
          Name: { userInfo.name ? userInfo.name : "Anonymous"}
        </h1>
        <div>Age: {userInfo.age}</div> 
        { userInfo.location && 
            <div>Location: {userInfo.location}</div>
        }
        <div>
            IsMinor: {isMinor(15)}
        </div>
        <div>
            {arrNames}
        </div>
        <ul>
        {
            arrNames.map((name, i) => {
                return <li key={i}>{name}</li>
            })
        }
        </ul>          
    </div>
);

// const option = undefined;
// if(option) {
//  console.log("Hi");
// }
// else {
//  console.log("No");
// }

ReactDOM.render(jsxExpression, document.getElementById('app-container'));
