// DIFFERENTIATE BETWEEN OUR DATABASE AND API LISTING
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

  function writeJobData(firstName, lastName, email, jobTitle, location, jobDescription, keywordsArray) {
    firebase.database().ref('/jobs/').push({
    'firstName': firstName,
      'lastName': lastName,
      'email': email,
      'title': jobTitle, 
      'location': location,
      'description': jobDescription,
      'keywords': keywordsArray
    });
  }

  // writeJobData('kaleb', 'test', 'test@SpeechGrammarList.com', 'software Engineer', 'have to like dogs', ['frogs', 'dogs', 'code', 'tech', 'javaScript']);

  // Grab data from submission form on click of submit button, clear forms after
  $(document).on("click", '#jobSubmit', function(event){
    event.preventDefault();

    let string = $('#job-keywords').val().trim();
    let arrayOfKeywords = string.split(',')

    writeJobData($("#firstNameInput").val(), $('#lastNameInput').val(), $('#contactEmail').val(), $('#exampleFormControlInput1').val(), $('#exampleFormControlInput2').val(), $('#jobDescription').val(), arrayOfKeywords);

    $("#firstNameInput").val("") 
    $('#lastNameInput').val("");
    $('#contactEmail').val("");
    $('#exampleFormControlInput1').val("");
    $('#exampleFormControlInput2').val("")
    $("#jobDescription").val("");
    $("#job-keywords").val("");
  })
});