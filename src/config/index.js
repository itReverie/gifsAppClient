//NOTE: API URL and token should be configurable; although it is the same for all the environments in this particular case.
module.exports =function(){
    switch (process.env.NODE_ENV) {
      case null:
      case undefined:
      case "local":
      case 'development':
        return { 
            giphy: {
                   endpoint: 'https://api.giphy.com/v1/gifs/search?api_key=',
                   token:'GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw'
            },
            webSocket:{
                    server: 'http://127.0.0.1:5000',
                    messages: {
                             ADD_FAVORITE_GIF:"ADD_FAVORITE_GIF",
                             REMOVE_FAVORITE_GIF:"REMOVE_FAVORITE_GIF",
                             SET_FAVORITE_GIF:"SET_FAVORITE_GIF"
                             }
            }
      };
    case 'production':
      return { 
        giphy: {
               endpoint: 'https://api.giphy.com/v1/gifs/search?api_key=',
               token:'GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw'
        },
        webSocket:{
                server: 'https://gifsappserver.herokuapp.com',
                messages: {
                         ADD_FAVORITE_GIF:"ADD_FAVORITE_GIF",
                         REMOVE_FAVORITE_GIF:"REMOVE_FAVORITE_GIF",
                         SET_FAVORITE_GIF:"SET_FAVORITE_GIF"
                         }
        }
    };
    default:
        return { 
            giphy: {
                   endpoint: 'https://api.giphy.com/v1/gifs/search?api_key=',
                   token:'GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw'
            },
            webSocket:{
                    server: 'https://gifsappserver.herokuapp.com',
                    messages: {
                             ADD_FAVORITE_GIF:"ADD_FAVORITE_GIF",
                             REMOVE_FAVORITE_GIF:"REMOVE_FAVORITE_GIF",
                             SET_FAVORITE_GIF:"SET_FAVORITE_GIF"
                             }
            }
      };
    }
  }();
