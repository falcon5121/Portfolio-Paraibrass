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
          bioCurta2
          bioCurta3
          bioCurta4
          bioCurta5
          bioCurta6
        }
        videosYoutubes {
          ident
          videoUrl
          musicaNome
          musicaDescricao
        }
        fotosSites {
          primeiraImgMaior
          primeiraImgMenor
          biografiaImgMedio
          biografiaImgMenor
          biografiaImgNormal
        }
        textoBiografiaSextetos {
          biografiaSexteto
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
