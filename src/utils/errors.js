const Validation= function(){
  this.SearchTerm = 'Try typing a valid Search term.';
  this.SearchWithoutResults = 'Sorry! It seems there are no results for that search.';
 
}

const Api=function(){
    this.InvalidRequest = 'Oops! Something went wrong. We are sorry, try refreshing the page.';
    
}

const UserInterface=function(){
  this.NoFavorites= 'Hey! You do not have any favorite gifs.';
}

const Errors = function () {
  this.Api = new Api();
  this.Validation = new Validation();
  this.UserInterface = new UserInterface();
}

module.exports = new Errors();
