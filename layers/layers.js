var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Countries_1 = new ol.format.GeoJSON();
var features_Countries_1 = format_Countries_1.readFeatures(json_Countries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Countries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Countries_1.addFeatures(features_Countries_1);
var lyr_Countries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Countries_1, 
                style: style_Countries_1,
                popuplayertitle: 'Countries',
                interactive: true,
                title: '<img src="styles/legend/Countries_1.png" /> Countries'
            });
var format_Global_REEs_USGS_2 = new ol.format.GeoJSON();
var features_Global_REEs_USGS_2 = format_Global_REEs_USGS_2.readFeatures(json_Global_REEs_USGS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Global_REEs_USGS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Global_REEs_USGS_2.addFeatures(features_Global_REEs_USGS_2);
var lyr_Global_REEs_USGS_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Global_REEs_USGS_2, 
                style: style_Global_REEs_USGS_2,
                popuplayertitle: 'Global_REEs_USGS',
                interactive: true,
                title: '<img src="styles/legend/Global_REEs_USGS_2.png" /> Global_REEs_USGS'
            });
var format_Africa_Mineral_Deposits_3 = new ol.format.GeoJSON();
var features_Africa_Mineral_Deposits_3 = format_Africa_Mineral_Deposits_3.readFeatures(json_Africa_Mineral_Deposits_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Africa_Mineral_Deposits_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Africa_Mineral_Deposits_3.addFeatures(features_Africa_Mineral_Deposits_3);
var lyr_Africa_Mineral_Deposits_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Africa_Mineral_Deposits_3, 
                style: style_Africa_Mineral_Deposits_3,
                popuplayertitle: 'Africa_Mineral_Deposits',
                interactive: true,
                title: '<img src="styles/legend/Africa_Mineral_Deposits_3.png" /> Africa_Mineral_Deposits'
            });
var format_Africa_Mineral_Exploration_4 = new ol.format.GeoJSON();
var features_Africa_Mineral_Exploration_4 = format_Africa_Mineral_Exploration_4.readFeatures(json_Africa_Mineral_Exploration_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Africa_Mineral_Exploration_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Africa_Mineral_Exploration_4.addFeatures(features_Africa_Mineral_Exploration_4);
var lyr_Africa_Mineral_Exploration_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Africa_Mineral_Exploration_4, 
                style: style_Africa_Mineral_Exploration_4,
                popuplayertitle: 'Africa_Mineral_Exploration',
                interactive: true,
                title: '<img src="styles/legend/Africa_Mineral_Exploration_4.png" /> Africa_Mineral_Exploration'
            });
var format_Africa_Mining_Facilities_5 = new ol.format.GeoJSON();
var features_Africa_Mining_Facilities_5 = format_Africa_Mining_Facilities_5.readFeatures(json_Africa_Mining_Facilities_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Africa_Mining_Facilities_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Africa_Mining_Facilities_5.addFeatures(features_Africa_Mining_Facilities_5);
var lyr_Africa_Mining_Facilities_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Africa_Mining_Facilities_5, 
                style: style_Africa_Mining_Facilities_5,
                popuplayertitle: 'Africa_Mining_Facilities',
                interactive: true,
                title: '<img src="styles/legend/Africa_Mining_Facilities_5.png" /> Africa_Mining_Facilities'
            });
var format_Africa_Processing_Facilities_6 = new ol.format.GeoJSON();
var features_Africa_Processing_Facilities_6 = format_Africa_Processing_Facilities_6.readFeatures(json_Africa_Processing_Facilities_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Africa_Processing_Facilities_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Africa_Processing_Facilities_6.addFeatures(features_Africa_Processing_Facilities_6);
var lyr_Africa_Processing_Facilities_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Africa_Processing_Facilities_6, 
                style: style_Africa_Processing_Facilities_6,
                popuplayertitle: 'Africa_Processing_Facilities',
                interactive: true,
                title: '<img src="styles/legend/Africa_Processing_Facilities_6.png" /> Africa_Processing_Facilities'
            });
var format_Latin_America_Mineral_Exploration_7 = new ol.format.GeoJSON();
var features_Latin_America_Mineral_Exploration_7 = format_Latin_America_Mineral_Exploration_7.readFeatures(json_Latin_America_Mineral_Exploration_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Latin_America_Mineral_Exploration_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Latin_America_Mineral_Exploration_7.addFeatures(features_Latin_America_Mineral_Exploration_7);
var lyr_Latin_America_Mineral_Exploration_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Latin_America_Mineral_Exploration_7, 
                style: style_Latin_America_Mineral_Exploration_7,
                popuplayertitle: 'Latin_America_Mineral_Exploration',
                interactive: true,
                title: '<img src="styles/legend/Latin_America_Mineral_Exploration_7.png" /> Latin_America_Mineral_Exploration'
            });
var format_INDOPAC_Mining_Facilities_8 = new ol.format.GeoJSON();
var features_INDOPAC_Mining_Facilities_8 = format_INDOPAC_Mining_Facilities_8.readFeatures(json_INDOPAC_Mining_Facilities_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDOPAC_Mining_Facilities_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDOPAC_Mining_Facilities_8.addFeatures(features_INDOPAC_Mining_Facilities_8);
var lyr_INDOPAC_Mining_Facilities_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INDOPAC_Mining_Facilities_8, 
                style: style_INDOPAC_Mining_Facilities_8,
                popuplayertitle: 'INDOPAC_Mining_Facilities',
                interactive: true,
                title: '<img src="styles/legend/INDOPAC_Mining_Facilities_8.png" /> INDOPAC_Mining_Facilities'
            });
var format_INDOPAC_Processing_Facilities_9 = new ol.format.GeoJSON();
var features_INDOPAC_Processing_Facilities_9 = format_INDOPAC_Processing_Facilities_9.readFeatures(json_INDOPAC_Processing_Facilities_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDOPAC_Processing_Facilities_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDOPAC_Processing_Facilities_9.addFeatures(features_INDOPAC_Processing_Facilities_9);
var lyr_INDOPAC_Processing_Facilities_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INDOPAC_Processing_Facilities_9, 
                style: style_INDOPAC_Processing_Facilities_9,
                popuplayertitle: 'INDOPAC_Processing_Facilities ',
                interactive: true,
                title: '<img src="styles/legend/INDOPAC_Processing_Facilities_9.png" /> INDOPAC_Processing_Facilities '
            });
