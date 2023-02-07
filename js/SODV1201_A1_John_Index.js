/*
 * @name: Assignement1
 * @Course Code: SODV1201_22MAYMNOT4
 * @class: Software Development Diploma program.
 * @author: John Esmilio  
*/

// main index page JS code
function namePhaseIn(){
  //Function that reveals my name in the browser window.
  //Adds a new class called "reveal" and adds to the ID element 'myName'.
  let myName = document.getElementById('myName');
  myName.classList.add("reveal");
}

function biographyPhaseIn(){
  //Function that shows the text under my name.
  //Adds a new class called "showMe" and adds to the ID element 'underBlock'.
  let biography = document.getElementById('underBlock');
  biography.classList.add("showMe");
}

function showPara(){
  // Function that shows the landing page paragraph.
  //Adds a new class called "showPara" and adds to the ID element 'para1'.
  let words = document.getElementById("para1");
  words.classList.add("showPara");
}

function showText(){
  //three previous functions called into one to be able place in body onLoad
  namePhaseIn();
  biographyPhaseIn();
  showPara();
}

//grade converter JS code
function gradeConvert(){
  const userGradeCheck = parseInt(document.getElementById('userGradeInput').value);
  "use strict"
  try{  
    //If the user grade is >= 90 and <= 100, an alert will pop up saying the user's grade is an A. It will also write to the innerHTML ID element of userGrade.
    if(userGradeCheck >=90 && userGradeCheck <= 100){
      document.getElementById('userGrade').innerHTML = "Your grade is A.";
      alert('Grade is A');
    }

    //If the user grade is >= 80 and <= 89, an alert will pop up saying the user's grade is a B. It will also write to the innerHTML ID element of userGrade.
    if(userGradeCheck >=80 && userGradeCheck <= 89){
      document.getElementById('userGrade').innerHTML = "Your grade is B.";
      alert('Grade is B');
    }

    //If the user grade is >= 70 and <= 79, an alert will pop up saying the user's grade is a C. It will also write to the innerHTML ID element of userGrade.
    if(userGradeCheck >=70 && userGradeCheck <= 79){
      document.getElementById('userGrade').innerHTML = "Your grade is C.";
      alert('Grade is C');
    }

    //If the user grade is >= 50 and <= 69, an alert will pop up saying the user's grade is a D. It will also write to the innerHTML ID element of userGrade.
    if(userGradeCheck >=50 && userGradeCheck <= 69){
      document.getElementById('userGrade').innerHTML = "Your grade is D.";
      alert('Grade is D');
    }

    //If the user grade is >= 0 and < 49, an alert will pop up saying the user's grade is a D. It will also write to the innerHTML ID element of userGrade.
    if(userGradeCheck >=0 && userGradeCheck < 49){
      document.getElementById('userGrade').innerHTML = "Your grade is F.";
      alert('Grade is F');
    }

    //If the user input grade is not a number, an alert will pop up saying the user's grade is not a number. It will also write to the innerHTML ID element of userGrade requesting to input a number.
    if(isNaN(userGradeCheck)) {
      alert('not a number, input a number.');
      userGradeCheck = Number(userGradeCheck);
      document.getElementById('userGrade').innerHTML = HTMLObjectElement.validationMessage = "Grade is not a number, input a number";
    }

    //If the user input grade is above 100, an alert will pop up telling the user to input a grade from 0-100. It also writes to the innerHTMl ID element of userGrade requesting to try again.
    if(userGradeCheck > 100){
      alert('Grade is too high, input grade from 0-100');
      document.getElementById('userGrade').innerHTML = HTMLObjectElement.validationMessage = "Grade is above 100, try again.";
    }

    //If the user input grade is less than 0 (a negative number), an alert will pop up telling the user to input a grade from 0-100. It also writes to the innerHTMl ID element of userGrade requesting to try again.
    if(userGradeCheck < 0){
      document.getElementById('userGrade').innerHTML = HTMLObjectElement.validationMessage = "Grade is below 0, input grade from 0-100";
      alert('Grade is below 0, input grade from 0-100');
    }
  }
  // catch (e) will catch the the random characters inputted and will request the user to try again with a valid number.
  catch(e){
    if(isNaN(userGradeCheck)){
      console.log("Not a valid input, please input a value.");
      alert("Grade is not valid, try again.");
      document.getElementById('userGrade').innerHTML = HTMLObjectElement.validationMessage = "Grade is not a valid number, input a valid number.";
    }
  }
}

