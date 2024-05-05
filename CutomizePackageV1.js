document.addEventListener("DOMContentLoaded", function() {



const fetchMealData = async (searchValue) => {
    let offset = 0;
    let breakfast = null;
	let halfboard = null;
	let fullboard = null;
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
                    breakfast = item.breakfast; 
                    halfboard = item.halfboard; 
                    fullboard = item.fullboard; 
                    break;
                }
            }

            
            if (breakfast !== null) {
                break;
                return [breakfast, halfboard, fullboard];
            }

            offset += 100;
        } catch (error) {
            console.error('Error:', error);
            break;
        }
    }
                return [breakfast, halfboard, fullboard];
};
  async function updatemealprices(stringID) {
  var mealprices = await fetchMealData(stringID);
    document.getElementById("MealNonePrice").textContent = (0*fUnhidenights).toLocaleString('en-IN', {style: 'currency',currency: 'INR'}).replace(/\.\d+/, '');
  document.getElementById("MealBreakfastPrice").textContent = (mealprices[0]*fUnhidenights).toLocaleString('en-IN', {style: 'currency',currency: 'INR'}).replace(/\.\d+/, '');
  document.getElementById("MealHalfBoardPrice").textContent = (mealprices[1]*fUnhidenights).toLocaleString('en-IN', {style: 'currency',currency: 'INR'}).replace(/\.\d+/, '');
  document.getElementById("MealFullBoardPrice").textContent = (mealprices[2]*fUnhidenights).toLocaleString('en-IN', {style: 'currency',currency: 'INR'}).replace(/\.\d+/, ''); 
 /* document.getElementById("MealNoneTotalPrice").textContent = (packagevalue2 + 0*fUnhidenights).toLocaleString('en-IN', {style: 'currency',currency: 'INR'}).replace(/\.\d+/, '');
  document.getElementById("MealBreakfastTotalPrice").textContent = (packagevalue2 + mealprices[0]*fUnhidenights).toLocaleString('en-IN', {style: 'currency',currency: 'INR'}).replace(/\.\d+/, '');
  document.getElementById("MealHalfBoardTotalPrice").textContent = (packagevalue2 + mealprices[1]*fUnhidenights).toLocaleString('en-IN', {style: 'currency',currency: 'INR'}).replace(/\.\d+/, '');
  document.getElementById("MealFullBoardTotalPrice").textContent = (packagevalue2 + mealprices[2]*fUnhidenights).toLocaleString('en-IN', {style: 'currency',currency: 'INR'}).replace(/\.\d+/, ''); */
        document.getElementById('SectionLoadingID2').style.display = 'none';
       document.getElementById('MealsSection').style.display = 'block';  
document.getElementById('SectionContinueID2').style.display = 'block'; 	   
  }
  
  
  function roundToNearest500(number) {
    return (Math.round(number / 500) * 500).toLocaleString('en-IN', {style: 'currency',currency: 'INR'}).replace(/\.\d+/, '');
}
const convertSecondsToHoursAndMinutes = (seconds) => `${Math.floor(seconds / 3600)}h ${Math.round((seconds % 3600) / 60)}m`;

