// makes an object of the form {userJoined: 'userJoined'}
const messageTypes = [
  'ADD_FAVORITE_GIF',
  'REMOVE_FAVORITE_GIF',
  'SET_FAVORITE_GIF'
].reduce((accum, msg) => {
  accum[ msg ] = msg
  return accum
}, {})

// console.log(process.env);
// console.log('PORT',process.env.PORT);
// const port = process.env.PORT || 5000
// const host = '127.0.0.1'
const uri= `https://gifsappserver.herokuapp.com`;//http://${host}:${port}`;
console.log('websocket:',uri);

module.exports ={
      messageTypes,
      uri:uri
}
