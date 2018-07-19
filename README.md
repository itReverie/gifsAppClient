## Web application to add favorite gifs based on the giphy api
***

This application was created using create-react-app. 
Redux is also used to keep the state of the application.
This application also uses local storage to persist the favorites in the browser.

This application uses web sockets in order to have a real time update of the favorites added or removed; so make sure you run the server application first in order to get that experience. You can find the server application on the **gifsAppServer** folder.

By default the socket on the server runs in: 
```
 http://127.0.0.1:5000
```

In order to run the front end, first install the dependencies with:
```
 npm install
```

In order to run the tests:
```
 npm run test
```

In order to run the server:
```
 npm start
```

The front end runs in:
```
 http://127.0.0.1:3000
```

You can modify the url to the Giphy api and other settings on the *src/config/index.js* file


The application was deployed in Heroku on:

https://gifsappclient.herokuapp.com/

#### Some notes

I left the test files intentionally at the same level of the classes as it was easier for me to visualize the classes that have tests. I am aware that most people prefer to have a ```_test_``` folder under components. I am happy to adapt to any other practices.




