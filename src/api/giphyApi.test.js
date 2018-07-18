import giphyApi from './giphyApi';
import config from '../config/';
import errors from '../utils/errors';

describe('✗ sending a wrong API request to the giphy API', () => {

  //'Initialize a valid configuration for the API'
  beforeEach(()=>{
      giphyApi.config=Object.assign({},config.giphy);
  });

  it('should return an invalid request message when the api url is incorrect', async () => {
        expect.assertions(1);
        
        //Setting url configuration to fail
        giphyApi.config = Object.assign({}, {giphy:{endpoint:'', token:'GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw'}});

        await expect(giphyApi.requestSearch("smile"))
                    .rejects
                    .toEqual({message: errors.Api.InvalidRequest});
  });

  it('should return an invalid request message when the token is empty', async () => {
      expect.assertions(1);

      //Setting token configuration to fail
      giphyApi.config = Object.assign({}, {giphy:{endpoint:'https://api.giphy.com/v1/gifs/search?api_key=', token:''}});

      await expect(giphyApi.requestSearch("smile"))
                  .rejects
                  .toEqual({message: errors.Api.InvalidRequest});
  });

  it('should display a validation search term error when search is empty', async () => {
    expect.assertions(1);

    await expect(giphyApi.requestSearch(""))
                .rejects
                .toEqual({message: errors.Validation.SearchTerm});
  });
  //TODO: If I have more time validate error codes
})

describe('✓ sending a valid API request to the giphy API', () => {

    //'Initialize a valid configuration for the API'
    beforeEach(()=>{
      giphyApi.config=Object.assign({},config.giphy);
    });

  it('should return default number of results and offset', async () => {
    expect.assertions(3);

    const result = await giphyApi.requestSearch("smile");

    expect(result).toHaveProperty('data');
    expect(result).toHaveProperty('meta');
    expect(result).toHaveProperty('pagination');
  });

  it('should return specific number of results with default offset', async () => {
    expect.assertions(3);

    const result = await giphyApi.requestSearch("smile",2);

    expect(result).toHaveProperty('data');
    expect(result).toHaveProperty('pagination.count');
    expect(result.data.length).toEqual(result.pagination.count);

  });

  it('should return specific number of results with an offset', async () => {
    expect.assertions(1);

    const result = await giphyApi.requestSearch("smile",2,3);

    expect(result).toHaveProperty('pagination.offset',3);
  });



})

describe('✓ normalizing api response object', () => {
  //'Initialize a valid configuration for the API'
  beforeEach(()=>{
      giphyApi.config=Object.assign({},config.giphy);
  });

  it('should return a collection of giphy objects with the necesary properties', async () => {
        expect.assertions(5);

        let result=await giphyApi.searchGiphys("smile",2,0);
        let values= Object.values(result);

        expect(values.length).toEqual(2);
        expect(values[0]).toHaveProperty('id');
        expect(values[0]).toHaveProperty('images');
        expect(values[0].images).toHaveProperty('fixed_width');
        expect(values[0].images.fixed_width).toHaveProperty('url');
  });
})

describe('✗ normalizing api is passing errors to the next layer', () => {

  //'Initialize a valid configuration for the API'
  beforeEach(()=>{
    giphyApi.config=Object.assign({},config.giphy);
  });

  it('should return an error message for invalid api url', async () => {
    expect.assertions(1);

    //Setting url configuration to fail
    giphyApi.config = Object.assign({}, {giphy:{endpoint:'', token:'GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw'}});
     await expect(giphyApi.searchGiphys("smile"))
                     .rejects
                     .toEqual({message: errors.Api.InvalidRequest});
  }); 

  it('should return an error message for no valid search', async () => {
     expect.assertions(1);

     await expect(giphyApi.searchGiphys(""))
                     .rejects
                     .toEqual({message: errors.Validation.SearchTerm});
  }); 

  it('should return an error message for no results', async () => {
     expect.assertions(1);

     await expect(giphyApi.searchGiphys("kwyc"))
                     .rejects
                     .toEqual({message: errors.Validation.SearchWithoutResults});
  }); 

})