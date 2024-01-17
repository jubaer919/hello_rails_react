import * as React from 'react'
import * as ReactDOM from 'react-dom'
import store from "../redux/store.js";
import { Provider } from "react-redux";
import MessageList from "./Greeting.jsx";

const Home = () => {
  return (
    <div>
      <MessageList />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('greeting'))
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Home />
        </Provider>  
    </React.StrictMode>  
)

export default Home;