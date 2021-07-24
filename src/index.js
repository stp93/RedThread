import { ChakraProvider } from "@chakra-ui/react";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/index';



ReactDOM.render(

<React.StrictMode>
  <ChakraProvider>
  <App/>
  </ChakraProvider>
  </React.StrictMode>
  
  , document.getElementById('root'));
//RegisterServiceWorker()
