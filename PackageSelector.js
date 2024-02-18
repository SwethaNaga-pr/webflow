document.addEventListener('DOMContentLoaded', function () {
        var datePickers = document.querySelectorAll('.datepicker');
        datePickers.forEach(function (picker) {
            flatpickr(picker, {
                minDate: 'today'
            });
        });
    });
    function getUrlParameter(name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    }
    var parameterValue = getUrlParameter('From');
    var parameterValue2 = getUrlParameter('To');
		var today = new Date();
    today.setDate(today.getDate() + 60);
		var formattedDate = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
    document.addEventListener('DOMContentLoaded', function() {
var optionToSelect = document.querySelector('#Departure option[value="' + parameterValue + '"]');
var optionToSelect2 = document.querySelector('#Arrival option[value="' + parameterValue2 + '"]');
var optionToSelect3 = document.querySelector('#Adults-1 option[value="2"]'); 
var optionToSelect4 = document.querySelector('#Children-1 option[value="0"]');
document.getElementById('Dep_date').value = formattedDate;
optionToSelect.selected = true;
optionToSelect2.selected = true;
optionToSelect3.selected = true;
optionToSelect4.selected = true;
});

document.addEventListener('DOMContentLoaded', function() {
        var ChildreninRoom1 = document.getElementById('Children-1');
        var targetDivinRoom1 = document.getElementById('ChildAgeDiv-1');
        var child1DivinRoom1 = document.getElementById('Child1AgeDiv-1');
        var child2DivinRoom1 = document.getElementById('Child2AgeDiv-1');
        var child3DivinRoom1 = document.getElementById('Child3AgeDiv-1');
        ChildreninRoom1.addEventListener('change', function() {
            var selectedValue1 = parseInt(ChildreninRoom1.value);
                     if (selectedValue1 > 2) {
   targetDivinRoom1.style.display = 'flex';
   child1DivinRoom1.style.display = 'block';
   child2DivinRoom1.style.display = 'block';
   child3DivinRoom1.style.display = 'block';
} else if (selectedValue1 > 1) {
   targetDivinRoom1.style.display = 'flex';
   child1DivinRoom1.style.display = 'block';
   child2DivinRoom1.style.display = 'block';
   child3DivinRoom1.style.display = 'none';
} else if (selectedValue1 > 0) {
   targetDivinRoom1.style.display = 'flex';
   child1DivinRoom1.style.display = 'block';
   child2DivinRoom1.style.display = 'none';
   child3DivinRoom1.style.display = 'none';
} else { 
   targetDivinRoom1.style.display = 'none';
   }
        });
 //Handling Children in Room 2
      
      var ChildreninRoom2 = document.getElementById('Children-2');
        var targetDivinRoom2 = document.getElementById('ChildAgeDiv-2');
        var child1DivinRoom2 = document.getElementById('Child1AgeDiv-2');
        var child2DivinRoom2 = document.getElementById('Child2AgeDiv-2');
        var child3DivinRoom2 = document.getElementById('Child3AgeDiv-2');

        ChildreninRoom2.addEventListener('change', function() {
            var selectedValue2 = parseInt(ChildreninRoom2.value);
                     if (selectedValue2 > 2) {
   targetDivinRoom2.style.display = 'flex';
   child1DivinRoom2.style.display = 'block';
   child2DivinRoom2.style.display = 'block';
   child3DivinRoom2.style.display = 'block';
} else if (selectedValue2 > 1) {
   targetDivinRoom2.style.display = 'flex';
   child1DivinRoom2.style.display = 'block';
   child2DivinRoom2.style.display = 'block';
   child3DivinRoom2.style.display = 'none';
} else if (selectedValue2 > 0) {
   targetDivinRoom2.style.display = 'flex';
   child1DivinRoom2.style.display = 'block';
   child2DivinRoom2.style.display = 'none';
   child3DivinRoom2.style.display = 'none';
} else { 
   targetDivinRoom2.style.display = 'none';
   }
        });   
 //Handling Children in Room 3
      
      var ChildreninRoom3 = document.getElementById('Children-3');
        var targetDivinRoom3 = document.getElementById('ChildAgeDiv-3');
        var child1DivinRoom3 = document.getElementById('Child1AgeDiv-3');
        var child2DivinRoom3 = document.getElementById('Child2AgeDiv-3');
        var child3DivinRoom3 = document.getElementById('Child3AgeDiv-3');

        ChildreninRoom3.addEventListener('change', function() {
            var selectedValue3 = parseInt(ChildreninRoom3.value);
                     if (selectedValue3 > 2) {
   targetDivinRoom3.style.display = 'flex';
   child1DivinRoom3.style.display = 'block';
   child2DivinRoom3.style.display = 'block';
   child3DivinRoom3.style.display = 'block';
} else if (selectedValue3 > 1) {
   targetDivinRoom3.style.display = 'flex';
   child1DivinRoom3.style.display = 'block';
   child2DivinRoom3.style.display = 'block';
   child3DivinRoom3.style.display = 'none';
} else if (selectedValue3 > 0) {
   targetDivinRoom3.style.display = 'flex';
   child1DivinRoom3.style.display = 'block';
   child2DivinRoom3.style.display = 'none';
   child3DivinRoom3.style.display = 'none';
} else { 
   targetDivinRoom3.style.display = 'none';
   }
        }); 
});

