import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CommentList from './step03_component/CommentList';
import NotificationList from './step04_state/NotificationList';
//import Comment from './step03_component/Comment';
//import Welcome from './step03_component/Welcome';
//import App from './App';
//import Library from './step01_jsx/Library';
//import Clock from './step02_element/Clock';

const root = ReactDOM.createRoot(document.getElementById('root'));
// setInterval(()=>{root.render(
//   <React.StrictMode>
//     <Clock />
//   </React.StrictMode>
// )
// }, 1000);

root.render(
  <React.StrictMode>
    {/* <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" /> */}
    <NotificationList />
  </React.StrictMode>)
