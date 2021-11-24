var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_amazonas_limite_provincia_2 = new ol.format.GeoJSON();
var features_amazonas_limite_provincia_2 = format_amazonas_limite_provincia_2.readFeatures(json_amazonas_limite_provincia_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amazonas_limite_provincia_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amazonas_limite_provincia_2.addFeatures(features_amazonas_limite_provincia_2);
var lyr_amazonas_limite_provincia_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_amazonas_limite_provincia_2, 
                style: style_amazonas_limite_provincia_2,
                interactive: true,
                title: '<img src="styles/legend/amazonas_limite_provincia_2.png" /> amazonas_limite_provincia'
            });
var format_amazonas_comunidades_nativas_3 = new ol.format.GeoJSON();
var features_amazonas_comunidades_nativas_3 = format_amazonas_comunidades_nativas_3.readFeatures(json_amazonas_comunidades_nativas_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amazonas_comunidades_nativas_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amazonas_comunidades_nativas_3.addFeatures(features_amazonas_comunidades_nativas_3);
var lyr_amazonas_comunidades_nativas_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_amazonas_comunidades_nativas_3, 
                style: style_amazonas_comunidades_nativas_3,
                interactive: true,
                title: '<img src="styles/legend/amazonas_comunidades_nativas_3.png" /> amazonas_comunidades_nativas'
            });
var format_amazonas_centros_poblados_4 = new ol.format.GeoJSON();
var features_amazonas_centros_poblados_4 = format_amazonas_centros_poblados_4.readFeatures(json_amazonas_centros_poblados_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_amazonas_centros_poblados_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_amazonas_centros_poblados_4.addFeatures(features_amazonas_centros_poblados_4);
var lyr_amazonas_centros_poblados_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_amazonas_centros_poblados_4, 
                style: style_amazonas_centros_poblados_4,
                interactive: true,
                title: '<img src="styles/legend/amazonas_centros_poblados_4.png" /> amazonas_centros_poblados'
            });

