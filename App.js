  import React from "react";
import ReactDOM from "react-dom/client";

// JSX (transpiled before it reaches the JS engine) - PARCEL - Babel
 
// React.createElement => ReactElement- JS Object => HTMLElement(render)
// JSX => Babel transpiles it to React.createElement => ReactElement- JS Object => HTMLElement(render)

// React Element
const Heading = () => (
    <h1 className="heading" tabIndex="3">
        This is Heading!!
    </h1>
);

// React Functional Component - A JavaScript Function which returns a ReactElement.  

const HeadingComponent = () => (
    <h3>
        {Heading()}
        <Heading />
        <Heading></Heading>
        Namaste React Functional Component
    </h3>
);


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
