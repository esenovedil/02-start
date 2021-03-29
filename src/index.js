import React from "react"
import ReactDOM from "react-dom"
import "./style.css"

// const age = 16
// const name = "edil"

// const app = (
//     <h1 className = "title">
//         My name is {name} I am {age}
//     </h1>
// )

const App = () => {
    return (
        <div>
        <Header/>
        <Body/>
        </div>
    )
}

const Header = () => {
    return(
    <div id="myDIV" className="header">
         <h2>My To Do List</h2>
         <input type="text" id="myInput" placeholder="Title..."/>
         <span className="addBtn">Add</span>
    </div>
    )
}

const Body = () => {
    return (
    <ul id="myUL">
                <li>Hit the gym</li>
                <li className="checked">Pay bills</li>
                <li>Meet George</li>
                <li>Buy eggs</li>
                <li>Read a book</li>
                <li>Organize office</li>
    </ul>
    )
}

// const Text = () => {
//       return <p>Lorem, ipsum dolor sit amet consecte</p>
// }


ReactDOM.render(
    <App/>,
    document.querySelector("#root")
)