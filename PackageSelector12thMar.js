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
	var FroCityVar = sessionStorage.getItem('SS_FromCityVar') !== null ? sessionStorage.getItem('SS_FromCityVar') : parameterValue;
	var optionToSelect = document.querySelector('#Departure option[value="' + parameterValue + '"]');
var optionToSelect2 = document.querySelector('#Arrival option[value="' + parameterValue2 + '"]');
	var TcityCar = sessionStorage.getItem('SS_ToCityVar') !== null ? sessionStorage.getItem('SS_ToCityVar') : parameterValue2;
	var aduts_val = sessionStorage.getItem('SS_total_adults') !== null ? sessionStorage.getItem('SS_total_adults') : "2";
	var chidren_val = sessionStorage.getItem('SS_total_children') !== null ? sessionStorage.getItem('SS_total_children') : "0";
	var rom_val = sessionStorage.getItem('SS_num_of_rooms') !== null ? sessionStorage.getItem('SS_num_of_rooms') : "1";
var optionToSelect = document.querySelector('#Departure option[value="' + FroCityVar  + '"]');
var optionToSelect2 = document.querySelector('#Arrival option[value="' + TcityCar + '"]');
var optionToSelect3 = document.querySelector('#Adults-1 option[value="'  + aduts_val + '"]'); 
var optionToSelect4 = document.querySelector('#Children-1 option[value="' + chidren_val + '"]');
document.getElementById('Dep_date').value = sessionStorage.getItem('SS_Departure_date') !== null ? sessionStorage.getItem('SS_Departure_date') : formattedDate;
document.getElementById('GuestsSummary').textContent = 'Rooms: ' + rom_val + 'Adults: ' + aduts_val + ' Children: ' + chidren_val;
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
 document.addEventListener('DOMContentLoaded', function() {   
    function roundToNearest500(number) {
    return (Math.round(number / 500) * 500).toLocaleString('en-IN', {style: 'currency',currency: 'INR'}).replace(/\.\d+/, '');
}
    const convertSecondsToHoursAndMinutes = (seconds) => `${Math.floor(seconds / 3600)}h ${Math.round((seconds % 3600) / 60)}m`;
async function fetchFlightPrice(fly_from, fly_to, date_from, fnights, adults, infants) {
    const aurl = "https://tequila-api.kiwi.com/v2/search";
const result = new Date(date_from);
result.setDate(result.getDate() + fnights);
const return_date = result.toISOString().split('T')[0];

    const params = {
        fly_from: "airport:"+fly_from,
        fly_to: "airport:"+fly_to,
        date_from: date_from,
        date_to: date_from,
       return_from: return_date, 
        return_to: return_date,
        adults: adults,
        infants: infants,
        curr: "INR",
        limit: 1,
        sort: "price",
        max_stopovers: 0
    };
    const apiKey = "snYAL2Z3bpLpekruzlcfEcdyY940Yzzz";
    const queryString = new URLSearchParams(params).toString();
    const requestUrl = `${aurl}?${queryString}`;
    try {
        const response = await fetch(requestUrl, {
            method: "GET",
            headers: {
                "apikey": apiKey
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const isGzipped = response.headers.get('Content-Encoding') === 'gzip';
        let data;
        if (isGzipped) {
            const blob = await response.blob();
            const reader = new FileReader();
            reader.readAsText(blob, 'utf-8');
            data = await new Promise((resolve, reject) => {
                reader.onload = () => resolve(JSON.parse(reader.result));
                reader.onerror = reject;
            });
        } else {
            data = await response.json();
        }

        if (data.data && data.data.length > 0) {
        const flightOffer = data.data[0];




const outdate = new Date(flightOffer.route[0].local_departure);
const indate = new Date(flightOffer.route[1].local_departure);



document.getElementById('OutboundDateDisplayed'+fnights).textContent = new Date(flightOffer.route[0].local_departure).toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'});
document.getElementById('InboundDateDisplayed'+fnights).textContent = `${indate.getUTCDate()} ${new Intl.DateTimeFormat('en-GB', { month: 'short' }).format(indate)} ${indate.getUTCFullYear()}`;
document.getElementById('OutboundDateDepTime'+fnights).textContent =  new Date(flightOffer.route[0].local_departure).toISOString().slice(11, 16);
document.getElementById('OutboundDepCity'+fnights).textContent = flightOffer.route[0].cityFrom + " ("+ flightOffer.route[0].flyFrom +")";
var diffdays1 = " (+" + Math.ceil((new Date(flightOffer.route[0].local_arrival).setUTCHours(0,0,0,0) - new Date(flightOffer.route[0].local_departure).setUTCHours(0,0,0,0)) / (1000 * 60 * 60 * 24)) + " day(s))";
document.getElementById('OutboundDateArrTime'+fnights).textContent = new Date(flightOffer.route[0].local_arrival).toISOString().slice(11, 16) + (diffdays1 === " (+0 day(s))" ? "" : diffdays1);
document.getElementById('OutboundArrCity'+fnights).textContent = flightOffer.route[0].cityTo + " ("+ flightOffer.route[0].flyTo +")";
document.getElementById('InboundDateDepTime'+fnights).textContent =  new Date(flightOffer.route[1].local_departure).toISOString().slice(11, 16);
document.getElementById('InboundDepCity'+fnights).textContent = flightOffer.route[1].cityFrom + " ("+ flightOffer.route[1].flyFrom +")";
var diffdays2 = " (+" +  Math.ceil((new Date(flightOffer.route[1].local_arrival).setUTCHours(0,0,0,0) - new Date(flightOffer.route[1].local_departure).setUTCHours(0,0,0,0)) / (1000 * 60 * 60 * 24)) + " day(s))";
document.getElementById('InboundDateArrTime'+fnights).textContent = new Date(flightOffer.route[1].local_arrival).toISOString().slice(11, 16) + (diffdays2 === " (+0 day(s))" ? "" : diffdays2);
document.getElementById('InboundArrCity'+fnights).textContent = flightOffer.route[1].cityTo + " ("+ flightOffer.route[1].flyTo +")";
document.getElementById('OutboundDuration'+fnights).textContent = convertSecondsToHoursAndMinutes(flightOffer.duration.departure);
document.getElementById('InboundDuration'+fnights).textContent = convertSecondsToHoursAndMinutes(flightOffer.duration.return);
document.getElementById('OutboundFlightID'+fnights).textContent = flightOffer.route[0].airline + flightOffer.route[0].flight_no;
document.getElementById('InboundFlightID'+fnights).textContent = flightOffer.route[1].airline + flightOffer.route[1].flight_no; 
var airlineCodes = {
    'EK': 'Emirates',
    '6E': 'Indigo',
    'G9': 'Air Arabia',
    'AK': 'Air Asia',
    'SQ' : 'Singapore Airlines',
    'IX': 'Air India Express',
	'UK' : 'Vistara',
	'AI' : 'Air India'
};
document.getElementById('OutboundCarrier'+fnights).textContent = airlineCodes[flightOffer.route[0].airline];
document.getElementById('InboundCarrier'+fnights).textContent = airlineCodes[flightOffer.route[1].airline];
           console.log (flightOffer.price);
           return flightOffer.price;
        } else {
            throw new Error("No flight offers found");
        }
    } catch (error) {
        console.error("Error:", error);
        throw error; 
    }
}
 
const fetchWebflowData = async (searchValue) => {
    let offset = 0;
    let value = null;
    while (true) {
        const url = `https://api.webflow.com/collections/65e44789a9143194aeba3913/items?offset=${offset}&access_token=ce191f1a7ac489f2714e1b8ed7b11081b6244ff493045b913c70bfe1ed0f33e7`;
				const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        try {
            const response = await fetch(proxyUrl + url);
            const batch_data = await response.json();

            if (!batch_data.items.length) {
                break; 
            }

            for (const item of batch_data.items) {
                if (item['roomcompleteid'] === searchValue) {
                    value = item.price; 
                    break;
                }
            }

            
            if (value !== null) {
                break;
                return value;
            }

            offset += 100;
        } catch (error) {
            console.error('Error:', error);
            break;
        }
    }
    return value;
};
let selectedpackage;

async function DisplayHotels(From,Destination, FDepDate, peopledetails, adults, infants) {    
var flight4n = await fetchFlightPrice(From,Destination, FDepDate, 4, adults, infants);
var flight5n = await fetchFlightPrice(From,Destination, FDepDate, 5, adults, infants);
var flight6n = await fetchFlightPrice(From,Destination, FDepDate, 6, adults, infants);
var star3ppn = await fetchWebflowData(Destination+'_3_'+peopledetails);
var star4ppn = await fetchWebflowData(Destination+'_4_'+peopledetails);
var star5ppn = await fetchWebflowData(Destination+'_5_'+peopledetails);
document.getElementById(Destination+'3Star4Nights').querySelector('p').textContent = roundToNearest500(flight4n + 4*star3ppn);
document.getElementById(Destination+'3Star5Nights').querySelector('p').textContent = roundToNearest500(flight5n + 5*star3ppn);
document.getElementById(Destination+'3Star6Nights').querySelector('p').textContent = roundToNearest500(flight6n + 6*star3ppn);
document.getElementById(Destination+'4Star4Nights').querySelector('p').textContent = roundToNearest500(flight4n + 4*star4ppn);
document.getElementById(Destination+'4Star5Nights').querySelector('p').textContent = roundToNearest500(flight5n + 5*star4ppn);
document.getElementById(Destination+'4Star6Nights').querySelector('p').textContent = roundToNearest500(flight6n + 6*star4ppn);           
document.getElementById(Destination+'5Star4Nights').querySelector('p').textContent = roundToNearest500(flight4n + 4*star5ppn);
document.getElementById(Destination+'5Star5Nights').querySelector('p').textContent = roundToNearest500(flight5n + 5*star5ppn);
document.getElementById(Destination+'5Star6Nights').querySelector('p').textContent = roundToNearest500(flight6n + 6*star5ppn);   
         if (Destination == 'DXB') { 
 						document.getElementById('DXBHotels').style.display = 'flex';
            document.getElementById('SINHotels').style.display = 'none';
						document.getElementById('HKTHotels').style.display = 'none';
            document.getElementById('DXB3Star4Nights').style.backgroundColor = '#0474db';
			document.getElementById('DXB3Star5Nights').style.backgroundColor = '#f2f2f2';
			document.getElementById('DXB3Star6Nights').style.backgroundColor = '#f2f2f2';
			document.getElementById('DXB4Star4Nights').style.backgroundColor = '#f2f2f2';
			document.getElementById('DXB4Star5Nights').style.backgroundColor = '#f2f2f2';
			document.getElementById('DXB4Star6Nights').style.backgroundColor = '#f2f2f2';
			document.getElementById('DXB5Star4Nights').style.backgroundColor = '#f2f2f2';
			document.getElementById('DXB5Star5Nights').style.backgroundColor = '#f2f2f2';
			document.getElementById('DXB5Star6Nights').style.backgroundColor = '#f2f2f2';
			selectedpackage = 'DXB3Star4Nights';}
            else if (Destination == 'SIN') {
            document.getElementById('DXBHotels').style.display = 'none';
            document.getElementById('SINHotels').style.display = 'flex';
						document.getElementById('HKTHotels').style.display = 'none';
            document.getElementById('SIN3Star4Nights').style.backgroundColor = '#0474db';
			document.getElementById('SIN3Star5Nights').style.backgroundColor = '#f2f2f2';
			document.getElementById('SIN3Star6Nights').style.backgroundColor = '#f2f2f2';
			document.getElementById('SIN4Star4Nights').style.backgroundColor = '#f2f2f2';
			document.getElementById('SIN4Star5Nights').style.backgroundColor = '#f2f2f2';
			document.getElementById('SIN4Star6Nights').style.backgroundColor = '#f2f2f2';
			document.getElementById('SIN5Star4Nights').style.backgroundColor = '#f2f2f2';
			document.getElementById('SIN5Star5Nights').style.backgroundColor = '#f2f2f2';
			document.getElementById('SIN5Star6Nights').style.backgroundColor = '#f2f2f2';
			selectedpackage = 'SIN3Star4Nights';}
            else if (Destination == 'HKT') { 
            document.getElementById('DXBHotels').style.display = 'none';
            document.getElementById('SINHotels').style.display = 'none';
						document.getElementById('HKTHotels').style.display = 'flex'; 
            document.getElementById('HKT3Star4Nights').style.backgroundColor = '#0474db';
			document.getElementById('HKT3Star5Nights').style.backgroundColor = '#f2f2f2';
			document.getElementById('HKT3Star6Nights').style.backgroundColor = '#f2f2f2';
			document.getElementById('HKT4Star4Nights').style.backgroundColor = '#f2f2f2';
			document.getElementById('HKT4Star5Nights').style.backgroundColor = '#f2f2f2';
			document.getElementById('HKT4Star6Nights').style.backgroundColor = '#f2f2f2';
			document.getElementById('HKT5Star4Nights').style.backgroundColor = '#f2f2f2';
			document.getElementById('HKT5Star5Nights').style.backgroundColor = '#f2f2f2';
			document.getElementById('HKT5Star6Nights').style.backgroundColor = '#f2f2f2';
			selectedpackage = 'HKT3Star4Nights';}
			
document.getElementById('SectionHotelPackageID').style.display = 'block'; 
document.getElementById('SectionFlightPackageID').style.display = 'block'; 
document.getElementById('SectionContinueID').style.display = 'block'; 
document.getElementById('footerps').style.display = 'block'; 

        document.getElementById('SectionLoadingID').style.display = 'none';
       document.getElementById('FlightDetailsDiv4').style.display = 'block';   
        document.getElementById('FlightDetailsDiv5').style.display = 'none';
         document.getElementById('FlightDetailsDiv6').style.display = 'none';
		 
};

/*document.getElementById('ContinuetoCustom').style.backgroundColor = "grey";
document.getElementById('ContinuetoCustom').style.cursor = "not-allowed";*/
    let room_1_adults = 0;
  let room_1_children = 0;
  let room_1_child1age = "";
  let room_1_child2age = "";
  let room_1_child3age = "";
  let room_2_adults = 0;
  let room_2_children = 0;
  let room_2_child1age = "";
  let room_2_child2age = "";
  let room_2_child3age = "";
  let room_3_adults = 0;
  let room_3_children = 0;
  let room_3_child1age = "";
  let room_3_child2age = "";
  let room_3_child3age = "";
  let num_of_rooms = 0;
  let total_adults = sessionStorage.getItem('SS_total_adults') !== null ? sessionStorage.getItem('SS_total_adults') : 2;
  let total_children = sessionStorage.getItem('SS_total_children') !== null ? sessionStorage.getItem('SS_total_children') : 0;
  let total_infant = sessionStorage.getItem('SS_total_infant') !== null ? sessionStorage.getItem('SS_total_infant') : 0;
  let total_YC = sessionStorage.getItem('SS_total_YC') !== null ? sessionStorage.getItem('SS_total_YC') : 0;
  let total_AC = sessionStorage.getItem('SS_total_AC') !== null ? sessionStorage.getItem('SS_total_AC') : 0;;
  let peoplestring =  "Starting_" + total_adults +  "_" + total_children + "_" + total_AC + "_" + total_YC + "_" + total_infant;
  let FromCityVar = sessionStorage.getItem('SS_FromCityVar') !== null ? sessionStorage.getItem('SS_FromCityVar') : parameterValue;
  let ToCityVar = sessionStorage.getItem('SS_ToCityVar') !== null ? sessionStorage.getItem('SS_ToCityVar') : parameterValue2;
  let Departure_date = sessionStorage.getItem('SS_Departure_date') !== null ? sessionStorage.getItem('SS_Departure_date') : formattedDate;
  
DisplayHotels(FromCityVar,ToCityVar,Departure_date,peoplestring,total_adults+total_YC+total_AC,total_infant);

    var DetailsUpdateButton = document.getElementById('DetailsUpdate');
    DetailsUpdateButton.addEventListener('click', function(event) { 
	document.getElementById('SectionHotelPackageID').style.display = 'none'; 
document.getElementById('SectionFlightPackageID').style.display = 'none'; 
document.getElementById('SectionContinueID').style.display = 'none'; 
        document.getElementById('SectionLoadingID').style.display = 'block';
FromCityVar = document.getElementById('Departure').value;
ToCityVar = document.getElementById('Arrival').value;
Departure_date = document.getElementById('Dep_date').value;
   room_1_adults = document.getElementById('Adults-1').value;
   room_1_children = document.getElementById('Children-1').value;
   room_1_child1age = document.getElementById('Child1Age-1').value;
   room_1_child2age = document.getElementById('Child2Age-2').value;
   room_1_child3age = document.getElementById('Child3Age-1').value;
   room_2_adults = document.getElementById('Adults-2').value;
   room_2_children = document.getElementById('Children-2').value;
   room_2_child1age = document.getElementById('Child1Age-2').value;
   room_2_child2age = document.getElementById('Child2Age-2').value;
   room_2_child3age = document.getElementById('Child3Age-2').value;
   room_3_adults = document.getElementById('Adults-3').value;
   room_3_children = document.getElementById('Children-3').value;
   room_3_child1age = document.getElementById('Child1Age-3').value;
   room_3_child2age = document.getElementById('Child2Age-3').value;
   room_3_child3age = document.getElementById('Child3Age-3').value;
   num_of_rooms = Math.min(room_1_adults+ room_1_children,1) +  Math.min(room_2_adults+ room_2_children,1) + Math.min(room_3_adults+ room_3_children,1)
  total_adults = parseInt(room_1_adults) + parseInt(room_2_adults) + parseInt(room_3_adults);
  total_children = parseInt(room_1_children) + parseInt(room_2_children) + parseInt(room_3_children);
    var childrenloop = document.getElementsByClassName('child-age');
	    total_infant = 0; total_YC = 0;  total_AC = 0;
    for (var i = 0; i < childrenloop.length; i++) {
        if (childrenloop[i].value == "Less than 2Y") {
        total_infant = total_infant + 1;}
        else if (childrenloop[i].value == "2Y to 12Y") {
        total_YC = total_YC + 1;}
        else if (childrenloop[i].value == "13Y to 17Y") {
        total_AC = total_AC + 1;}
        }
 peoplestring = "Starting_" + total_adults +  "_" + total_children + "_" + total_AC + "_" + total_YC + "_" + total_infant;
 console.log (peoplestring);
 DisplayHotels(FromCityVar,ToCityVar,Departure_date,peoplestring,total_adults+total_YC+total_AC,total_infant);
});


var NightandPriceDivs = document.getElementsByClassName('nightandprice');

for (var i = 0; i < NightandPriceDivs.length; i++) {
    var element = NightandPriceDivs[i];
    console.log (element.id);
    element.addEventListener('click', function(event) {
        for (var j = 0; j < NightandPriceDivs.length; j++) {
            NightandPriceDivs[j].style.backgroundColor = '#f2f2f2'; // Reset to default color
        }
        var targetDiv = event.target.closest('.nightandprice');
        targetDiv.style.backgroundColor = '#0474db';
        selectedpackage = targetDiv.id;
		var fUnhidenights = selectedpackage[8];
		document.getElementById('FlightDetailsDiv4').style.display = 'none';   
        document.getElementById('FlightDetailsDiv5').style.display = 'none';
        document.getElementById('FlightDetailsDiv6').style.display = 'none';
		document.getElementById('FlightDetailsDiv'+fUnhidenights).style.display = 'block';   
/*document.getElementById('ContinuetoCustom').style.backgroundColor = "#008799";
document.getElementById('ContinuetoCustom').style.cursor = "pointer";
        document.getElementById('DisableContinue').style.display = 'none';
 */
        event.stopPropagation();

});
}



document.getElementById('ContinuetoCustom').addEventListener('click', function() {

          
          var url = 'https://swethas-stunning-site-107786.webflow.io/flight-selector?' +
                'From=' + encodeURIComponent(FromCityVar) +
                '&To=' + encodeURIComponent(ToCityVar) +
                '&Departure_date =' + encodeURIComponent(Departure_date) +
                '&room_1_adults=' + encodeURIComponent(room_1_adults) +
'&room_1_children=' + encodeURIComponent(room_1_children) +
'&room_1_child1age=' + encodeURIComponent(room_1_child1age) +
'&room_1_child2age=' + encodeURIComponent(room_1_child2age) +
'&room_1_child3age=' + encodeURIComponent(room_1_child3age) +
'&room_2_adults=' + encodeURIComponent(room_2_adults) +
'&room_2_children=' + encodeURIComponent(room_2_children) +
'&room_2_child1age=' + encodeURIComponent(room_2_child1age) +
'&room_2_child2age=' + encodeURIComponent(room_2_child2age) +
'&room_2_child3age=' + encodeURIComponent(room_2_child3age) +
'&room_3_adults=' + encodeURIComponent(room_3_adults) +
'&room_3_children=' + encodeURIComponent(room_3_children) +
'&room_3_child1age=' + encodeURIComponent(room_3_child1age) +
'&room_3_child2age=' + encodeURIComponent(room_3_child2age) +
'&room_3_child3age=' + encodeURIComponent(room_3_child3age) +
'&num_of_rooms=' + encodeURIComponent(num_of_rooms)+
'&total_Adults=' + encodeURIComponent(total_adults)+
'&total_YC=' + encodeURIComponent(total_YC)+
'&total_AC=' + encodeURIComponent(total_AC)+
'&total_infant=' + encodeURIComponent(total_infant)+
'&total_children=' + encodeURIComponent(total_children)+
'&selectedpackage=' + encodeURIComponent(selectedpackage);
         window.location.href = url;      
sessionStorage.setItem('SS_FromCityVar', FromCityVar);
sessionStorage.setItem('SS_ToCityVar', ToCityVar);
sessionStorage.setItem('SS_Departure_date', Departure_date);
sessionStorage.setItem('SS_room_1_adults', room_1_adults);
sessionStorage.setItem('SS_room_1_children', room_1_children);
sessionStorage.setItem('SS_room_1_child1age', room_1_child1age);
sessionStorage.setItem('SS_room_1_child2age', room_1_child2age);
sessionStorage.setItem('SS_room_1_child3age', room_1_child3age);
sessionStorage.setItem('SS_room_2_adults', room_2_adults);
sessionStorage.setItem('SS_room_2_children', room_2_children);
sessionStorage.setItem('SS_room_2_child1age', room_2_child1age);
sessionStorage.setItem('SS_room_2_child2age', room_2_child2age);
sessionStorage.setItem('SS_room_2_child3age', room_2_child3age);
sessionStorage.setItem('SS_room_3_adults', room_3_adults);
sessionStorage.setItem('SS_room_3_children', room_3_children);
sessionStorage.setItem('SS_room_3_child1age', room_3_child1age);
sessionStorage.setItem('SS_room_3_child2age', room_3_child2age);
sessionStorage.setItem('SS_room_3_child3age', room_3_child3age);
sessionStorage.setItem('SS_num_of_rooms', num_of_rooms);
sessionStorage.setItem('SS_selectedpackage', selectedpackage);
sessionStorage.setItem('SS_total_adults', total_adults);
sessionStorage.setItem('SS_total_YC', total_YC);
sessionStorage.setItem('SS_total_AC', total_AC);
sessionStorage.setItem('SS_total_infant', total_infant);
sessionStorage.setItem('SS_total_children', total_children);
var selectedpackagediv = document.getElementById(selectedpackage);
var packagevalue = selectedpackagediv.querySelector("p").textContent;
console.log(packagevalue);
sessionStorage.setItem('SS_packagevalue', packagevalue); 
        });
    });






    
    
    

	