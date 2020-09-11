const mapboxgl = require('mapbox-gl');
const carto = require('@carto/carto-vl');
const axios = require('axios')


    
    
const map = new mapboxgl.Map({
    container:'map',
    style:carto.basemaps.voyager,
    zoom:8,
    center:[35.55,-14.55]
 });
 axios({
   url: 'http://localhost:4000/api/local/recent',
   method: 'get'
 }).then(respo=>{
   console.log(respo.data)
   const Source = new carto.source.GeoJSON(respo.data);
   const Layer = new carto.Layer('hosps', Source, new carto.Viz());
   Layer.addTo(map);
 })
 

