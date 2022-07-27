import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri:'https://api-us-west-2.hygraph.com/v2/cl5le7utk42ev01uo62oa7c5a/master',
  cache: new InMemoryCache()
})

client.query({
    query: gql`
      query DadosSexteto {
        componenteSexteto {
          ident
          nome
          urlImg
          curtaBiografia
          biografiaTexto {
            text
          }
        }
        videosYoutubes {
          ident
          videoUrl
          musicaNome
          musicaDescricao
        }
      }
    `
}).then((result) => console.log(result))


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ApolloProvider client={client}>

      <App/>

     </ApolloProvider>

  </React.StrictMode>

)