//Staff page JS code
//Array for staff information.
var dataSet = [   
  {Name:"Brielle Williamson", Position:"Integration Specialist", Location:"New York", ID:"4804", DateJoined:"2012/12/02", Salary:372000 },
  {Name: "Herrod Chandler", Position:"Sales Assistant", Location:"San Francisco", ID:"9608", DateJoined:"2012/08/06", Salary:137500 },
  {Name: "Rhona Davidson", Position:"Integration Specialist", Location:"Tokyo", ID:"6200", DateJoined:"2010/10/14", Salary:327900 },
  {Name: "Colleen Hurst", Position:"Javascript Developer", Location:"San Francisco", ID:"2360", DateJoined:"2009/09/15", Salary:205500 },
  {Name: "Sonya Frost", Position:"Software Engineer", Location:"Edinburgh", ID:"1667", DateJoined:"2008/12/13", Salary:103600 },
  {Name: "Jena Gaines", Position:"Office Manager", Location:"London", ID:"3814", DateJoined:"2008/12/19", Salary:90560 },
  {Name: "Quinn Flynn", Position:"Support Lead", Location:"Edinburgh", ID:"9497", DateJoined:"2013/03/03", Salary:342000 },
  {Name: "Tiger Nixon", Position:"System Architect", Location:"Edinburgh", ID:"5421", DateJoined:"2011/04/25", Salary:320800 },
  {Name: "Garrett Winters", Position:"Accountant", Location:"Tokyo", ID:"8422", DateJoined:"2011/07/25", Salary:170750 },
  {Name: "Ashton Cox", Position:"Junior Technical Author", Location:"San Francisco", ID:"1562", DateJoined:"2009/01/12", Salary:86000 },
  {Name: "Cedric Kelly", Position:"Senior Javascript Developer", Location: "Edinburgh", ID:"6224", DateJoined:"2012/03/29", Salary:433060 },
  {Name: "Airi Satou", Position:"Accountant", Location: "Tokyo", ID:"5407", DateJoined:"2008/11/28", Salary:162700 },
  {Name: "Charde Marshall", Position:"Regional Director", Location: "San Francisco", ID:"6741", DateJoined:"2008/10/16", Salary:470600 },
  {Name: "Haley Kennedy", Position:"Senior Marketing Designer", Location: "London", ID:"3597", DateJoined:"2012/12/18", Salary:313500 },
  {Name: "Tatyana Fitzpatrick", Position:"Regional Director", Location: "London", ID:"1965", DateJoined:"2010/03/17", Salary:385750 },
  {Name: "Michael Silva", Position:"Marketing Designer", Location: "London", ID:"1581", DateJoined:"2012/11/27", Salary:198500 },
  {Name: "Paul Byrd", Position:"Chief Financial Officer (CFO)", Location: "New York", ID:"3059", DateJoined:"2010/06/09", Salary:25000 },
  {Name: "Gloria Little", Position:"Systems Administrator", Location: "New York", ID:"1721", DateJoined:"2009/04/10", Salary:237500 },
  {Name: "Bradley Greer", Position:"Software Engineer", Location: "London", ID:"2558", DateJoined:"2012/10/13", Salary:132000 },
  {Name: "Dai Rios", Position:"Personnel Lead", Location: "Edinburgh", ID:"2290", DateJoined:"2012/09/26", Salary:217500 },
  {Name: "Jenette Caldwell", Position:"Development Lead", Location: "New York", ID:"1937", DateJoined:"2011/09/03", Salary:345000 },
  {Name: "Yuri Berry", Position:"Chief Marketing Officer (CMO)", Location: "New York", ID:"6154", DateJoined:"2009/06/25", Salary:675000 },
  {Name: "Caesar Vance", Position:"Pre-Sales Support", Location: "New York", ID:"8330", DateJoined:"2011/12/12", Salary:106450 },
  {Name: "Doris Wilder", Position:"Sales Assistant", Location: "Sidney", ID:"3023", DateJoined:"2010/09/20", Salary:85600 },
  {Name: "Angelica Ramos", Position:"Chief Executive Officer (CEO)", Location: "London", ID:"5797", DateJoined:"2009/10/09", Salary:1200000 },
  {Name: "Gavin Joyce", Position:"Developer", Location: "Edinburgh", ID:"8822", DateJoined:"2010/12/22", Salary:92575 },
  {Name: "Jennifer Chang", Position:"Regional Director", Location: "Singapore", ID:"9239", DateJoined:"2010/11/14", Salary:357650 },
  {Name: "Brenden Wagner", Position:"Software Engineer", Location: "San Francisco", ID:"1314", DateJoined:"2011/06/07", Salary:206850 },
  {Name: "Fiona Green", Position:"Chief Operating Officer (COO)", Location: "San Francisco", ID:"2947", DateJoined:"2010/03/11", Salary:850000 },
  {Name: "Shou Itou", Position:"Regional Marketing", Location: "Tokyo", ID:"8899", DateJoined:"2011/08/14", Salary:163000 },
  {Name: "Michelle House", Position:"Integration Specialist", Location: "Sidney", ID:"2769", DateJoined:"2011/06/02", Salary:95400 },
  {Name: "Suki Burks", Position:"Developer", Location: "London", ID:"6832", DateJoined:"2009/10/22", Salary:114500 },
  {Name: "Prescott Bartlett", Position:"Technical Author", Location: "London", ID:"3606", DateJoined:"2011/05/07", Salary:145000 },
  {Name: "Gavin Cortez", Position:"Team Leader", Location: "San Francisco", ID:"2860", DateJoined:"2008/10/26", Salary:235500 },
  {Name: "Martena Mccray", Position:"Post-Sales support", Location: "Edinburgh", ID:"8240", DateJoined:"2011/03/09", Salary:324050 },
  {Name: "Unity Butler", Position:"Marketing Designer", Location: "San Francisco", ID:"5384", DateJoined:"2009/12/09", Salary:85675 }
];

