import fetch from 'node-fetch'

const apiKey = 'AkoUyk_rkS7vfSNFXtRzY94iIS37S71WC_bT51SMNrM-G8oO0k3Y4V6pYHNQSs2u';
const address = 'RUA MANOEL IZIDIO  IPATINGA MG';

fetch(`http://dev.virtualearth.net/REST/v1/Locations?query=${address}&key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    // const coordinates = data.resourceSets[0].resources[0].geocodePoints[0].coordinates;
    // const latitude = coordinates[0];
    // const longitude = coordinates[1];
    // console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    console.log(data.resourceSets[0].resources[0].address)
    console.log('-------coordenadas ---------------')
    console.log(data.resourceSets[0].resources[0].geocodePoints[0].coordinates)
  })
  .catch(error => console.error(error));
