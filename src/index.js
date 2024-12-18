import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// React Query / Tanstack:
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Redux:
import { Provider } from 'react-redux';
import { store } from './Store/store';

// React Router:
import { HashRouter as Router } from 'react-router-dom';

// Font Awesome:
import "@fortawesome/fontawesome-free/css/all.min.css";

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();