lyr_OSMStandard_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_amazonas_limite_provincia_2.setVisible(true);lyr_amazonas_comunidades_nativas_3.setVisible(true);lyr_amazonas_centros_poblados_4.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_OSMStandard_1,lyr_amazonas_limite_provincia_2,lyr_amazonas_comunidades_nativas_3,lyr_amazonas_centros_poblados_4];
lyr_amazonas_limite_provincia_2.set('fieldAliases', {'gid': 'gid', 'objectid_1': 'objectid_1', 'objectid': 'objectid', 'ccdd': 'ccdd', 'nombdep': 'nombdep', 'ccpp': 'ccpp', 'nombprov': 'nombprov', 'capital': 'capital', 'idprov': 'idprov', 'shape_star': 'shape_star', 'shape_stle': 'shape_stle', 'orig_fid': 'orig_fid', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_amazonas_comunidades_nativas_3.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'nom_dpto': 'nom_dpto', 'nom_prov': 'nom_prov', 'nom_dist': 'nom_dist', 'nom_comuni': 'nom_comuni', 'tipo_proce': 'tipo_proce', 'federacion': 'federacion', 'etnia': 'etnia', 'nro_titulo': 'nro_titulo', 'anio_titul': 'anio_titul', 'area_titul': 'area_titul', 'perimetro_': 'perimetro_', 'fuente': 'fuente', 'datum_orig': 'datum_orig', 'proyeccion': 'proyeccion', });
lyr_amazonas_centros_poblados_4.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'provincia': 'provincia', 'distrito': 'distrito', 'region_nat': 'region_nat', 'longitud': 'longitud', 'latitud': 'latitud', 'categoria': 'categoria', 'codigo': 'codigo', 'ubigeo': 'ubigeo', 'departamen': 'departamen', 'altitud': 'altitud', 'descripcio': 'descripcio', 'cpv2017_gi': 'cpv2017_gi', 'poblacion': 'poblacion', 'origen': 'origen', 'ccdd': 'ccdd', 'ccpp': 'ccpp', 'ccdi': 'ccdi', 'cod_grupo': 'cod_grupo', 'flag_tipo_': 'flag_tipo_', });
lyr_amazonas_limite_provincia_2.set('fieldImages', {'gid': 'TextEdit', 'objectid_1': 'TextEdit', 'objectid': 'TextEdit', 'ccdd': 'TextEdit', 'nombdep': 'TextEdit', 'ccpp': 'TextEdit', 'nombprov': 'TextEdit', 'capital': 'TextEdit', 'idprov': 'TextEdit', 'shape_star': 'TextEdit', 'shape_stle': 'TextEdit', 'orig_fid': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_amazonas_comunidades_nativas_3.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'nom_dpto': 'TextEdit', 'nom_prov': 'TextEdit', 'nom_dist': 'TextEdit', 'nom_comuni': 'TextEdit', 'tipo_proce': 'TextEdit', 'federacion': 'TextEdit', 'etnia': 'TextEdit', 'nro_titulo': 'TextEdit', 'anio_titul': 'TextEdit', 'area_titul': 'TextEdit', 'perimetro_': 'TextEdit', 'fuente': 'TextEdit', 'datum_orig': 'TextEdit', 'proyeccion': 'TextEdit', });
lyr_amazonas_centros_poblados_4.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'provincia': 'TextEdit', 'distrito': 'TextEdit', 'region_nat': 'TextEdit', 'longitud': 'TextEdit', 'latitud': 'TextEdit', 'categoria': 'TextEdit', 'codigo': 'TextEdit', 'ubigeo': 'TextEdit', 'departamen': 'TextEdit', 'altitud': 'TextEdit', 'descripcio': 'TextEdit', 'cpv2017_gi': 'TextEdit', 'poblacion': 'TextEdit', 'origen': 'TextEdit', 'ccdd': 'TextEdit', 'ccpp': 'TextEdit', 'ccdi': 'TextEdit', 'cod_grupo': 'TextEdit', 'flag_tipo_': 'TextEdit', });
lyr_amazonas_limite_provincia_2.set('fieldLabels', {'gid': 'no label', 'objectid_1': 'no label', 'objectid': 'no label', 'ccdd': 'no label', 'nombdep': 'no label', 'ccpp': 'no label', 'nombprov': 'no label', 'capital': 'no label', 'idprov': 'no label', 'shape_star': 'no label', 'shape_stle': 'no label', 'orig_fid': 'no label', 'shape_leng': 'no label', 'shape_area': 'no label', });
lyr_amazonas_comunidades_nativas_3.set('fieldLabels', {'gid': 'no label', 'objectid': 'no label', 'nom_dpto': 'no label', 'nom_prov': 'no label', 'nom_dist': 'no label', 'nom_comuni': 'no label', 'tipo_proce': 'no label', 'federacion': 'no label', 'etnia': 'no label', 'nro_titulo': 'no label', 'anio_titul': 'no label', 'area_titul': 'no label', 'perimetro_': 'no label', 'fuente': 'no label', 'datum_orig': 'no label', 'proyeccion': 'no label', });
lyr_amazonas_centros_poblados_4.set('fieldLabels', {'gid': 'no label', 'objectid': 'no label', 'provincia': 'no label', 'distrito': 'no label', 'region_nat': 'no label', 'longitud': 'no label', 'latitud': 'no label', 'categoria': 'no label', 'codigo': 'no label', 'ubigeo': 'no label', 'departamen': 'no label', 'altitud': 'no label', 'descripcio': 'no label', 'cpv2017_gi': 'no label', 'poblacion': 'no label', 'origen': 'no label', 'ccdd': 'no label', 'ccpp': 'no label', 'ccdi': 'no label', 'cod_grupo': 'no label', 'flag_tipo_': 'no label', });
lyr_amazonas_centros_poblados_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});