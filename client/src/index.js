import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import AuthProvider from './providers/AuthProvider';
import CategoryProvider from './providers/CategoryProvider';
import ItemProvider from './providers/ItemProvider';
import { initMiddleware } from 'devise-axios';
initMiddleware();
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CategoryProvider>
        <ItemProvider> 
          <BrowserRouter>
            <App />   
          </BrowserRouter>
        </ItemProvider> 
      </CategoryProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();