var format_INDOPAC_Mineral_Exploration_10 = new ol.format.GeoJSON();
var features_INDOPAC_Mineral_Exploration_10 = format_INDOPAC_Mineral_Exploration_10.readFeatures(json_INDOPAC_Mineral_Exploration_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_INDOPAC_Mineral_Exploration_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_INDOPAC_Mineral_Exploration_10.addFeatures(features_INDOPAC_Mineral_Exploration_10);
var lyr_INDOPAC_Mineral_Exploration_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_INDOPAC_Mineral_Exploration_10, 
                style: style_INDOPAC_Mineral_Exploration_10,
                popuplayertitle: 'INDOPAC_Mineral_Exploration',
                interactive: true,
                title: '<img src="styles/legend/INDOPAC_Mineral_Exploration_10.png" /> INDOPAC_Mineral_Exploration'
            });
var format_Southwest_Asia_Mineral_Deposits_11 = new ol.format.GeoJSON();
var features_Southwest_Asia_Mineral_Deposits_11 = format_Southwest_Asia_Mineral_Deposits_11.readFeatures(json_Southwest_Asia_Mineral_Deposits_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Southwest_Asia_Mineral_Deposits_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Southwest_Asia_Mineral_Deposits_11.addFeatures(features_Southwest_Asia_Mineral_Deposits_11);
var lyr_Southwest_Asia_Mineral_Deposits_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Southwest_Asia_Mineral_Deposits_11, 
                style: style_Southwest_Asia_Mineral_Deposits_11,
                popuplayertitle: 'Southwest_Asia_Mineral_Deposits',
                interactive: true,
                title: '<img src="styles/legend/Southwest_Asia_Mineral_Deposits_11.png" /> Southwest_Asia_Mineral_Deposits'
            });
var format_Southwest_Asia_Mining_Facilities_12 = new ol.format.GeoJSON();
var features_Southwest_Asia_Mining_Facilities_12 = format_Southwest_Asia_Mining_Facilities_12.readFeatures(json_Southwest_Asia_Mining_Facilities_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Southwest_Asia_Mining_Facilities_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Southwest_Asia_Mining_Facilities_12.addFeatures(features_Southwest_Asia_Mining_Facilities_12);
var lyr_Southwest_Asia_Mining_Facilities_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Southwest_Asia_Mining_Facilities_12, 
                style: style_Southwest_Asia_Mining_Facilities_12,
                popuplayertitle: 'Southwest_Asia_Mining_Facilities',
                interactive: true,
                title: '<img src="styles/legend/Southwest_Asia_Mining_Facilities_12.png" /> Southwest_Asia_Mining_Facilities'
            });
var format_Southwest_Asia_Mineral_Exploration_13 = new ol.format.GeoJSON();
var features_Southwest_Asia_Mineral_Exploration_13 = format_Southwest_Asia_Mineral_Exploration_13.readFeatures(json_Southwest_Asia_Mineral_Exploration_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Southwest_Asia_Mineral_Exploration_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Southwest_Asia_Mineral_Exploration_13.addFeatures(features_Southwest_Asia_Mineral_Exploration_13);
var lyr_Southwest_Asia_Mineral_Exploration_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Southwest_Asia_Mineral_Exploration_13, 
                style: style_Southwest_Asia_Mineral_Exploration_13,
                popuplayertitle: 'Southwest_Asia_Mineral_Exploration',
                interactive: true,
                title: '<img src="styles/legend/Southwest_Asia_Mineral_Exploration_13.png" /> Southwest_Asia_Mineral_Exploration'
            });
var group_Southwest_Asia = new ol.layer.Group({
                                layers: [lyr_Southwest_Asia_Mineral_Deposits_11,lyr_Southwest_Asia_Mining_Facilities_12,lyr_Southwest_Asia_Mineral_Exploration_13,],
                                fold: 'open',
                                title: 'Southwest_Asia'});
var group_INDOPAC = new ol.layer.Group({
                                layers: [lyr_INDOPAC_Mining_Facilities_8,lyr_INDOPAC_Processing_Facilities_9,lyr_INDOPAC_Mineral_Exploration_10,],
                                fold: 'close',
                                title: 'INDOPAC'});
var group_Latin_America = new ol.layer.Group({
                                layers: [lyr_Latin_America_Mineral_Exploration_7,],
                                fold: 'open',
                                title: 'Latin_America'});
var group_Africa = new ol.layer.Group({
                                layers: [lyr_Africa_Mineral_Deposits_3,lyr_Africa_Mineral_Exploration_4,lyr_Africa_Mining_Facilities_5,lyr_Africa_Processing_Facilities_6,],
                                fold: 'open',
                                title: 'Africa'});
