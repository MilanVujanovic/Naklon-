var wms_layers = [];


        var lyr_OpenStreetMapmonochrome_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap monochrome',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });
var lyr_naklon_buf300_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "naklon_buf300",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/naklon_buf300_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1491678.586474, 5688153.566311, 1840991.518695, 5922946.454397]
                            })
                        });
var format_Buffered_2 = new ol.format.GeoJSON();
var features_Buffered_2 = format_Buffered_2.readFeatures(json_Buffered_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Buffered_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Buffered_2.addFeatures(features_Buffered_2);
var lyr_Buffered_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Buffered_2, 
                style: style_Buffered_2,
                interactive: true,
                title: '<img src="styles/legend/Buffered_2.png" /> Buffered'
            });
var lyr_Clippedmask_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Clipped (mask)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Clippedmask_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1505839.379341, 5688257.927307, 1832381.117387, 5891646.148660]
                            })
                        });
var lyr_naklon_buf300_2_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "naklon_buf300_2",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/naklon_buf300_2_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [1505839.379341, 5688257.927307, 1832381.117387, 5891646.148660]
                            })
                        });

lyr_OpenStreetMapmonochrome_0.setVisible(true);lyr_naklon_buf300_1.setVisible(true);lyr_Buffered_2.setVisible(true);lyr_Clippedmask_3.setVisible(true);lyr_naklon_buf300_2_4.setVisible(true);
var layersList = [lyr_OpenStreetMapmonochrome_0,lyr_naklon_buf300_1,lyr_Buffered_2,lyr_Clippedmask_3,lyr_naklon_buf300_2_4];
lyr_Buffered_2.set('fieldAliases', {'TIP_SPR': 'TIP_SPR', 'ID': 'ID', 'ID_UPR': 'ID_UPR', 'SIF_VRSTE': 'SIF_VRSTE', 'CC_KLAS': 'CC_KLAS', 'TOPO': 'TOPO', 'NAT_YX': 'NAT_YX', 'Z': 'Z', 'NAT_Z': 'NAT_Z', 'GJI': 'GJI', 'VIR': 'VIR', 'DAT_VIR': 'DAT_VIR', 'MAT_ST': 'MAT_ST', 'MAT_GJS': 'MAT_GJS', 'ID_EL': 'ID_EL', 'DAT_EL': 'DAT_EL', 'DIM_YX': 'DIM_YX', 'DIM_Z': 'DIM_Z', 'OPU': 'OPU', 'ATR1': 'ATR1', 'ATR2': 'ATR2', 'ATR3': 'ATR3', 'ATR4': 'ATR4', 'ATR5': 'ATR5', 'OPIS': 'OPIS', });
lyr_Buffered_2.set('fieldImages', {'TIP_SPR': 'TextEdit', 'ID': 'TextEdit', 'ID_UPR': 'TextEdit', 'SIF_VRSTE': 'Range', 'CC_KLAS': 'Range', 'TOPO': 'Range', 'NAT_YX': 'Range', 'Z': 'TextEdit', 'NAT_Z': 'Range', 'GJI': 'Range', 'VIR': 'Range', 'DAT_VIR': 'TextEdit', 'MAT_ST': 'Range', 'MAT_GJS': 'Range', 'ID_EL': 'TextEdit', 'DAT_EL': 'TextEdit', 'DIM_YX': 'TextEdit', 'DIM_Z': 'TextEdit', 'OPU': 'Range', 'ATR1': 'Range', 'ATR2': 'Range', 'ATR3': 'TextEdit', 'ATR4': 'TextEdit', 'ATR5': 'TextEdit', 'OPIS': 'TextEdit', });
lyr_Buffered_2.set('fieldLabels', {'TIP_SPR': 'no label', 'ID': 'no label', 'ID_UPR': 'no label', 'SIF_VRSTE': 'no label', 'CC_KLAS': 'no label', 'TOPO': 'no label', 'NAT_YX': 'no label', 'Z': 'no label', 'NAT_Z': 'no label', 'GJI': 'no label', 'VIR': 'no label', 'DAT_VIR': 'no label', 'MAT_ST': 'no label', 'MAT_GJS': 'no label', 'ID_EL': 'no label', 'DAT_EL': 'no label', 'DIM_YX': 'no label', 'DIM_Z': 'no label', 'OPU': 'no label', 'ATR1': 'no label', 'ATR2': 'no label', 'ATR3': 'no label', 'ATR4': 'no label', 'ATR5': 'no label', 'OPIS': 'no label', });
lyr_Buffered_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});