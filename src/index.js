import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/* import App from './App';
 */ import reportWebVitals from "./reportWebVitals";
import Routes from "./routes";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  gql,
} from "@apollo/client";

import { ApolloLink, concat } from 'apollo-link';


const httpLink = new HttpLink({ uri: "http://www.rurayaws.ml/graphql" });
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext({
    headers: {
      "x-token": localStorage.getItem('token') || null,
    }
  });

  return forward(operation);
})

//intercept heathers
const authAfterWare=new ApolloLink((operation,forward)=>{
  return forward(operation).map(response=> {
    const context = operation.getContext();
    const{headers}=context;
    if(headers){
      const token=headers.get('x-token')
      if(token){
        localStorage.setItem('token',token)
      }}
    return response
  })
  });

  const client = new ApolloClient({
  link: concat(authMiddleware, httpLink, authAfterWare),
  cache: new InMemoryCache()
});

const allUser = gql`
  query{
    allUsers {
      uName
      uID
    }
  }
`;

client.query({ query:allUser }).then((res) => {
  console.log(res.data);
});


const App = (
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>
);
ReactDOM.render(App, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