var group_Global = new ol.layer.Group({
                                layers: [lyr_Global_REEs_USGS_2,],
                                fold: 'close',
                                title: 'Global'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Countries_1.setVisible(true);lyr_Global_REEs_USGS_2.setVisible(true);lyr_Africa_Mineral_Deposits_3.setVisible(true);lyr_Africa_Mineral_Exploration_4.setVisible(true);lyr_Africa_Mining_Facilities_5.setVisible(true);lyr_Africa_Processing_Facilities_6.setVisible(true);lyr_Latin_America_Mineral_Exploration_7.setVisible(true);lyr_INDOPAC_Mining_Facilities_8.setVisible(true);lyr_INDOPAC_Processing_Facilities_9.setVisible(true);lyr_INDOPAC_Mineral_Exploration_10.setVisible(true);lyr_Southwest_Asia_Mineral_Deposits_11.setVisible(true);lyr_Southwest_Asia_Mining_Facilities_12.setVisible(true);lyr_Southwest_Asia_Mineral_Exploration_13.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Countries_1,group_Global,group_Africa,group_Latin_America,group_INDOPAC,group_Southwest_Asia];
lyr_Countries_1.set('fieldAliases', {'fid': 'fid', 'iso_a2': 'iso_a2', 'NAME': 'NAME', 'FIPS_10_': 'FIPS_10_', 'ISO_A3': 'ISO_A3', 'WB_A2': 'WB_A2', 'WB_A3': 'WB_A3', });
lyr_Global_REEs_USGS_2.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'site_name': 'site_name', 'country': 'country', 'latitude': 'latitude', 'longitude': 'longitude', 'com_type': 'com_type', 'commod1': 'commod1', 'commod2': 'commod2', 'commod3': 'commod3', 'oper_type': 'oper_type', 'dep_type': 'dep_type', 'prod_size': 'prod_size', 'dev_stat': 'dev_stat', 'ore': 'ore', 'orebody_fm': 'orebody_fm', 'work_type': 'work_type', 'model': 'model', 'alteration': 'alteration', 'conc_proc': 'conc_proc', 'hrock_unit': 'hrock_unit', 'hrock_type': 'hrock_type', 'arock_unit': 'arock_unit', 'arock_type': 'arock_type', 'structure': 'structure', 'tectonic': 'tectonic', 'url': 'url', 'disc_yr': 'disc_yr', 'prod_yrs': 'prod_yrs', 'score': 'score', });
lyr_Africa_Mineral_Deposits_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FeatureUID': 'FeatureUID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Country': 'Country', 'ADM1': 'ADM1', 'FeatureNam': 'FeatureNam', 'NameVar': 'NameVar', 'Label1': 'Label1', 'DsgAttr01': 'DsgAttr01', 'DsgAttr02': 'DsgAttr02', 'DsgAttr03': 'DsgAttr03', 'DsgAttr04': 'DsgAttr04', 'DsgAttr05': 'DsgAttr05', 'DsgAttr06': 'DsgAttr06', 'DsgAttr07': 'DsgAttr07', 'DsgAttr08': 'DsgAttr08', 'DsgAttr09': 'DsgAttr09', 'DsgAttr10': 'DsgAttr10', 'InfSource1': 'InfSource1', });
lyr_Africa_Mineral_Exploration_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FeatureUID': 'FeatureUID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Country': 'Country', 'ADM1': 'ADM1', 'FeatureNam': 'FeatureNam', 'NameVar': 'NameVar', 'Label1': 'Label1', 'MemoLoc': 'MemoLoc', 'LocOpStat': 'LocOpStat', 'DsgAttr01': 'DsgAttr01', 'DsgAttr02': 'DsgAttr02', 'DsgAttr03': 'DsgAttr03', 'DsgAttr04': 'DsgAttr04', 'DsgAttr05': 'DsgAttr05', 'DsgAttr06': 'DsgAttr06', 'DsgAttr07': 'DsgAttr07', 'DsgAttr08': 'DsgAttr08', 'OwnerName': 'OwnerName', 'DsgAttr09': 'DsgAttr09', 'DsgAttr10': 'DsgAttr10', 'DsgAttr11': 'DsgAttr11', 'DsgAttr12': 'DsgAttr12', 'InfSource1': 'InfSource1', });
lyr_Africa_Mining_Facilities_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FeatureUID': 'FeatureUID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'LocConfid': 'LocConfid', 'Country': 'Country', 'ADM1': 'ADM1', 'MemoLoc': 'MemoLoc', 'FeatureTyp': 'FeatureTyp', 'FeatureNam': 'FeatureNam', 'Label1': 'Label1', 'DsgAttr01': 'DsgAttr01', 'DsgAttr02': 'DsgAttr02', 'DsgAttr03': 'DsgAttr03', 'DsgAttr04': 'DsgAttr04', 'DsgAttr05': 'DsgAttr05', 'DsgAttr06': 'DsgAttr06', 'DsgAttr07': 'DsgAttr07', 'DsgAttr08': 'DsgAttr08', 'DsgAttr09': 'DsgAttr09', 'DsgAttr10': 'DsgAttr10', 'LocOpStat': 'LocOpStat', 'MemoOther': 'MemoOther', 'OperateNam': 'OperateNam', 'OwnerName1': 'OwnerName1', 'OwnerName2': 'OwnerName2', 'OwnerName3': 'OwnerName3', 'OwnerName4': 'OwnerName4', 'InfSource1': 'InfSource1', 'LocSource1': 'LocSource1', });
lyr_Africa_Processing_Facilities_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FeatureUID': 'FeatureUID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'LocConfid': 'LocConfid', 'Country': 'Country', 'ADM1': 'ADM1', 'MemoLoc': 'MemoLoc', 'FeatureTyp': 'FeatureTyp', 'FeatureNam': 'FeatureNam', 'Label1': 'Label1', 'DsgAttr01': 'DsgAttr01', 'DsgAttr02': 'DsgAttr02', 'DsgAttr03': 'DsgAttr03', 'DsgAttr04': 'DsgAttr04', 'DsgAttr05': 'DsgAttr05', 'DsgAttr06': 'DsgAttr06', 'DsgAttr07': 'DsgAttr07', 'DsgAttr08': 'DsgAttr08', 'DsgAttr09': 'DsgAttr09', 'DsgAttr10': 'DsgAttr10', 'LocOpStat': 'LocOpStat', 'MemoOther': 'MemoOther', 'OperateNam': 'OperateNam', 'OwnerName1': 'OwnerName1', 'OwnerName2': 'OwnerName2', 'OwnerName3': 'OwnerName3', 'OwnerName4': 'OwnerName4', 'InfSource1': 'InfSource1', 'LocSource1': 'LocSource1', });
lyr_Latin_America_Mineral_Exploration_7.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'ROWID': 'ROWID', 'GENC_CC': 'GENC_CC', 'FACID_NUM': 'FACID_NUM', 'FACID': 'FACID', 'COUNTRY': 'COUNTRY', 'ADM1': 'ADM1', 'YEAR': 'YEAR', 'PROJTYPE': 'PROJTYPE', 'PROJNAME': 'PROJNAME', 'COMM': 'COMM', 'NUM_COMM': 'NUM_COMM', 'OPERATOR': 'OPERATOR', 'OWNER': 'OWNER', 'LOCACC': 'LOCACC', 'DDLAT': 'DDLAT', 'DDLONG': 'DDLONG', 'SOURCEID': 'SOURCEID', });
lyr_INDOPAC_Mining_Facilities_8.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'Country': 'Country', 'FeatureNam': 'FeatureNam', 'FeatureTyp': 'FeatureTyp', 'DsgAttr01': 'DsgAttr01', 'DsgAttr02': 'DsgAttr02', 'DsgAttr03': 'DsgAttr03', 'DsgAttr04': 'DsgAttr04', 'DsgAttr05': 'DsgAttr05', 'DsgAttr06': 'DsgAttr06', 'DsgAttr07': 'DsgAttr07', 'LocOpStat': 'LocOpStat', 'LocConf': 'LocConf', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'OperateNam': 'OperateNam', 'OwnerName1': 'OwnerName1', 'OwnerName2': 'OwnerName2', 'OwnerName3': 'OwnerName3', 'InfSource1': 'InfSource1', 'InfSource2': 'InfSource2', 'InfSource3': 'InfSource3', 'InfSource4': 'InfSource4', 'InfSource5': 'InfSource5', 'InfSource6': 'InfSource6', 'InfSource7': 'InfSource7', 'MemoSource': 'MemoSource', });
lyr_INDOPAC_Processing_Facilities_9.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FeatureUID': 'FeatureUID', 'Country': 'Country', 'FeatureNam': 'FeatureNam', 'FeatureTyp': 'FeatureTyp', 'DsgAttr01': 'DsgAttr01', 'DsgAttr02': 'DsgAttr02', 'DsgAttr03': 'DsgAttr03', 'DsgAttr04': 'DsgAttr04', 'DsgAttr05': 'DsgAttr05', 'DsgAttr06': 'DsgAttr06', 'DsgAttr07': 'DsgAttr07', 'DsgAttr08': 'DsgAttr08', 'DsgAttr9': 'DsgAttr9', 'LocOpStat': 'LocOpStat', 'DsgAttr10': 'DsgAttr10', 'ADM1': 'ADM1', 'LocConf': 'LocConf', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'OperateNam': 'OperateNam', 'OwnerName1': 'OwnerName1', 'OwnerName2': 'OwnerName2', 'OwnerName3': 'OwnerName3', 'OwnerName4': 'OwnerName4', 'OwnerName5': 'OwnerName5', 'OwnerName6': 'OwnerName6', 'Label': 'Label', 'InfSource1': 'InfSource1', 'InfSource2': 'InfSource2', 'InfSource3': 'InfSource3', 'InfSource4': 'InfSource4', 'InfSource5': 'InfSource5', 'InfSource6': 'InfSource6', 'InfSource7': 'InfSource7', 'MemoSource': 'MemoSource', });
lyr_INDOPAC_Mineral_Exploration_10.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FeatureUID': 'FeatureUID', 'Country': 'Country', 'FeatureNam': 'FeatureNam', 'NameVar': 'NameVar', 'DsgAttr01': 'DsgAttr01', 'DsgAttr02': 'DsgAttr02', 'DsgAttr03': 'DsgAttr03', 'DsgAttr04': 'DsgAttr04', 'DsgAttr05': 'DsgAttr05', 'DsgAttr06': 'DsgAttr06', 'LocOpStat': 'LocOpStat', 'DsgAttr07': 'DsgAttr07', 'ADM1': 'ADM1', 'MemoLoc': 'MemoLoc', 'LocConf': 'LocConf', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'OperateNam': 'OperateNam', 'OwnerName1': 'OwnerName1', 'OwnerName2': 'OwnerName2', 'OwnerName3': 'OwnerName3', 'OwnerName4': 'OwnerName4', 'DsgAttr09': 'DsgAttr09', 'InfSource1': 'InfSource1', 'InfSource2': 'InfSource2', 'InfSource3': 'InfSource3', 'InfSource4': 'InfSource4', 'InfSource5': 'InfSource5', 'InfSource6': 'InfSource6', 'InfSource7': 'InfSource7', 'InfSource8': 'InfSource8', 'InfSource9': 'InfSource9', 'Label': 'Label', });
lyr_Southwest_Asia_Mineral_Deposits_11.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FeatureUID': 'FeatureUID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Country': 'Country', 'ADM1': 'ADM1', 'FeatureNam': 'FeatureNam', 'NameVar': 'NameVar', 'Label1': 'Label1', 'DsgAttr01': 'DsgAttr01', 'DsgAttr02': 'DsgAttr02', 'DsgAttr03': 'DsgAttr03', 'DsgAttr04': 'DsgAttr04', 'DsgAttr05': 'DsgAttr05', 'DsgAttr06': 'DsgAttr06', 'DsgAttr07': 'DsgAttr07', 'DsgAttr08': 'DsgAttr08', 'DsgAttr09': 'DsgAttr09', 'DsgAttr10': 'DsgAttr10', 'DsgAttr11': 'DsgAttr11', 'DsgAttr12': 'DsgAttr12', 'DsgAttr13': 'DsgAttr13', 'InfSource1': 'InfSource1', });
lyr_Southwest_Asia_Mining_Facilities_12.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FeatureUID': 'FeatureUID', 'Label1': 'Label1', 'Country': 'Country', 'FeatureNam': 'FeatureNam', 'FeatureTyp': 'FeatureTyp', 'DsgAttr01': 'DsgAttr01', 'DsgAttr02': 'DsgAttr02', 'DsgAttr03': 'DsgAttr03', 'DsgAttr04': 'DsgAttr04', 'DsgAttr05': 'DsgAttr05', 'DsgAttr06': 'DsgAttr06', 'DsgAttr07': 'DsgAttr07', 'DsgAttr08': 'DsgAttr08', 'DsgAttr10': 'DsgAttr10', 'DsgAttr09': 'DsgAttr09', 'LocOpStat': 'LocOpStat', 'MemoLoc': 'MemoLoc', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'LocConfid': 'LocConfid', 'LocSource1': 'LocSource1', 'InfSource1': 'InfSource1', 'OperateNam': 'OperateNam', 'OwnerName1': 'OwnerName1', 'OwnerName2': 'OwnerName2', 'OwnerName3': 'OwnerName3', 'OwnerName4': 'OwnerName4', 'ADM1': 'ADM1', });
lyr_Southwest_Asia_Mineral_Exploration_13.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'FeatureUID': 'FeatureUID', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Country': 'Country', 'ADM1': 'ADM1', 'FeatureNam': 'FeatureNam', 'NameVar': 'NameVar', 'LocOpStat': 'LocOpStat', 'DsgAttr01': 'DsgAttr01', 'DsgAttr02': 'DsgAttr02', 'DsgAttr03': 'DsgAttr03', 'DsgAttr04': 'DsgAttr04', 'DsgAttr05': 'DsgAttr05', 'DsgAttr06': 'DsgAttr06', 'DsgAttr07': 'DsgAttr07', 'DsgAttr08': 'DsgAttr08', 'DsgAttr09': 'DsgAttr09', 'MemoLoc': 'MemoLoc', 'Label1': 'Label1', 'InfSource1': 'InfSource1', });
lyr_Countries_1.set('fieldImages', {'fid': 'TextEdit', 'iso_a2': 'TextEdit', 'NAME': 'TextEdit', 'FIPS_10_': 'TextEdit', 'ISO_A3': 'TextEdit', 'WB_A2': 'TextEdit', 'WB_A3': 'TextEdit', });
lyr_Global_REEs_USGS_2.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'site_name': 'TextEdit', 'country': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'com_type': 'TextEdit', 'commod1': 'TextEdit', 'commod2': 'TextEdit', 'commod3': 'TextEdit', 'oper_type': 'TextEdit', 'dep_type': 'TextEdit', 'prod_size': 'TextEdit', 'dev_stat': 'TextEdit', 'ore': 'TextEdit', 'orebody_fm': 'TextEdit', 'work_type': 'TextEdit', 'model': 'TextEdit', 'alteration': 'TextEdit', 'conc_proc': 'TextEdit', 'hrock_unit': 'TextEdit', 'hrock_type': 'TextEdit', 'arock_unit': 'TextEdit', 'arock_type': 'TextEdit', 'structure': 'TextEdit', 'tectonic': 'TextEdit', 'url': 'TextEdit', 'disc_yr': 'Range', 'prod_yrs': 'TextEdit', 'score': 'TextEdit', });
lyr_Africa_Mineral_Deposits_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'FeatureUID': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Country': 'TextEdit', 'ADM1': 'TextEdit', 'FeatureNam': 'TextEdit', 'NameVar': 'TextEdit', 'Label1': 'TextEdit', 'DsgAttr01': 'TextEdit', 'DsgAttr02': 'TextEdit', 'DsgAttr03': 'TextEdit', 'DsgAttr04': 'TextEdit', 'DsgAttr05': 'TextEdit', 'DsgAttr06': 'TextEdit', 'DsgAttr07': 'TextEdit', 'DsgAttr08': 'TextEdit', 'DsgAttr09': 'TextEdit', 'DsgAttr10': 'Range', 'InfSource1': 'TextEdit', });
lyr_Africa_Mineral_Exploration_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'FeatureUID': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Country': 'TextEdit', 'ADM1': 'TextEdit', 'FeatureNam': 'TextEdit', 'NameVar': 'TextEdit', 'Label1': 'TextEdit', 'MemoLoc': 'TextEdit', 'LocOpStat': 'TextEdit', 'DsgAttr01': 'TextEdit', 'DsgAttr02': 'TextEdit', 'DsgAttr03': 'TextEdit', 'DsgAttr04': 'TextEdit', 'DsgAttr05': 'TextEdit', 'DsgAttr06': 'TextEdit', 'DsgAttr07': 'TextEdit', 'DsgAttr08': 'TextEdit', 'OwnerName': 'TextEdit', 'DsgAttr09': 'TextEdit', 'DsgAttr10': 'TextEdit', 'DsgAttr11': 'Range', 'DsgAttr12': 'TextEdit', 'InfSource1': 'TextEdit', });
lyr_Africa_Mining_Facilities_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'FeatureUID': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'LocConfid': 'TextEdit', 'Country': 'TextEdit', 'ADM1': 'TextEdit', 'MemoLoc': 'TextEdit', 'FeatureTyp': 'TextEdit', 'FeatureNam': 'TextEdit', 'Label1': 'TextEdit', 'DsgAttr01': 'TextEdit', 'DsgAttr02': 'TextEdit', 'DsgAttr03': 'TextEdit', 'DsgAttr04': 'TextEdit', 'DsgAttr05': 'TextEdit', 'DsgAttr06': 'Range', 'DsgAttr07': 'Range', 'DsgAttr08': 'TextEdit', 'DsgAttr09': 'TextEdit', 'DsgAttr10': 'TextEdit', 'LocOpStat': 'TextEdit', 'MemoOther': 'TextEdit', 'OperateNam': 'TextEdit', 'OwnerName1': 'TextEdit', 'OwnerName2': 'TextEdit', 'OwnerName3': 'TextEdit', 'OwnerName4': 'TextEdit', 'InfSource1': 'TextEdit', 'LocSource1': 'TextEdit', });
lyr_Africa_Processing_Facilities_6.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'FeatureUID': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'LocConfid': 'TextEdit', 'Country': 'TextEdit', 'ADM1': 'TextEdit', 'MemoLoc': 'TextEdit', 'FeatureTyp': 'TextEdit', 'FeatureNam': 'TextEdit', 'Label1': 'TextEdit', 'DsgAttr01': 'TextEdit', 'DsgAttr02': 'TextEdit', 'DsgAttr03': 'TextEdit', 'DsgAttr04': 'TextEdit', 'DsgAttr05': 'TextEdit', 'DsgAttr06': 'Range', 'DsgAttr07': 'Range', 'DsgAttr08': 'TextEdit', 'DsgAttr09': 'TextEdit', 'DsgAttr10': 'TextEdit', 'LocOpStat': 'TextEdit', 'MemoOther': 'TextEdit', 'OperateNam': 'TextEdit', 'OwnerName1': 'TextEdit', 'OwnerName2': 'TextEdit', 'OwnerName3': 'TextEdit', 'OwnerName4': 'TextEdit', 'InfSource1': 'TextEdit', 'LocSource1': 'TextEdit', });
lyr_Latin_America_Mineral_Exploration_7.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'ROWID': 'Range', 'GENC_CC': 'TextEdit', 'FACID_NUM': 'Range', 'FACID': 'TextEdit', 'COUNTRY': 'TextEdit', 'ADM1': 'TextEdit', 'YEAR': 'Range', 'PROJTYPE': 'TextEdit', 'PROJNAME': 'TextEdit', 'COMM': 'TextEdit', 'NUM_COMM': 'Range', 'OPERATOR': 'TextEdit', 'OWNER': 'TextEdit', 'LOCACC': 'TextEdit', 'DDLAT': 'TextEdit', 'DDLONG': 'TextEdit', 'SOURCEID': 'Range', });
lyr_INDOPAC_Mining_Facilities_8.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'Country': 'TextEdit', 'FeatureNam': 'TextEdit', 'FeatureTyp': 'TextEdit', 'DsgAttr01': 'TextEdit', 'DsgAttr02': 'TextEdit', 'DsgAttr03': 'TextEdit', 'DsgAttr04': 'TextEdit', 'DsgAttr05': 'TextEdit', 'DsgAttr06': 'Range', 'DsgAttr07': 'TextEdit', 'LocOpStat': 'TextEdit', 'LocConf': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'OperateNam': 'TextEdit', 'OwnerName1': 'TextEdit', 'OwnerName2': 'TextEdit', 'OwnerName3': 'TextEdit', 'InfSource1': 'TextEdit', 'InfSource2': 'TextEdit', 'InfSource3': 'TextEdit', 'InfSource4': 'TextEdit', 'InfSource5': 'TextEdit', 'InfSource6': 'TextEdit', 'InfSource7': 'TextEdit', 'MemoSource': 'TextEdit', });
lyr_INDOPAC_Processing_Facilities_9.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'FeatureUID': 'TextEdit', 'Country': 'TextEdit', 'FeatureNam': 'TextEdit', 'FeatureTyp': 'TextEdit', 'DsgAttr01': 'TextEdit', 'DsgAttr02': 'TextEdit', 'DsgAttr03': 'TextEdit', 'DsgAttr04': 'TextEdit', 'DsgAttr05': 'TextEdit', 'DsgAttr06': 'Range', 'DsgAttr07': 'TextEdit', 'DsgAttr08': 'TextEdit', 'DsgAttr9': 'TextEdit', 'LocOpStat': 'TextEdit', 'DsgAttr10': 'TextEdit', 'ADM1': 'TextEdit', 'LocConf': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'OperateNam': 'TextEdit', 'OwnerName1': 'TextEdit', 'OwnerName2': 'TextEdit', 'OwnerName3': 'TextEdit', 'OwnerName4': 'TextEdit', 'OwnerName5': 'TextEdit', 'OwnerName6': 'TextEdit', 'Label': 'TextEdit', 'InfSource1': 'TextEdit', 'InfSource2': 'TextEdit', 'InfSource3': 'TextEdit', 'InfSource4': 'TextEdit', 'InfSource5': 'TextEdit', 'InfSource6': 'TextEdit', 'InfSource7': 'TextEdit', 'MemoSource': 'TextEdit', });
lyr_INDOPAC_Mineral_Exploration_10.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'FeatureUID': 'TextEdit', 'Country': 'TextEdit', 'FeatureNam': 'TextEdit', 'NameVar': 'TextEdit', 'DsgAttr01': 'TextEdit', 'DsgAttr02': 'TextEdit', 'DsgAttr03': 'TextEdit', 'DsgAttr04': 'TextEdit', 'DsgAttr05': 'TextEdit', 'DsgAttr06': 'TextEdit', 'LocOpStat': 'TextEdit', 'DsgAttr07': 'TextEdit', 'ADM1': 'TextEdit', 'MemoLoc': 'TextEdit', 'LocConf': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'OperateNam': 'TextEdit', 'OwnerName1': 'TextEdit', 'OwnerName2': 'TextEdit', 'OwnerName3': 'TextEdit', 'OwnerName4': 'TextEdit', 'DsgAttr09': 'Range', 'InfSource1': 'TextEdit', 'InfSource2': 'TextEdit', 'InfSource3': 'TextEdit', 'InfSource4': 'TextEdit', 'InfSource5': 'TextEdit', 'InfSource6': 'TextEdit', 'InfSource7': 'TextEdit', 'InfSource8': 'TextEdit', 'InfSource9': 'TextEdit', 'Label': 'TextEdit', });
lyr_Southwest_Asia_Mineral_Deposits_11.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'FeatureUID': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Country': 'TextEdit', 'ADM1': 'TextEdit', 'FeatureNam': 'TextEdit', 'NameVar': 'TextEdit', 'Label1': 'TextEdit', 'DsgAttr01': 'TextEdit', 'DsgAttr02': 'TextEdit', 'DsgAttr03': 'TextEdit', 'DsgAttr04': 'TextEdit', 'DsgAttr05': 'TextEdit', 'DsgAttr06': 'TextEdit', 'DsgAttr07': 'TextEdit', 'DsgAttr08': 'TextEdit', 'DsgAttr09': 'TextEdit', 'DsgAttr10': 'TextEdit', 'DsgAttr11': 'TextEdit', 'DsgAttr12': 'TextEdit', 'DsgAttr13': 'TextEdit', 'InfSource1': 'TextEdit', });
lyr_Southwest_Asia_Mining_Facilities_12.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'FeatureUID': 'TextEdit', 'Label1': 'TextEdit', 'Country': 'TextEdit', 'FeatureNam': 'TextEdit', 'FeatureTyp': 'TextEdit', 'DsgAttr01': 'TextEdit', 'DsgAttr02': 'TextEdit', 'DsgAttr03': 'TextEdit', 'DsgAttr04': 'TextEdit', 'DsgAttr05': 'TextEdit', 'DsgAttr06': 'Range', 'DsgAttr07': 'TextEdit', 'DsgAttr08': 'TextEdit', 'DsgAttr10': 'TextEdit', 'DsgAttr09': 'TextEdit', 'LocOpStat': 'TextEdit', 'MemoLoc': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'LocConfid': 'TextEdit', 'LocSource1': 'TextEdit', 'InfSource1': 'TextEdit', 'OperateNam': 'TextEdit', 'OwnerName1': 'TextEdit', 'OwnerName2': 'TextEdit', 'OwnerName3': 'TextEdit', 'OwnerName4': 'TextEdit', 'ADM1': 'TextEdit', });
lyr_Southwest_Asia_Mineral_Exploration_13.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'Range', 'FeatureUID': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Country': 'TextEdit', 'ADM1': 'TextEdit', 'FeatureNam': 'TextEdit', 'NameVar': 'TextEdit', 'LocOpStat': 'TextEdit', 'DsgAttr01': 'TextEdit', 'DsgAttr02': 'TextEdit', 'DsgAttr03': 'TextEdit', 'DsgAttr04': 'TextEdit', 'DsgAttr05': 'TextEdit', 'DsgAttr06': 'TextEdit', 'DsgAttr07': 'TextEdit', 'DsgAttr08': 'TextEdit', 'DsgAttr09': 'TextEdit', 'MemoLoc': 'TextEdit', 'Label1': 'TextEdit', 'InfSource1': 'TextEdit', });
lyr_Countries_1.set('fieldLabels', {'fid': 'no label', 'iso_a2': 'no label', 'NAME': 'no label', 'FIPS_10_': 'no label', 'ISO_A3': 'no label', 'WB_A2': 'no label', 'WB_A3': 'no label', });
lyr_Global_REEs_USGS_2.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'site_name': 'no label', 'country': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'com_type': 'no label', 'commod1': 'no label', 'commod2': 'no label', 'commod3': 'no label', 'oper_type': 'no label', 'dep_type': 'no label', 'prod_size': 'no label', 'dev_stat': 'no label', 'ore': 'no label', 'orebody_fm': 'no label', 'work_type': 'no label', 'model': 'no label', 'alteration': 'no label', 'conc_proc': 'no label', 'hrock_unit': 'no label', 'hrock_type': 'no label', 'arock_unit': 'no label', 'arock_type': 'no label', 'structure': 'no label', 'tectonic': 'no label', 'url': 'no label', 'disc_yr': 'no label', 'prod_yrs': 'no label', 'score': 'no label', });
lyr_Africa_Mineral_Deposits_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FeatureUID': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Country': 'no label', 'ADM1': 'no label', 'FeatureNam': 'no label', 'NameVar': 'no label', 'Label1': 'no label', 'DsgAttr01': 'no label', 'DsgAttr02': 'no label', 'DsgAttr03': 'no label', 'DsgAttr04': 'no label', 'DsgAttr05': 'no label', 'DsgAttr06': 'no label', 'DsgAttr07': 'no label', 'DsgAttr08': 'no label', 'DsgAttr09': 'no label', 'DsgAttr10': 'no label', 'InfSource1': 'no label', });
lyr_Africa_Mineral_Exploration_4.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FeatureUID': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Country': 'no label', 'ADM1': 'no label', 'FeatureNam': 'no label', 'NameVar': 'no label', 'Label1': 'no label', 'MemoLoc': 'no label', 'LocOpStat': 'no label', 'DsgAttr01': 'no label', 'DsgAttr02': 'no label', 'DsgAttr03': 'no label', 'DsgAttr04': 'no label', 'DsgAttr05': 'no label', 'DsgAttr06': 'no label', 'DsgAttr07': 'no label', 'DsgAttr08': 'no label', 'OwnerName': 'no label', 'DsgAttr09': 'no label', 'DsgAttr10': 'no label', 'DsgAttr11': 'no label', 'DsgAttr12': 'no label', 'InfSource1': 'no label', });
lyr_Africa_Mining_Facilities_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FeatureUID': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'LocConfid': 'no label', 'Country': 'no label', 'ADM1': 'no label', 'MemoLoc': 'no label', 'FeatureTyp': 'no label', 'FeatureNam': 'no label', 'Label1': 'no label', 'DsgAttr01': 'no label', 'DsgAttr02': 'no label', 'DsgAttr03': 'no label', 'DsgAttr04': 'no label', 'DsgAttr05': 'no label', 'DsgAttr06': 'no label', 'DsgAttr07': 'no label', 'DsgAttr08': 'no label', 'DsgAttr09': 'no label', 'DsgAttr10': 'no label', 'LocOpStat': 'no label', 'MemoOther': 'no label', 'OperateNam': 'no label', 'OwnerName1': 'no label', 'OwnerName2': 'no label', 'OwnerName3': 'no label', 'OwnerName4': 'no label', 'InfSource1': 'no label', 'LocSource1': 'no label', });
lyr_Africa_Processing_Facilities_6.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FeatureUID': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'LocConfid': 'no label', 'Country': 'no label', 'ADM1': 'no label', 'MemoLoc': 'no label', 'FeatureTyp': 'no label', 'FeatureNam': 'no label', 'Label1': 'no label', 'DsgAttr01': 'no label', 'DsgAttr02': 'no label', 'DsgAttr03': 'no label', 'DsgAttr04': 'no label', 'DsgAttr05': 'no label', 'DsgAttr06': 'no label', 'DsgAttr07': 'no label', 'DsgAttr08': 'no label', 'DsgAttr09': 'no label', 'DsgAttr10': 'no label', 'LocOpStat': 'no label', 'MemoOther': 'no label', 'OperateNam': 'no label', 'OwnerName1': 'no label', 'OwnerName2': 'no label', 'OwnerName3': 'no label', 'OwnerName4': 'no label', 'InfSource1': 'no label', 'LocSource1': 'no label', });
lyr_Latin_America_Mineral_Exploration_7.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'ROWID': 'no label', 'GENC_CC': 'no label', 'FACID_NUM': 'no label', 'FACID': 'no label', 'COUNTRY': 'no label', 'ADM1': 'no label', 'YEAR': 'no label', 'PROJTYPE': 'no label', 'PROJNAME': 'no label', 'COMM': 'no label', 'NUM_COMM': 'no label', 'OPERATOR': 'no label', 'OWNER': 'no label', 'LOCACC': 'no label', 'DDLAT': 'no label', 'DDLONG': 'no label', 'SOURCEID': 'no label', });
lyr_INDOPAC_Mining_Facilities_8.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'Country': 'no label', 'FeatureNam': 'no label', 'FeatureTyp': 'no label', 'DsgAttr01': 'no label', 'DsgAttr02': 'no label', 'DsgAttr03': 'no label', 'DsgAttr04': 'no label', 'DsgAttr05': 'no label', 'DsgAttr06': 'no label', 'DsgAttr07': 'no label', 'LocOpStat': 'no label', 'LocConf': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'OperateNam': 'no label', 'OwnerName1': 'no label', 'OwnerName2': 'no label', 'OwnerName3': 'no label', 'InfSource1': 'no label', 'InfSource2': 'no label', 'InfSource3': 'no label', 'InfSource4': 'no label', 'InfSource5': 'no label', 'InfSource6': 'no label', 'InfSource7': 'no label', 'MemoSource': 'no label', });
lyr_INDOPAC_Processing_Facilities_9.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FeatureUID': 'no label', 'Country': 'no label', 'FeatureNam': 'no label', 'FeatureTyp': 'no label', 'DsgAttr01': 'no label', 'DsgAttr02': 'no label', 'DsgAttr03': 'no label', 'DsgAttr04': 'no label', 'DsgAttr05': 'no label', 'DsgAttr06': 'no label', 'DsgAttr07': 'no label', 'DsgAttr08': 'no label', 'DsgAttr9': 'no label', 'LocOpStat': 'no label', 'DsgAttr10': 'no label', 'ADM1': 'no label', 'LocConf': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'OperateNam': 'no label', 'OwnerName1': 'no label', 'OwnerName2': 'no label', 'OwnerName3': 'no label', 'OwnerName4': 'no label', 'OwnerName5': 'no label', 'OwnerName6': 'no label', 'Label': 'no label', 'InfSource1': 'no label', 'InfSource2': 'no label', 'InfSource3': 'no label', 'InfSource4': 'no label', 'InfSource5': 'no label', 'InfSource6': 'no label', 'InfSource7': 'no label', 'MemoSource': 'no label', });
lyr_INDOPAC_Mineral_Exploration_10.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FeatureUID': 'no label', 'Country': 'no label', 'FeatureNam': 'no label', 'NameVar': 'no label', 'DsgAttr01': 'no label', 'DsgAttr02': 'no label', 'DsgAttr03': 'no label', 'DsgAttr04': 'no label', 'DsgAttr05': 'no label', 'DsgAttr06': 'no label', 'LocOpStat': 'no label', 'DsgAttr07': 'no label', 'ADM1': 'no label', 'MemoLoc': 'no label', 'LocConf': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'OperateNam': 'no label', 'OwnerName1': 'no label', 'OwnerName2': 'no label', 'OwnerName3': 'no label', 'OwnerName4': 'no label', 'DsgAttr09': 'no label', 'InfSource1': 'no label', 'InfSource2': 'no label', 'InfSource3': 'no label', 'InfSource4': 'no label', 'InfSource5': 'no label', 'InfSource6': 'no label', 'InfSource7': 'no label', 'InfSource8': 'no label', 'InfSource9': 'no label', 'Label': 'no label', });
lyr_Southwest_Asia_Mineral_Deposits_11.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FeatureUID': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Country': 'no label', 'ADM1': 'no label', 'FeatureNam': 'no label', 'NameVar': 'no label', 'Label1': 'no label', 'DsgAttr01': 'no label', 'DsgAttr02': 'no label', 'DsgAttr03': 'no label', 'DsgAttr04': 'no label', 'DsgAttr05': 'no label', 'DsgAttr06': 'no label', 'DsgAttr07': 'no label', 'DsgAttr08': 'no label', 'DsgAttr09': 'no label', 'DsgAttr10': 'no label', 'DsgAttr11': 'no label', 'DsgAttr12': 'no label', 'DsgAttr13': 'no label', 'InfSource1': 'no label', });
lyr_Southwest_Asia_Mining_Facilities_12.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FeatureUID': 'no label', 'Label1': 'no label', 'Country': 'no label', 'FeatureNam': 'no label', 'FeatureTyp': 'no label', 'DsgAttr01': 'no label', 'DsgAttr02': 'no label', 'DsgAttr03': 'no label', 'DsgAttr04': 'no label', 'DsgAttr05': 'no label', 'DsgAttr06': 'no label', 'DsgAttr07': 'no label', 'DsgAttr08': 'no label', 'DsgAttr10': 'no label', 'DsgAttr09': 'no label', 'LocOpStat': 'no label', 'MemoLoc': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'LocConfid': 'no label', 'LocSource1': 'no label', 'InfSource1': 'no label', 'OperateNam': 'no label', 'OwnerName1': 'no label', 'OwnerName2': 'no label', 'OwnerName3': 'no label', 'OwnerName4': 'no label', 'ADM1': 'no label', });
lyr_Southwest_Asia_Mineral_Exploration_13.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'FeatureUID': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Country': 'no label', 'ADM1': 'no label', 'FeatureNam': 'no label', 'NameVar': 'no label', 'LocOpStat': 'no label', 'DsgAttr01': 'no label', 'DsgAttr02': 'no label', 'DsgAttr03': 'no label', 'DsgAttr04': 'no label', 'DsgAttr05': 'no label', 'DsgAttr06': 'no label', 'DsgAttr07': 'no label', 'DsgAttr08': 'no label', 'DsgAttr09': 'no label', 'MemoLoc': 'no label', 'Label1': 'no label', 'InfSource1': 'no label', });
lyr_Southwest_Asia_Mineral_Exploration_13.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});