async function updateflightoptions(fly_from, fly_to, date_from, fnights, adults, infants) {
    const aurl = "https://tequila-api.kiwi.com/v2/search";
const result = new Date(date_from);
console.log(result.getDate() + fnights);
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
        limit: 3,
        sort: "price",
        max_stopovers: 2
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
        const flightOffer1 = data.data[1];
		const flightOffer2 = data.data[2];
		console.log(data.data[1]);
		console.log(data.data[2]);
//		const flightOffer3 = data.data[3];
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
const outdate1 = new Date(flightOffer1.route[0].local_departure);
const indate1 = new Date(flightOffer1.route[1].local_departure);
const outdate2 = new Date(flightOffer2.route[0].local_departure);
const indate2 = new Date(flightOffer2.route[1].local_departure);
let prevflightprice = 0;
if (fnights == 4) {prevflightprice = sessionStorage.getItem('SS_flight4n')}
else if (fnights == 5) {prevflightprice = sessionStorage.getItem('SS_flight5n')}
else if (fnights == 6) {prevflightprice = sessionStorage.getItem('SS_flight6n')}
console.log(prevflightprice);

document.getElementById('CPOutboundDateDisplayed1').textContent = `${outdate1.getUTCDate()} ${new Intl.DateTimeFormat('en-GB', { month: 'short' }).format(outdate1)} ${outdate1.getUTCFullYear()}`;
document.getElementById('CPInboundDateDisplayed1').textContent = `${indate1.getUTCDate()} ${new Intl.DateTimeFormat('en-GB', { month: 'short' }).format(indate1)} ${indate1.getUTCFullYear()}`;
document.getElementById('CPOutboundDateDepTime1').textContent =  new Date(flightOffer1.route[0].local_departure).toISOString().slice(11, 16);
document.getElementById('CPOutboundDepCity1').textContent = flightOffer1.route[0].cityFrom + " ("+ flightOffer1.route[0].flyFrom +")";
var diffdays1 = " (+" + Math.ceil((new Date(flightOffer1.route[0].local_arrival).setUTCHours(0,0,0,0) - new Date(flightOffer1.route[0].local_departure).setUTCHours(0,0,0,0)) / (1000 * 60 * 60 * 24)) + " day(s))";
document.getElementById('CPOutboundDateArrTime1').textContent = new Date(flightOffer1.route[0].local_arrival).toISOString().slice(11, 16) + (diffdays1 === " (+0 day(s))" ? "" : diffdays1);
document.getElementById('CPOutboundArrCity1').textContent = flightOffer1.route[0].cityTo + " ("+ flightOffer1.route[0].flyTo +")";
document.getElementById('CPInboundDateDepTime1').textContent =  new Date(flightOffer1.route[1].local_departure).toISOString().slice(11, 16);
document.getElementById('CPInboundDepCity1').textContent = flightOffer1.route[1].cityFrom + " ("+ flightOffer1.route[1].flyFrom +")";
var diffdays2 = " (+" +  Math.ceil((new Date(flightOffer1.route[1].local_arrival).setUTCHours(0,0,0,0) - new Date(flightOffer1.route[1].local_departure).setUTCHours(0,0,0,0)) / (1000 * 60 * 60 * 24)) + " day(s))";
document.getElementById('CPInboundDateArrTime1').textContent = new Date(flightOffer1.route[1].local_arrival).toISOString().slice(11, 16) + (diffdays2 === " (+0 day(s))" ? "" : diffdays2);
document.getElementById('CPInboundArrCity1').textContent = flightOffer1.route[1].cityTo + " ("+ flightOffer1.route[1].flyTo +")";
document.getElementById('CPOutboundDuration1').textContent = convertSecondsToHoursAndMinutes(flightOffer1.duration.departure);
document.getElementById('CPInboundDuration1').textContent = convertSecondsToHoursAndMinutes(flightOffer1.duration.return);
document.getElementById('CPOutboundFlightID1').textContent = flightOffer1.route[0].airline + flightOffer1.route[0].flight_no;
document.getElementById('CPInboundFlightID1').textContent = flightOffer1.route[1].airline + flightOffer1.route[1].flight_no; 
document.getElementById('CPOutboundCarrier1').textContent = airlineCodes[flightOffer1.route[0].airline];
document.getElementById('CPInboundCarrier1').textContent = airlineCodes[flightOffer1.route[1].airline];
document.getElementById('CPFlightPrice1').textContent = parseInt(flightOffer1.price) - parseInt(prevflightprice);
console.log(parseInt(flightOffer1.price));
	   
document.getElementById('CPOutboundDateDisplayed2').textContent =`${outdate2.getUTCDate()} ${new Intl.DateTimeFormat('en-GB', { month: 'short' }).format(outdate2)} ${outdate2.getUTCFullYear()}`;
document.getElementById('CPInboundDateDisplayed2').textContent = `${indate2.getUTCDate()} ${new Intl.DateTimeFormat('en-GB', { month: 'short' }).format(indate2)} ${indate2.getUTCFullYear()}`;
document.getElementById('CPOutboundDateDepTime2').textContent =  new Date(flightOffer2.route[0].local_departure).toISOString().slice(11, 16);
document.getElementById('CPOutboundDepCity2').textContent = flightOffer2.route[0].cityFrom + " ("+ flightOffer2.route[0].flyFrom +")";
var diffdays1 = " (+" + Math.ceil((new Date(flightOffer2.route[0].local_arrival).setUTCHours(0,0,0,0) - new Date(flightOffer2.route[0].local_departure).setUTCHours(0,0,0,0)) / (1000 * 60 * 60 * 24)) + " day(s))";
document.getElementById('CPOutboundDateArrTime2').textContent = new Date(flightOffer2.route[0].local_arrival).toISOString().slice(11, 16) + (diffdays1 === " (+0 day(s))" ? "" : diffdays1);
document.getElementById('CPOutboundArrCity2').textContent = flightOffer2.route[0].cityTo + " ("+ flightOffer2.route[0].flyTo +")";
document.getElementById('CPInboundDateDepTime2').textContent =  new Date(flightOffer2.route[1].local_departure).toISOString().slice(11, 16);
document.getElementById('CPInboundDepCity2').textContent = flightOffer2.route[1].cityFrom + " ("+ flightOffer2.route[1].flyFrom +")";
var diffdays2 = " (+" +  Math.ceil((new Date(flightOffer2.route[1].local_arrival).setUTCHours(0,0,0,0) - new Date(flightOffer2.route[1].local_departure).setUTCHours(0,0,0,0)) / (1000 * 60 * 60 * 24)) + " day(s))";
document.getElementById('CPInboundDateArrTime2').textContent = new Date(flightOffer2.route[1].local_arrival).toISOString().slice(11, 16) + (diffdays2 === " (+0 day(s))" ? "" : diffdays2);
document.getElementById('CPInboundArrCity2').textContent = flightOffer2.route[1].cityTo + " ("+ flightOffer2.route[1].flyTo +")";
document.getElementById('CPOutboundDuration2').textContent = convertSecondsToHoursAndMinutes(flightOffer2.duration.departure);
document.getElementById('CPInboundDuration2').textContent = convertSecondsToHoursAndMinutes(flightOffer2.duration.return);
document.getElementById('CPOutboundFlightID2').textContent = flightOffer2.route[0].airline + flightOffer2.route[0].flight_no;
document.getElementById('CPInboundFlightID2').textContent = flightOffer2.route[1].airline + flightOffer2.route[1].flight_no; 
document.getElementById('CPOutboundCarrier2').textContent = airlineCodes[flightOffer2.route[0].airline];
document.getElementById('CPInboundCarrier2').textContent = airlineCodes[flightOffer2.route[1].airline];
document.getElementById('CPFlightPrice2').textContent = parseInt(flightOffer2.price) - parseInt(prevflightprice);
console.log(parseInt(flightOffer2.price));
 
        } else {
            throw new Error("No flight offers found");
        }
    } catch (error) {
        console.error("Error:", error);
        throw error; 
    }
}
 
  

  // Retrieve the value from session storage

  var VMealsExpand = document.getElementById("MealsExpand");
  var VMealsCollapse = document.getElementById("MealsCollapse");
  var VMealsDivID = document.getElementById("MealsDivID");
  VMealsDivID.style.display = "block";
  VMealsExpand.style.display = "none";
  var packagevalue2 = parseFloat(sessionStorage.getItem('SS_packagevalue').replace(/[^\d.]/g, ''));
  var selectedpackage = sessionStorage.getItem('SS_selectedpackage'); 
  		var fUnhidenights = selectedpackage[8];
		var fUnhidestar = selectedpackage[3];
  var Destination = sessionStorage.getItem('SS_ToCityVar');
  var CP_From = sessionStorage.getItem('SS_FromCityVar');
    var CP_DepDate = sessionStorage.getItem('SS_Departure_date');
	var CP_FlightAdults = parseInt(sessionStorage.getItem('SS_total_adults')) + parseInt(sessionStorage.getItem('SS_total_YC')) + parseInt(sessionStorage.getItem('SS_total_AC'));
  var CP_FlightInfants = sessionStorage.getItem('SS_total_infant');
  var peopledetails = "Starting_" + sessionStorage.getItem('SS_total_adults') +  "_" + sessionStorage.getItem('SS_total_children') + "_" + sessionStorage.getItem('SS_total_AC') + "_" + sessionStorage.getItem('SS_total_YC') + "_" + sessionStorage.getItem('SS_total_infant');
  console.log (packagevalue2);
  

  updatemealprices(Destination+'_'+fUnhidestar+'_'+peopledetails);
  updateflightoptions(CP_From, Destination, CP_DepDate, parseInt(fUnhidenights), CP_FlightAdults, CP_FlightInfants);
  
  var VRoomsExpand = document.getElementById("RoomsExpand");
  var VFlightsExpand = document.getElementById("FlightsExpand");

  var VRoomsCollapse = document.getElementById("RoomsCollapse");
  var VFlightsCollapse = document.getElementById("FlightsCollapse");

  var VRoomsDivID = document.getElementById("RoomsDivID");
  var VFlightsDivID = document.getElementById("FlightsDivID");
 

  VRoomsDivID.style.display = "none";  
  VFlightsDivID.style.display = "none";   

  VRoomsCollapse.style.display = "none";
  VFlightsCollapse.style.display = "none";
  
  VMealsExpand.addEventListener("click", function() {
	VMealsExpand.style.display = "none";
  VMealsCollapse.style.display = "block";  
  VMealsDivID.style.display = "block";    
  });
  VMealsCollapse.addEventListener("click", function() {
	VMealsExpand.style.display = "block";
  VMealsCollapse.style.display = "none";  
  VMealsDivID.style.display = "none";    
  });
  VRoomsExpand.addEventListener("click", function() {
	VRoomsExpand.style.display = "none";
  VRoomsCollapse.style.display = "block";  
  VRoomsDivID.style.display = "block";    
  });
	VRoomsCollapse.addEventListener("click", function() {
	VRoomsExpand.style.display = "block";
  VRoomsCollapse.style.display = "none";  
  VRoomsDivID.style.display = "none";    
  });
  VFlightsExpand.addEventListener("click", function() {
	VFlightsExpand.style.display = "none";
  VFlightsCollapse.style.display = "block";  
  VFlightsDivID.style.display = "block";    
  });
	VFlightsCollapse.addEventListener("click", function() {
	VFlightsExpand.style.display = "block";
  VFlightsCollapse.style.display = "none";  
  VFlightsDivID.style.display = "none";    
  });


