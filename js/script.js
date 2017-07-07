
var video_out = document.getElementById("vid-box");

function login(form) {

	var phone = window.phone = PHONE({
	    number        : form.username.value || "Anonymous", // listen on username line else Anonymous
	    publish_key   : 'pub-c-65d780fb-89a5-4cd2-bbc6-bd5d928a6345',
	    subscribe_key : 'sub-c-e0c8d9b8-61ce-11e7-b6db-02ee2ddab7fe',
	});
	phone.ready(function(){ form.username.style.background="#55ff5b"; form.login_submit.hidden="true";});
	phone.receive(function(session){
	    session.connected(function(session) { video_out.appendChild(session.video); });
	    session.ended(function(session) { video_out.innerHTML=''; });
	});
	return false; 	// So the form does not submit.
}

function makeCall(form){
	if (!window.phone) alert("Login First!");
	else phone.dial(form.number.value);
	return false;
}
