import React,{createContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './robot-gallery/App';
import reportWebVitals from './reportWebVitals';
const myLove = {
  username:"米米"
};

export const myContext = createContext(myLove);

ReactDOM.render(
  <React.StrictMode>
    <myContext.Provider value={myLove}>
      <App/>
    </myContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
