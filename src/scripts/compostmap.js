import images from '../../assets/*.svg';
console.log(images)
// Setting up initial map view
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBhcmsyMDIwIiwiYSI6ImNreWYxaHJmaTA4aXkyb25hNm5hOW03d3EifQ.B4hdg3BWPvgkXvd802O2Ng';

var ceramic = "ceramic-01"
var togo = "compostable-01"
var bin = "compost_bin-01"
var conveyor = "conveyor-01"
var eco = "eco-tray-01"
var paper = "paper-01"
var plastic = "plastic-01"
var platter = "platters-01"
var recycle = "recycling_bin-01"
var trash = "trash_bin-01"


const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/apark2020/cl2nufawr001y14od9j9gawm7',
  center: [-73.961588, 40.807885],
  zoom: 15.98
});

/* 
Add an event listener that runs
when a user clicks on the map element.
*/

map.on('click', (event) => {
  console.log("click");
  // If the user clicked on one of your markers, get its information.
  const features = map.queryRenderedFeatures(event.point, {
    layers: ['dininghalllocations']
  });
  if (!features.length) {
    return;
  }
  const feature = features[0];

  const popup = new mapboxgl.Popup({ offset: [0, -15] })
    .setLngLat(feature.geometry.coordinates)
    .setHTML(
      `
              <div class=throw>
              <p>Disposal Options</p>
              <img class=icons id=trash src='${images[trash]}'></img>
              <img class=icons id=recycle src='${images[recycle]}'></img>
              <img class=icons id=bin src='${images[bin]}'></img>
              <img class=icons id=platter src='${images[platter]}'></img>
              <img class=icons id=conveyor src='${images[conveyor]}'></img>
                </div>
              <div class=plate>
              <p>Container Options<p>
              <img class=icons id=ceramic src='${images[ceramic]}'></img>
              <img class=icons id=eco src='${images[eco]}'></img>
              <img class=icons id=togo src='${images[togo]}'></img>
              <img class=icons id=paper src='${images[paper]}'></img>
              <img class=icons id=plastic src='${images[plastic]}'></img>
                </div>`

    )
    .addTo(map);
  if (feature.properties["Ceramic"] === "N") {
    document.querySelector('#ceramic').style.opacity = '30%';
  }
  else {
    document.querySelector('#ceramic').style.opacity = '100%';
  }
  if (feature.properties["Compost"] === "N") {
    document.querySelector('#bin').style.opacity = '30%';
  }
  else {
    document.querySelector('#bin').style.opacity = '100%';
  }
  if (feature.properties["Conveyor Belt"] === "N") {
    document.querySelector('#conveyor').style.opacity = '30%';
  }
  else {
    document.querySelector('#conveyor').style.opacity = '100%';
  }
  if (feature.properties["Eco-Tray"] === "N") {
    document.querySelector('#eco').style.opacity = '30%';
  }
  else {
    document.querySelector('#eco').style.opacity = '100%';
  }
  if (feature.properties["Paper trays"] === "N") {
    document.querySelector('#paper').style.opacity = '30%';
  }
  else {
    document.querySelector('#paper').style.opacity = '100%';
  }
  if (feature.properties["Plastic cups/utensils"] === "N") {
    document.querySelector('#plastic').style.opacity = '30%';
  }
  else {
    document.querySelector('#plastic').style.opacity = '100%';
  }
  if (feature.properties["Recycling/mixed paper"] === "N") {
    document.querySelector('#recycle').style.opacity = '30%';
  }
  else {
    document.querySelector('#recycle').style.opacity = '100%';
  }
  if (feature.properties["Trash"] === "N") {
    document.querySelector('#trash').style.opacity = '30%';
  }
  else {
    document.querySelector('#trash').style.opacity = '100%';
  }
  if (feature.properties["Server"] === "N") {
    document.querySelector('#platter').style.opacity = '30%';
  }
  else {
    document.querySelector('#platter').style.opacity = '100%';
  }
  if (feature.properties["To-go tray"] === "N") {
    document.querySelector('#togo').style.opacity = '30%';
  }
  else {
    document.querySelector('#togo').style.opacity = '100%';
  }

});
map.on('mouseenter', 'dininghalllocations', () => {
  map.getCanvas().style.cursor = 'pointer'
});
map.on('mouseleave', 'dininghalllocations', () => {
  map.getCanvas().style.cursor = ''
});
map.scrollZoom.disable();