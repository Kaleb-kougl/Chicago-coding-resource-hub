$(document).ready(function() {
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

  function writeJobData(firstName, lastName, email, title, link, educationDescription, keywordsArray) {
    firebase.database().ref('/education/').push({
      'firstName': firstName,
      'lastName': lastName,
      'email': email,
      'title': title, 
      'url': link,
      'description': educationDescription,
      'keywords': keywordsArray
    });
  }

  // Grab data from submission form on click of submit button, clear forms after
  // Validate forms to make sure they aren't empty/correct data types
  // Validate email with mailboxlayer API
  $(document).on("click", '#educationSubmit', function(event){
    event.preventDefault();

    let string = $('#educationKeywords').val();
    let arrayOfKeywords = string.split(',')

    writeJobData($("#firstNameInput").val(), $('#lastNameInput').val(), $('#contactEmail').val(), $('#exampleFormControlInput1').val(), $("#linkInput").val(), $("#educationDescription").val() ,arrayOfKeywords);

    $("#firstNameInput").val("") 
    $('#lastNameInput').val("");
    $('#contactEmail').val("");
    $('#exampleFormControlInput1').val("")
    $('#linkInput').val("")
    $("#educationDescription").val("");
    $("#educationKeywords").val("");
  })
});