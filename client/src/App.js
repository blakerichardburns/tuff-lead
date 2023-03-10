import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Layout } from 'antd';

import Home from './pages/Home';
import Nav from './components/Nav';
import Login from './pages/Login';
import Ratings from './components/Ratings';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Foot from './components/Footer';
import Subscriptions from './pages/Subscriptions';

const { Content } = Layout;
const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
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
const contentStyle = {
  height: '100%',
}

const layoutStyle = {
  height: '100vh',
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
      <Layout style={layoutStyle}>
          <Nav />
          <Content style={contentStyle}>
          <Routes>
            <Route 
              path="/" 
              element={<Home/>} 
            />
            <Route 
              path="/login" 
              element={<Login />} 
            />
              <Route 
                path="/profile" 
                element={<Profile />} 
              />
            <Route 
              path="/signup" 
              element={<Signup />} 
            />
            <Route 
              path="/ratings" 
              element={<Ratings />} 
            />
              <Route 
              path="/subscriptions" 
              element={<Subscriptions />} 
            />
         
          </Routes>
          </Content>
          <Foot/>
        </Layout>
      </Router>
    </ApolloProvider>
  );
}

export default App;

