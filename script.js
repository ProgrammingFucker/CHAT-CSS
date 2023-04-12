const socket = io();

socket.on('connect', () => {
  console.log('conectado al servidor');
});

socket.on('disconnect', () => {
  console.log('desconectado del servidor');
});

socket.on('message', message => {
  console.log(message);
  $('#messages').append($('<p>').text(message.content));
});

$('#message-form').submit(event => {
  event.preventDefault();

  const message = $('#message-input').val();
  socket.emit('message', message);

  $('#message-input').val('');
});




$('#message-form').submit(event => {
    event.preventDefault();
  
    const recipient = $('#recipient-input').val();
    const content = $('#message-input').val();
    const message = { recipient, content };
  
    socket.emit('message', message);
  
    $('#message-input').val('');
  });
  
  socket.on('message', message => {
    console.log(message);
    $('#messages').append($('<p>').text(message));
  });
  