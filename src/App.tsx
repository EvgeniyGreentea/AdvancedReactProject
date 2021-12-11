import { Layout } from 'antd'
import React from 'react'
import AppRouter from './components/AppRouter'
import './App.css';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  )
}

export default App
