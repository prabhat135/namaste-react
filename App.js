import React from "react";
import  ReactDOM  from "react-dom/client";

// ReactElement(object) => (convert code into) => HTML(that browser understands)

// creating new element h1 i.e. core react thing so we using 'React.' here
const heading = React.createElement(
    "h1", 
    {id: "heading" }, 
    "Hello world from React!!"
); 
// {}: these contains attribute for h1 tag

const parent = [React.createElement(
    "div",
    { id: "parent1"},
    React.createElement(
        "div",
        { id: "child1"},
        [React.createElement("h1", {}, "I am a H1 tag and you know that this text is generating automatically on saving."),
        React.createElement("h2", {}, "I am a H2 tag.")]
    )
)];


// creating root where all react code runs and DOM manipulations happen
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
// this render method takes object input and convert it into html tag and put it into browser.