$( document ).ready( () => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiZmxhcmFuZGEiLCJhIjoiY2loaGh1NGRqMG1oYXZxa2xudGtmenBldSJ9.Fbzq8-K7HbTAIb_oFCdh1w';

    let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/flaranda/cijsj80e80092bfm2q864opbl',
        center: [-4.7832689, 37.8922254],
        maxZoom: 15,
        minZoom: 15,
        zoom: 15,
        interactive: false
    });

    $( '.mapboxgl-ctrl-attrib' ).remove();
});
