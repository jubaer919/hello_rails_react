import * as React from 'react';
import * as ReactDOM from 'react-dom';
import store from "../redux/store.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import MessageList from "./Greeting.jsx";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<MessageList />} />
      </Routes>
  )
}

const root = ReactDOM.createRoot(document.getElementById('greeting'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
)

export default App;
