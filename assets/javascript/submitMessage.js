 // Initialize Firebase
 var config = {
  apiKey: "AIzaSyC-2cDf9lWxvBYNIH7xXH73DPgwRcQFrHg",
  authDomain: "group-project-1-cfef2.firebaseapp.com",
  databaseURL: "https://group-project-1-cfef2.firebaseio.com",
  projectId: "group-project-1-cfef2",
  storageBucket: "group-project-1-cfef2.appspot.com",
  messagingSenderId: "12922874168"
};
firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

function writeMessage(id, firstName, lastName, message) {
  firebase.database().ref('/message/' + id).push({
   'firstName': firstName,
    'lastName': lastName,
    'message': message,
  });
}

function validateForm() {
  let userFirstName = $("firstNameInput").val();
  let userLastName = $("lastNameInput").val();
  let userMessage = $("message").val();

  let inputVal = new Array(userFirstName, userLastName, userMessage)
};

var value = sessionStorage.getItem("id");

// Append messages stored in firebase to page
$(document).ready(function(){
  $.ajax({
    url: `https://group-project-1-cfef2.firebaseio.com/message.json`,
    type: "GET",
  }).then(function(data) {
    console.log(data[value]);
    if (data[value] !== undefined) {
      $('#message-board').empty();
    }

    for (let dataPoint in data[value]){
      console.log(dataPoint);
      if (data[value].hasOwnProperty(dataPoint)){
        dataPoint = data[value][dataPoint];
        let newDiv = $('<div>');
        newDiv.attr('class', 'card');
        let newH1 = $('<h1>');
        newH1.text(`${dataPoint.firstName} ${dataPoint.lastName}`)
        newH1.attr('class', 'chat-title text-center');
        newDiv.append(newH1);
        let messageDiv = $('<div>');
        messageDiv.attr('card-body');
        messageDiv.text(`${dataPoint.message}`);
        newDiv.append(messageDiv);
        $('#message-board').append(newDiv);
      }
    }
  });

  // Grab data from submission form on click of submit button, clear forms after
  $(document).on('click', '#messageSubmit', function(event){
    event.preventDefault();
    writeMessage(value, $('#firstNameInput').val(), $("#lastNameInput").val(), $("#message").val());

    $("#firstNameInput").val("");
    $("#lastNameInput").val("");
    $("#message").val("");
  }); 
});