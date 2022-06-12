import React from 'react';
import { Navbar } from './components';
import { Footer} from './container';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup/Signup.jsx';
import Events from './pages/Events';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


const App = () => {
  return (
  <ApolloProvider client={client}>
      <Router>
      <div>
          <Navbar />
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
               <Route 
                path="/signup" 
                element={<Signup />} 
              /> 
                <Route 
                path="/events" 
                element={<Events/>} 
              />
            </Routes>
          <Footer />
          </div>
      </Router>
      
  </ApolloProvider>
  )
  };

export default App;