//jQuery used to load table when the window is loaded.
$(function(){
  //Function called to place the default array into a table when the window is loaded.
  createTable(dataSet);
})

//Table declared here to be placed into the window.
var table = document.getElementById("table");
//Function that creates a table
function createTable(dataSet){
  //Empty string to let table.innerHTMl to append to.
  let entries = '';

  for(let people of dataSet){
    //Sets the rows of data with a for loop from the objects names from dataSet (35 rows of entries)
    entries += `<tr><td>${people.Name}</td><td>${people.Position}</td><td>${people.Location}</td><td>${people.ID}</td><td>${people.DateJoined}</td><td>${people.Salary}</td></tr>`;
  }
  //Table entries are placed into the ID element of "table". 
  table.innerHTML = entries;
}

//Function that sorts array in descending name order.
function sortArrNameDesc(){
  dataSet.sort(function(a, b){
    //Checks the first and the second string. If the first letter of the first string is alphabetically sorted (Z-A) before the next string, it will place the string before the next string (return -1;). Otherwise, it will place it after the second string (return 1;).
    checkfName1 = a.Name;
    checkfName2 = b.Name;
    if(checkfName1 < checkfName2){
      return -1;
    }
    if(checkfName1 > checkfName2){
      return 1;
    }
  });
  //Name descending order will replace the current window table when the button is pressed, with createTable. This is also available to view in the console with console.table.
  createTable(dataSet);
  console.table(dataSet);
}

//Function that sorts array in ascending name order.
function sortArrNameAsc(){
  //Checks the first and the second string. If the first letter of the first string is alphabetically sorted (A-Z) before the second string, it will place the string before the second string (return -1;). Otherwise, it will place it after the second string (return 1;).
  dataSet.sort(function(a, b){
    checkfName1 = a.Name;
    checkfName2 = b.Name;
    if(checkfName2 < checkfName1){
      return -1;
    }
    if(checkfName2 > checkfName1){
      return 1;
    }
  });
  //Name ascending order will replace the current window table when the button is pressed, with createTable. This is also available to view in the console with console.table.
  createTable(dataSet);
  console.table(dataSet);
}

//Function that sorts array in descending salary order.
function sortArrSalaryDesc(){
  dataSet.sort(function(a, b){
    //Checks first and second salary. If the second salary is higher than the first salary, it will be placed above the lower salary value.
    return b.Salary - a.Salary;
  });
  //Salary descending order will replace the current window table when the button is pressed, with createTable. This is also available to view in the console with console.table.
  createTable(dataSet);
  console.table(dataSet);
}

//Function that sorts array in ascending salary order.
function sortArrSalaryAsc(){
  dataSet.sort((a, b) => {
    //Checks first and second salary. If the first salary is lower than the second salary, it will be placed above the higher salary value.
    return a.Salary - b.Salary;
  });
    //Salary ascending order will replace the current window table when the button is pressed, with createTable. This is also available to view in the console with console.table.
  createTable(dataSet);
  console.table(dataSet);
}

//Weather JS code
function anonymous(){
  //the value taken from user is stored into variable "userTempInput"
  var userTempInput = $("#userF-Input").val();
  /*Here the calculation for the celsius conversion is taken from the user to convert fahrenheit to a celsius value. 
  ".toFixed(2) rounds the decimal point to two digits."*/
  var celsiusConvert = ((userTempInput) - 32 )/ 1.8;

  /*The celsius value is stored into the <p> tag with the id of "celsiusValue". 
  ".toFixed(2) rounds the decimal point to two digits." 
  ".html" will allow the calculations to overwrite the previous values*/
  $("#celsiusValue").html(celsiusConvert.toFixed(2) + " &#176C");

  //Here the calculation for the kelvin conversion is taken from the converted celsius value and converted into a kelvin value. 
  var kelvinConvert = ((celsiusConvert) + 273.15);
  /*The kelvin value is stored into the <p> tag with the id of "kelvinValue". 
  ".toFixed(2) rounds the decimal point to two digits." */
  $("#kelvinValue").html(kelvinConvert.toFixed(2) + " K");
  
  /*console.log lets us see the output for the celsius and kelvin values in the browser console. 
  ".toFixed(2) rounds the decimal point to two digits."*/
  console.log(celsiusConvert.toFixed(2));
  console.log(kelvinConvert.toFixed(2));
  };
  