import ReactDOM from 'react-dom/client';
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Routes/Routes.jsx';
import { StrictMode } from 'react';
import AuthProvider from './providers/AuthProvider.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className="max-w-7xl mx-auto">
    <StrictMode>
<AuthProvider><RouterProvider router={router} /></AuthProvider>
  </StrictMode>,
  </div>
)
