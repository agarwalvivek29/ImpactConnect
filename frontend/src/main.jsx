import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'
import {mode} from '@chakra-ui/theme-tools'
import { Provider } from 'react-redux';
import store from './store';

const styles={
  global: (props) => ({
    body : {
      bg:mode("gray.100", "#000"  )(props),
      color: mode("gray.800","whiteAlpha.900")(props),
    },
  }),
};

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
}

const theme = extendTheme({ config, styles })

ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ChakraProvider>
</React.StrictMode>,
)