let selectedmeal = "";

var MealSelect = document.getElementsByClassName('mealselect');

console.log (MealSelect.length);

for (var i = 0; i < MealSelect.length; i++) {
    var element = MealSelect[i];
    console.log (element.id);
    element.addEventListener('click', function(event) {
		 event.preventDefault();
        for (var j = 0; j < MealSelect.length; j++) {
            MealSelect[j].style.backgroundColor = '#f2f2f2'; // Reset to default color
			MealSelect[j].style.color = 'black';
        }
        var targetDiv = event.target.closest('.mealselect');
        targetDiv.style.backgroundColor = '#0474db';
		 targetDiv.style.color = 'white';
		       selectedmeal = targetDiv.id;
        event.stopPropagation();
});
}
let selectedroom1 = "";

var Room1Select = document.getElementsByClassName('room1select');

console.log (Room1Select.length);

for (var i = 0; i < Room1Select.length; i++) {
    var element = Room1Select[i];
    console.log (element.id);
    element.addEventListener('click', function(event) {
		 event.preventDefault();
        for (var j = 0; j < Room1Select.length; j++) {
            Room1Select[j].style.backgroundColor = '#f2f2f2'; // Reset to default color
			Room1Select[j].style.color = 'black';
        }
        var targetDiv = event.target.closest('.room1select');
        targetDiv.style.backgroundColor = '#0474db';
		 targetDiv.style.color = 'white';
		       selectedroom1 = targetDiv.id;
        event.stopPropagation();
});
}

