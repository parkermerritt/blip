// replace these values with those generated in your TokBox Account
var apiKey = "45911312";
var sessionId = "2_MX40NTkxMTMxMn5-MTQ5OTgwMzIwNjYxNX5KNzlqVjJpcFBGcGNBd0tnaExETWlEeEJ-fg";
var token = "T1==cGFydG5lcl9pZD00NTkxMTMxMiZzaWc9ODc4YTQ0NzQ0MTVjMTNiOTZhYjUyYWUyYTI2Y2MxNzU3ODE2ZDY5NTpzZXNzaW9uX2lkPTJfTVg0ME5Ua3hNVE14TW41LU1UUTVPVGd3TXpJd05qWXhOWDVLTnpscVZqSnBjRkJHY0dOQmQwdG5hRXhFVFdsRWVFSi1mZyZjcmVhdGVfdGltZT0xNDk5ODA0ODMyJm5vbmNlPTAuMTg0NDYxNDkwNjc2MjcxODImcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTUwMjM5NjgyNSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

// (optional) add server code here
initializeSession();

// Handling all of our errors here by alerting them
function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream
  session.on('streamCreated', function(event) {
  session.subscribe(event.stream, 'subscriber', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);
});

  // Create a publisher
  var publisher = OT.initPublisher('publisher', {
    insertMode: 'append',
    width: '100%',
    height: '100%'
  }, handleError);

  // Connect to the session
  session.connect(token, function(error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
}

