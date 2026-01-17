function updateRomeTime() {
  //rome
  let romeElement = document.querySelector("#rome");
  let romeDate = romeElement.querySelector(".date");
  let romeTime = romeElement.querySelector(".time");
  let romeMoment = moment().tz("Europe/Rome");

  romeDate.innerHTML = romeMoment.format("MMMM Do YYYY ");
  romeTime.innerHTML = romeMoment.format("h:mm:ss[<small>]A[</small>]");
}

function updateLisbonTime() {
  //Lisbon
  let lisbonElement = document.querySelector("#lisbon");
  let lisbonDate = lisbonElement.querySelector(".date");
  let lisbonTime = lisbonElement.querySelector(".time");
  let lisbonMoment = moment().tz("Europe/Lisbon");

  lisbonDate.innerHTML = lisbonMoment.format("MMMM Do YYYY ");
  lisbonTime.innerHTML = lisbonMoment.format("h:mm:ss[<small>]A[</small>]");
}

function updateBrisbaneTime() {
  //brisbane
  let brisbaneElement = document.querySelector("#brisbane");
  let brisbaneDate = brisbaneElement.querySelector(".date");
  let brisbaneTime = brisbaneElement.querySelector(".time");
  let brisbaneMoment = moment().tz("Australia/Brisbane");

  brisbaneDate.innerHTML = brisbaneMoment.format("MMMM Do YYYY ");
  brisbaneTime.innerHTML = brisbaneMoment.format("h:mm:ss[<small>]A[</small>]");
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityDisplayed = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
          <div>
            <h2>${cityDisplayed}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "hh:mm:ss"
          )}<small>${cityTime.format("A")}</small></div>
        </div>
        <a href="index.html"><small>Back to homepage</small></a>`;
}
setInterval(() => {
  updateRomeTime();
  updateLisbonTime();
  updateBrisbaneTime();
}, 1000);

let citySelection = document.querySelector("#city");

citySelection.addEventListener("change", updateCity);
