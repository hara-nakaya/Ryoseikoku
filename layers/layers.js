var wms_layers = [];

var format_1868japan_0 = new ol.format.GeoJSON();
var features_1868japan_0 = format_1868japan_0.readFeatures(json_1868japan_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1868japan_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1868japan_0.addFeatures(features_1868japan_0);
var lyr_1868japan_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_1868japan_0, 
                style: style_1868japan_0,
                interactive: true,
                title: '<img src="styles/legend/1868japan_0.png" /> 1868japan'
            });
var format_2023Japan22023japan2_1 = new ol.format.GeoJSON();
var features_2023Japan22023japan2_1 = format_2023Japan22023japan2_1.readFeatures(json_2023Japan22023japan2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2023Japan22023japan2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2023Japan22023japan2_1.addFeatures(features_2023Japan22023japan2_1);
var lyr_2023Japan22023japan2_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_2023Japan22023japan2_1, 
                style: style_2023Japan22023japan2_1,
                interactive: true,
                title: '<img src="styles/legend/2023Japan22023japan2_1.png" /> 2023Japan2 — 2023japan2'
            });

lyr_1868japan_0.setVisible(true);lyr_2023Japan22023japan2_1.setVisible(true);
var layersList = [lyr_1868japan_0,lyr_2023Japan22023japan2_1];
lyr_1868japan_0.set('fieldAliases', {'国名': '国名', });
lyr_2023Japan22023japan2_1.set('fieldAliases', {'KEN': 'KEN', });
lyr_1868japan_0.set('fieldImages', {'国名': '', });
lyr_2023Japan22023japan2_1.set('fieldImages', {'KEN': 'TextEdit', });
lyr_1868japan_0.set('fieldLabels', {'国名': 'no label', });
lyr_2023Japan22023japan2_1.set('fieldLabels', {'KEN': 'no label', });
lyr_2023Japan22023japan2_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});