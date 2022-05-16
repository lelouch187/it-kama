import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App";
import {addPost} from "./Redux/state";


export const rerender = (state) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <App state={state} addPost={addPost}/>
        </React.StrictMode>
    );
}