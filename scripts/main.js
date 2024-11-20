const citySelect = document.querySelector("#citySelect");
const tbody = document.querySelector("tbody");
const table = document.querySelector("#table");
const cityName = document.querySelector("#cityName");
const row = document.querySelector("#row");

function loadCities() {
  let i = 0;
  for (city of cities) {
    const option = new Option(city.name, i++);
    citySelect.appendChild(option);
  }
}

async function getForeCast(lat, long) {
    return fetch(`https://api.weather.gov/points/${lat},${long}`)
    .then((response) => response.json())
    .then((data) => fetch(data.properties.forecast))
    .then((response) => response.json())
    .then((data) => data.properties.periods)
    .catch((error) => {
      console.log("error")
      return error
    })
    
  // api1
//   const url = `https://api.weather.gov/points/${lat},${long}`;
//   const response = await fetch(url);
//   const data = await response.json();

  //api2
//   const url2 = await data.properties.forecast;
//   const response2 = await fetch(url2);
//   const data2 = await response2.json();

//   return data2.properties.periods;
}

async function loadTable(city) {
  cityName.textContent = cities[citySelect.value].name;
  table.style.display = "block";
  tbody.textContent = "";

  const periods = await getForeCast(city.latitude, city.longitude);
  const rowsArray = periods.map((period) => {
    const newRow = row.cloneNode(true);

    newRow.querySelector("img").src = period.icon;
    newRow.querySelectorAll(".info").forEach((cell) => {
      cell.id == "temperature"
        ? (cell.textContent = `${period[cell.id]}  °${period.temperatureUnit}` || "N/A")
        : (cell.textContent = period[cell.id] || "N/A");
    });
    return newRow;
  });

  tbody.append(...rowsArray);

  // for(const period of periods){
  //     const row = document.createElement("tr")

  //     const icon = document.createElement("td")
  //     const time = document.createElement("td")
  //     const temp = document.createElement("td")
  //     const winds = document.createElement("td")
  //     const direction = document.createElement("td")
  //     const forecast = document.createElement("td")
  //     const image = document.createElement("img")

  //     image.src = period.icon
  //     image.style.height = "60px"
  //     icon.appendChild(image)

  //     time.textContent = period.name || "N/A"
  //     temp.textContent = `${period.temperature} ${period.temperatureUnit}` || "N/A"
  //     winds.textContent = period.windSpeed || "N/A"
  //     direction.textContent = period.windDirection || "N/A"
  //     forecast.textContent = period.shortForecast || "N/A"

  //     row.append( icon, time, temp, winds, direction,  forecast)
  //     tbody.appendChild(row)
  //     console.log(period.icon)
  // }
}

loadCities();

citySelect.addEventListener("change", (e) => {
  e.target.value ? loadTable(cities[e.target.value]) : (table.style.display = "none");
});
