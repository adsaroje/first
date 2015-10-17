var socket = io.connect('http://zehc.azurewebsites.net/');
socket.on('news', function(data){
    console.log(data);
    socket.emit('my other event', {my: 'data'});
});