document.addEventListener('DOMContentLoaded', function() {
    var container = document.getElementById('GuestsDiv');
    var message = document.getElementById('GuestsSummary');

    container.addEventListener('change', function(event) {
        if (event.target.classList.contains('select-field')) {
        		var adultsvaleR1 = parseInt(document.getElementById('Adults-1').value);
            var adultsvaleR2 = parseInt(document.getElementById('Adults-2').value);
            var adultsvaleR3 = parseInt(document.getElementById('Adults-3').value);
        		var childrenvalR1 = parseInt(document.getElementById('Children-1').value);
            var childrenvalR2 = parseInt(document.getElementById('Children-2').value);
            var childrenvalR3 = parseInt(document.getElementById('Children-3').value);            
            var adultsval = adultsvaleR1 + adultsvaleR2 + adultsvaleR3;
            var childrenval = childrenvalR1 + childrenvalR2 + childrenvalR3;
            var roomsval = Math.min(adultsvaleR1+childrenvalR1,1)+ Math.min(adultsvaleR2+childrenvalR2,1) + Math.min(adultsvaleR3+childrenvalR3,1);
            message.textContent = 'Rooms: ' + roomsval + 'Adults: ' + adultsval + ' Children: ' + childrenval;
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var AddRoom = document.getElementById("AddAnotherRoom");    
    AddRoom.addEventListener("click", function() {
    		var Room2 = document.getElementById('Room-2');
        var Room3 = document.getElementById('Room-3'); 
        var Room2Status = window.getComputedStyle(Room2).display;
        var Room3Status = window.getComputedStyle(Room3).display;
        if(Room2Status === "none" && Room3Status === "none")
        {
        	Room2.style.display = "block";
        }
        else if (Room2Status === "block" && Room3Status === "none")
        {
        	Room3.style.display = "block";
          document.getElementById("AddAnotherRoom").style.display = "none";
        }        
        else if (Room2Status === "none" && Room3Status === "block")
        {
        	Room2.style.display = "block";
          document.getElementById("AddAnotherRoom").style.display = "none";
        }
    });
    
        var DRoom2 = document.getElementById("DeleteRoom2");    

    // Add a click event listener to the button
    DRoom2.addEventListener("click", function() {
    		var Room2 = document.getElementById('Room-2');
        var Room3 = document.getElementById('Room-3'); 
        var Room2Status = window.getComputedStyle(Room2).display;
        var Room3Status = window.getComputedStyle(Room3).display;
        if(Room2Status === "block" && Room3Status === "none")
        {
        	Room2.style.display = "none";
          document.getElementById('Adults-2').value = 0;
          document.getElementById('Children-2').value = 0;
          document.getElementById('GuestsSummary').textContent = 'Rooms: 1, Adults: ' + document.getElementById('Adults-1').value + ' Children: ' + document.getElementById('Children-1').value; 
        }
        else if (Room2Status === "block" && Room3Status === "block")
        {
        	Room2.style.display = "none";
          document.getElementById("AddAnotherRoom").style.display = "block";          
          document.getElementById('Adults-2').value = 0;
          document.getElementById('Children-2').value = 0;
          var NewAdults = parseInt(document.getElementById('Adults-1').value) + parseInt(document.getElementById('Adults-3').value);
          var NewChildren = parseInt(document.getElementById('Children-1').value) + parseInt(document.getElementById('Children-3').value);
          document.getElementById('GuestsSummary').textContent = 'Rooms: 2, Adults: ' + NewAdults + ' Children: ' + NewChildren; 
        }                  	
    });

    
        var DRoom3 = document.getElementById("DeleteRoom3");    

    // Add a click event listener to the button
    DRoom3.addEventListener("click", function() {
    		var Room2 = document.getElementById('Room-2');
        var Room3 = document.getElementById('Room-3'); 
        var Room2Status = window.getComputedStyle(Room2).display;
        var Room3Status = window.getComputedStyle(Room3).display;
        if(Room2Status === "block" && Room3Status === "block")
        {
        	Room3.style.display = "none";
          document.getElementById("AddAnotherRoom").style.display = "block"; 
          document.getElementById('Adults-3').value = 0;
          document.getElementById('Children-3').value = 0;
          var NewAdults = parseInt(document.getElementById('Adults-1').value) + parseInt(document.getElementById('Adults-2').value);
          var NewChildren = parseInt(document.getElementById('Children-1').value) + parseInt(document.getElementById('Children-2').value);
          document.getElementById('GuestsSummary').textContent = 'Rooms: 2, Adults: ' + NewAdults + ' Children: ' + NewChildren; 
        }
        else if (Room2Status === "none" && Room3Status === "block")
        {
        	Room3.style.display = "none";        
          document.getElementById('Adults-3').value = 0;
          document.getElementById('Children-3').value = 0;
          document.getElementById('GuestsSummary').textContent = 'Rooms: 1, Adults: ' + document.getElementById('Adults-1').value + ' Children: ' + document.getElementById('Children-1').value; 
        }                  	
    });
});