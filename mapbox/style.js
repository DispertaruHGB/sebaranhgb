
var styleJSON = {
    "version": 8,
    "name": "qgis2web export",
    "pitch": 0,
    "light": {
        "intensity": 0.2
    },
    "sources": {
        "GoogleSatelliteHybrid_0": {
            "type": "raster",
            "tiles": ["https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"],
            "tileSize": 256
        },
        "GABUNGANHGB20202024Sheet1_1": {
            "type": "geojson",
            "data": json_GABUNGANHGB20202024Sheet1_1
        }
                    },
    "sprite": "",
    "glyphs": "https://glfonts.lukasmartinelli.ch/fonts/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "layout": {},
            "paint": {
                "background-color": "#ffffff"
            }
        },
        {
            "id": "lyr_GoogleSatelliteHybrid_0_0",
            "type": "raster",
            "source": "GoogleSatelliteHybrid_0"
        },
        {
            "id": "lyr_GABUNGANHGB20202024Sheet1_1_0",
            "type": "circle",
            "source": "GABUNGANHGB20202024Sheet1_1",
            "layout": {},
            "paint": {'circle-radius': ['case', ['==', ['get', 'Pengelompokkan'], 'BUKAN SG'], ['/', 7.142857142857142, 2], ['==', ['get', 'Pengelompokkan'], 'PAG'], ['/', 7.142857142857142, 2], ['==', ['get', 'Pengelompokkan'], 'SG'], ['/', 7.142857142857142, 2], 0], 'circle-color': ['case', ['==', ['get', 'Pengelompokkan'], 'BUKAN SG'], '#61ff0c', ['==', ['get', 'Pengelompokkan'], 'PAG'], '#d23bff', ['==', ['get', 'Pengelompokkan'], 'SG'], '#ff0000', '#ffffff'], 'circle-opacity': ['case', ['==', ['get', 'Pengelompokkan'], 'BUKAN SG'], 1.0, ['==', ['get', 'Pengelompokkan'], 'PAG'], 1.0, ['==', ['get', 'Pengelompokkan'], 'SG'], 1.0, 0], 'circle-stroke-width': ['case', ['==', ['get', 'Pengelompokkan'], 'BUKAN SG'], 1, ['==', ['get', 'Pengelompokkan'], 'PAG'], 1, ['==', ['get', 'Pengelompokkan'], 'SG'], 1, 0], 'circle-stroke-color': ['case', ['==', ['get', 'Pengelompokkan'], 'BUKAN SG'], '#232323', ['==', ['get', 'Pengelompokkan'], 'PAG'], '#232323', ['==', ['get', 'Pengelompokkan'], 'SG'], '#232323', '#000000']}
        }
],
}