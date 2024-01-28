const text = document.querySelector('.text');
const send = document.querySelector('.send');
const geolocation = document.querySelector('.geolocation');
const chat = document.querySelector('.chat');

const wsUri = "wss://echo-ws-service.herokuapp.com";
let websocket = new WebSocket(wsUri);

let messages = '';

send.addEventListener('click', () => {
  messages += `<div style="display: flex; justify-content: center; border: 2px solid cornflowerblue; border-radius: 5px; max-width: 200px; height: auto; padding: 10px; margin: 5px; margin-left: auto;">${text.value}</div>`;
  let message = `<div style="display: flex; justify-content: center; border: 2px solid cornflowerblue; border-radius: 5px; max-width: 200px; height: auto; padding: 10px; margin: 5px; margin-right: auto;">${text.value}</div>`;
  websocket.send(message);
  websocket.onmessage = function(evt) {
    messages += evt.data;
    chat.innerHTML = messages;
  };
})  

geolocation.addEventListener('click', () => {
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition((position) => {
      const {coords} = position;
      console.log(coords.latitude, coords.longitude);
      messages += `<a style="display: flex; justify-content: center; border: 2px solid cornflowerblue; border-radius: 5px; max-width: 200px; height: auto; padding: 10px; margin: 5px; margin-left: auto;" href="https://www.openstreetmap.org/#map=18/${coords.latitude}/${coords.longitude}">Гео-локация</a>`
      chat.innerHTML = messages;    
    });
  }
})
