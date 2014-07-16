var socket
try{
    socket = io.connect('http://localhost:4040');
}catch(e){

}
socket.on('connection'), function(data) {
    console.log(data);
}