let selectedflight = "";

var FlightSelect = document.getElementsByClassName('flightselect');

console.log (FlightSelect.length);

for (var i = 0; i < FlightSelect.length; i++) {
    var element = FlightSelect[i];
    console.log (element.id);
    element.addEventListener('click', function(event) {
		 event.preventDefault();
        for (var j = 0; j < FlightSelect.length; j++) {
            FlightSelect[j].style.backgroundColor = '#f2f2f2'; // Reset to default color
			FlightSelect[j].style.color = 'black';
        }
        var targetDiv = event.target.closest('.flightselect');
        targetDiv.style.backgroundColor = '#0474db';
		 targetDiv.style.color = 'white';
		       selectedflight = targetDiv.id;
        event.stopPropagation();
});
}

document.getElementById('ContinuetoPassengerDetails').addEventListener('click', function() {

var queryParams = window.location.search;
var url = 'https://swethas-stunning-site-107786.webflow.io/passenger-details' + queryParams + '&selectedmeal=' + encodeURIComponent(selectedmeal);



         window.location.href = url;      
sessionStorage.setItem('SS_selectedmeal', selectedmeal);
sessionStorage.setItem('SS_selectedroom1', selectedroom1);
sessionStorage.setItem('SS_selectedflight', selectedflight);
        });
    });

