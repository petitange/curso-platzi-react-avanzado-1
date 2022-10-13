import React from 'react'
import ReactDOM from 'react-dom'
import Context from './Context'
import { App } from './App'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://curso-platzi-react-avanzado-lime-two.vercel.app/graphql',
  cache: new InMemoryCache()
})

ReactDOM.render(
  <Context.Provider value={{ isAuth: true }}>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  document.getElementById('app')
)
