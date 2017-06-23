<script type="text/javascript" src="http://cdn.icecomm.io/icecomm.js"></script>

var comm = new Icecomm('your_api_key')

comm.on('local', function(options) {
  localVideo.src = options.stream;
});

comm.on('connected', function(options) {
    document.body.appendChild(options.video);
});

document.body.appendChild(options.video);


comm.on('disconnect', function(options) {
    document.getElementById(options.callerID).remove();
});

comm.connect('my_room')
