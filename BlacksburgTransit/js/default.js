﻿// For an introduction to the Navigation template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232506

var _fromRouteCode = {
    TE: "The Explorer",
    HXP: "Hokie Express",
    CRC: "Coorporate Research Center",
    CRCH: "Coorporate Research Center/Hospital",
    HWD: "Hethwood",
    PH: "Patrick Henry",
    TTT: "Two Town Trolley",
    MSN: "Main Street - North",
    HDG: "Harding Ave",
    TC: "Tom's Creek",
    MSS: "Main Street - South",
    PRG: "Progress Street",
    UCB: "University City Boulevard",
    UMS: "University Mall Shuttle",
    BTC: "Blacksburg Transit Commuter",
};

var _stops = [{ "stop_code": "2200", "stop_name": "Conston/Spradlin Farm Wbnd", "stop_lat": "37.15826", "stop_lon": "-80.42316" }, { "stop_code": "2201", "stop_name": "Farmview/Ridinger Ebnd", "stop_lat": "37.15646", "stop_lon": "-80.42125" }, { "stop_code": "2302", "stop_name": "North Franklin/Wades Sbnd", "stop_lat": "37.13633", "stop_lon": "-80.414" }, { "stop_code": "2112", "stop_name": "Recreation Center", "stop_lat": "37.15034", "stop_lon": "-80.41492" }, { "stop_code": "2109", "stop_name": "W Main/Dunkley Ebnd", "stop_lat": "37.1283", "stop_lon": "-80.4106" }, { "stop_code": "1802", "stop_name": "Wal Mart", "stop_lat": "37.1616", "stop_lon": "-80.426" }, { "stop_code": "2108", "stop_name": "Depot/New Wbnd", "stop_lat": "37.13081", "stop_lon": "-80.4146" }, { "stop_code": "2110", "stop_name": "Montgomery County Courthouse", "stop_lat": "37.13073", "stop_lon": "-80.40775" }, { "stop_code": "2111", "stop_name": "Roanoke/Evans Ebnd", "stop_lat": "37.13015", "stop_lon": "-80.40209" }, { "stop_code": "1800", "stop_name": "New River Valley Mall", "stop_lat": "37.1661", "stop_lon": "-80.4285" }, { "stop_code": "2103", "stop_name": "Park/East", "stop_lat": "37.1354", "stop_lon": "-80.3934" }, { "stop_code": "2104", "stop_name": "Depot/Cambria Wbnd", "stop_lat": "37.14127", "stop_lon": "-80.40401" }, { "stop_code": "2100", "stop_name": "Montgomery County Govt Center", "stop_lat": "37.13142", "stop_lon": "-80.39331" }, { "stop_code": "2116", "stop_name": "Roanoke/Hungate Wbnd", "stop_lat": "37.13422", "stop_lon": "-80.38493" }, { "stop_code": "2130", "stop_name": "Roanoke/Roberts Ebnd", "stop_lat": "37.13036", "stop_lon": "-80.39775" }, { "stop_code": "2101", "stop_name": "Replublic/Salem Nbnd", "stop_lat": "37.1372", "stop_lon": "-80.3962" }, { "stop_code": "2102", "stop_name": "Park/Hagan", "stop_lat": "37.13404", "stop_lon": "-80.3995" }, { "stop_code": "2202", "stop_name": "Laurel/Sycamore Wbnd", "stop_lat": "37.16236", "stop_lon": "-80.42093" }, { "stop_code": "2209", "stop_name": "Shoppers Way Wbnd", "stop_lat": "37.16668", "stop_lon": "-80.42521" }, { "stop_code": "2303", "stop_name": "North Franklin/Cambria Nbnd", "stop_lat": "37.15116", "stop_lon": "-80.4145" }, { "stop_code": "2203", "stop_name": "Laurel/Peppers Ferry Nbnd", "stop_lat": "37.1641", "stop_lon": "-80.41985" }, { "stop_code": "2204", "stop_name": "DMV on Arbor Nbnd", "stop_lat": "37.1653", "stop_lon": "-80.41796" }, { "stop_code": "2105", "stop_name": "Aquatic Center", "stop_lat": "37.13839", "stop_lon": "-80.41251" }, { "stop_code": "2115", "stop_name": "Falling Branch Park and Ride", "stop_lat": "37.12683", "stop_lon": "-80.37051" }, { "stop_code": "2206", "stop_name": "Arbor/Market Wbnd", "stop_lat": "37.1688", "stop_lon": "-80.4196" }, { "stop_code": "2210", "stop_name": "NRV Theatre", "stop_lat": "37.1642", "stop_lon": "-80.4291" }, { "stop_code": "2205", "stop_name": "Post Office on Arbor Nbnd", "stop_lat": "37.16759", "stop_lon": "-80.4175" }, { "stop_code": "2114", "stop_name": "Eletric Way/Hubbell Wbnd", "stop_lat": "37.13721", "stop_lon": "-80.37286" }, { "stop_code": "2113", "stop_name": "Simmons/Hammes Nbnd", "stop_lat": "37.13639", "stop_lon": "-80.37" }, { "stop_code": "2118", "stop_name": "Roanoke/Craig Wbnd", "stop_lat": "37.13054", "stop_lon": "-80.39729" }, { "stop_code": "2117", "stop_name": "Roanoke/East Wbnd", "stop_lat": "37.13146", "stop_lon": "-80.39344" }, { "stop_code": "2119", "stop_name": "Roanoke/Evans Wbnd", "stop_lat": "37.13025", "stop_lon": "-80.40267" }, { "stop_code": "2120", "stop_name": "Christiansburg Town Hall", "stop_lat": "37.13061", "stop_lon": "-80.408" }, { "stop_code": "2301", "stop_name": "North Franklin/Wades Nbnd", "stop_lat": "37.13652", "stop_lon": "-80.41377" }, { "stop_code": "1339", "stop_name": "Progress/Watson Nbnd", "stop_lat": "37.23894", "stop_lon": "-80.4221" }, { "stop_code": "1308", "stop_name": "The Village on Patrick Henry Wbnd", "stop_lat": "37.24493", "stop_lon": "-80.42521" }, { "stop_code": "1114", "stop_name": "Torgerson Hall", "stop_lat": "37.22966", "stop_lon": "-80.42085" }, { "stop_code": "1123", "stop_name": "McComas Hall", "stop_lat": "37.22125", "stop_lon": "-80.42223" }, { "stop_code": "1125", "stop_name": "Tennis Courts", "stop_lat": "37.22505", "stop_lon": "-80.41673" }, { "stop_code": "1124", "stop_name": "Cassell Coliseum", "stop_lat": "37.22313", "stop_lon": "-80.41948" }, { "stop_code": "1100", "stop_name": "Newman Library", "stop_lat": "37.22854", "stop_lon": "-80.41976" }, { "stop_code": "1312", "stop_name": "Shawnee on University City Sbnd", "stop_lat": "37.24103", "stop_lon": "-80.43523" }, { "stop_code": "1310", "stop_name": "University City/Toms Creek Wbnd", "stop_lat": "37.24298", "stop_lon": "-80.42967" }, { "stop_code": "1307", "stop_name": "Progress/Patrick Henry Nbnd", "stop_lat": "37.24522", "stop_lon": "-80.42153" }, { "stop_code": "1311", "stop_name": "Shawnee on University City Wbnd", "stop_lat": "37.24224", "stop_lon": "-80.43338" }, { "stop_code": "1309", "stop_name": "Patrick Henry/Toms Creek Wbnd", "stop_lat": "37.2438", "stop_lon": "-80.42802" }, { "stop_code": "1315", "stop_name": "University Mall Sbnd", "stop_lat": "37.23419", "stop_lon": "-80.4333" }, { "stop_code": "1306", "stop_name": "Progress/University Terr Nbnd", "stop_lat": "37.24423", "stop_lon": "-80.42149" }, { "stop_code": "1104", "stop_name": "Old Security Bldg", "stop_lat": "37.23154", "stop_lon": "-80.42213" }, { "stop_code": "1305", "stop_name": "Progress/Broce Nbnd", "stop_lat": "37.24237", "stop_lon": "-80.42226" }, { "stop_code": "1116", "stop_name": "Litton Reaves Hall", "stop_lat": "37.22245", "stop_lon": "-80.42353" }, { "stop_code": "1105", "stop_name": "Stanger/Perry Nbnd", "stop_lat": "37.23255", "stop_lon": "-80.4241" }, { "stop_code": "1334", "stop_name": "Prices Fork/Turner Ebnd", "stop_lat": "37.23382", "stop_lon": "-80.42281" }, { "stop_code": "1313", "stop_name": "University City/Broce Sbnd", "stop_lat": "37.23721", "stop_lon": "-80.43481" }, { "stop_code": "1314", "stop_name": "University City/Glade Sbnd", "stop_lat": "37.23578", "stop_lon": "-80.43407" }, { "stop_code": "1115", "stop_name": "Wright House", "stop_lat": "37.22675", "stop_lon": "-80.42575" }, { "stop_code": "1110", "stop_name": "Squires Ebnd", "stop_lat": "37.2298", "stop_lon": "-80.41873" }, { "stop_code": "1111", "stop_name": "Alumni Mall Ebnd", "stop_lat": "37.23119", "stop_lon": "-80.41642" }, { "stop_code": "1628", "stop_name": "Main St Post Office", "stop_lat": "37.22991", "stop_lon": "-80.41454" }, { "stop_code": "1504", "stop_name": "Harding/Owens Ebnd", "stop_lat": "37.23549", "stop_lon": "-80.40858" }, { "stop_code": "1112", "stop_name": "Alumni Mall Wbnd", "stop_lat": "37.23134", "stop_lon": "-80.41656" }, { "stop_code": "1113", "stop_name": "Squires Wbnd", "stop_lat": "37.22977", "stop_lon": "-80.4191" }, { "stop_code": "1519", "stop_name": "Roanoke/Rutledge Wbnd", "stop_lat": "37.23177", "stop_lon": "-80.41032" }, { "stop_code": "1518", "stop_name": "Roanoke/Woolwine Wbnd", "stop_lat": "37.23255", "stop_lon": "-80.40917" }, { "stop_code": "1514", "stop_name": "Harding/Sutton Wbnd", "stop_lat": "37.23919", "stop_lon": "-80.40305" }, { "stop_code": "1508", "stop_name": "Harding/Vista Ebnd", "stop_lat": "37.23922", "stop_lon": "-80.40298" }, { "stop_code": "1507", "stop_name": "Harding/Apperson Ebnd", "stop_lat": "37.23857", "stop_lon": "-80.40427" }, { "stop_code": "1501", "stop_name": "Roanoke/Wharton Ebnd", "stop_lat": "37.23125", "stop_lon": "-80.4111" }, { "stop_code": "1101", "stop_name": "Burruss Hall", "stop_lat": "37.22849", "stop_lon": "-80.42284" }, { "stop_code": "1520", "stop_name": "Roanoke/Wharton Wbnd", "stop_lat": "37.23114", "stop_lon": "-80.41126" }, { "stop_code": "1513", "stop_name": "Harding/Rucker Wbnd", "stop_lat": "37.24041", "stop_lon": "-80.40059" }, { "stop_code": "1521", "stop_name": "Roanoke/Penn Wbnd", "stop_lat": "37.23039", "stop_lon": "-80.41238" }, { "stop_code": "1516", "stop_name": "Harding/Patrick Henry Wbnd", "stop_lat": "37.23772", "stop_lon": "-80.40599" }, { "stop_code": "1506", "stop_name": "Harding/Patrick Henry Ebnd", "stop_lat": "37.23777", "stop_lon": "-80.40588" }, { "stop_code": "1503", "stop_name": "Roanoke/Woolwine Ebnd", "stop_lat": "37.23269", "stop_lon": "-80.40897" }, { "stop_code": "1517", "stop_name": "Harding/Cork Wbnd", "stop_lat": "37.2358", "stop_lon": "-80.4083" }, { "stop_code": "1515", "stop_name": "Harding/Apperson Wbnd", "stop_lat": "37.23848", "stop_lon": "-80.40446" }, { "stop_code": "1510", "stop_name": "Ascot/Harding Ebnd", "stop_lat": "37.24149", "stop_lon": "-80.39922" }, { "stop_code": "1502", "stop_name": "Roanoke/Rutledge Ebnd", "stop_lat": "37.23181", "stop_lon": "-80.41026" }, { "stop_code": "1512", "stop_name": "Ascot/Harding Wbnd", "stop_lat": "37.24137", "stop_lon": "-80.39899" }, { "stop_code": "1511", "stop_name": "Ascot/Hampton", "stop_lat": "37.23922", "stop_lon": "-80.3982" }, { "stop_code": "1505", "stop_name": "Harding/Cork Ebnd", "stop_lat": "37.23663", "stop_lon": "-80.40758" }, { "stop_code": "1509", "stop_name": "Harding/Roanoke Ebnd", "stop_lat": "37.24044", "stop_lon": "-80.40053" }, { "stop_code": "1600", "stop_name": "Main/Roanoke Sbnd", "stop_lat": "37.2297", "stop_lon": "-80.41432" }, { "stop_code": "1500", "stop_name": "Roanoke/Church Ebnd", "stop_lat": "37.23016", "stop_lon": "-80.41273" }, { "stop_code": "1618", "stop_name": "Main/Landsdowne Nbnd", "stop_lat": "37.21333", "stop_lon": "-80.40007" }, { "stop_code": "2203", "stop_name": "Laurel/Peppers Ferry", "stop_lat": "37.1641", "stop_lon": "-80.41985" }, { "stop_code": "2202", "stop_name": "Laurel/Sycamore", "stop_lat": "37.16236", "stop_lon": "-80.42093" }, { "stop_code": "1801", "stop_name": "NRV Theatre", "stop_lat": "37.1642", "stop_lon": "-80.4291" }, { "stop_code": "1800", "stop_name": "New River Valley Mall", "stop_lat": "37.1661", "stop_lon": "-80.42853" }, { "stop_code": "2204", "stop_name": "DMV on Arbor", "stop_lat": "37.1653", "stop_lon": "-80.41796" }, { "stop_code": "2206", "stop_name": "Arbor/Market", "stop_lat": "37.1688", "stop_lon": "-80.4196" }, { "stop_code": "1803", "stop_name": "Montgomery Regional Hospital", "stop_lat": "37.18725", "stop_lon": "-80.40983" }, { "stop_code": "2205", "stop_name": "Post Office on Arbor", "stop_lat": "37.16759", "stop_lon": "-80.4175" }, { "stop_code": "2209", "stop_name": "Shoppers Way", "stop_lat": "37.16668", "stop_lon": "-80.42521" }, { "stop_code": "1802", "stop_name": "Wal Mart", "stop_lat": "37.16157", "stop_lon": "-80.42596" }, { "stop_code": "1608", "stop_name": "Main/Landsdowne Sbnd", "stop_lat": "37.2125", "stop_lon": "-80.39999" }, { "stop_code": "1107", "stop_name": "Hutcheson Hall", "stop_lat": "37.22598", "stop_lon": "-80.42287" }, { "stop_code": "1108", "stop_name": "War Memorial Hall", "stop_lat": "37.22667", "stop_lon": "-80.42157" }, { "stop_code": "1335", "stop_name": "Old Glade/Glade Nbnd", "stop_lat": "37.2345", "stop_lon": "-80.43553" }, { "stop_code": "1103", "stop_name": "West Campus/Perry Nbnd", "stop_lat": "37.2289", "stop_lon": "-80.42745" }, { "stop_code": "1336", "stop_name": "University Mall Main Entrance", "stop_lat": "37.23429", "stop_lon": "-80.43418" }, { "stop_code": "1102", "stop_name": "Davidson Hall", "stop_lat": "37.22642", "stop_lon": "-80.42527" }, { "stop_code": "1331", "stop_name": "Toms Creek/Watson Sbnd", "stop_lat": "37.23824", "stop_lon": "-80.42658" }, { "stop_code": "1338", "stop_name": "Toms Creek/Hunt Club Sbnd", "stop_lat": "37.24203", "stop_lon": "-80.42765" }, { "stop_code": "1106", "stop_name": "McBryde Hall", "stop_lat": "37.23104", "stop_lon": "-80.4216" }, { "stop_code": "1333", "stop_name": "Toms Creek/Winston Sbnd", "stop_lat": "37.23438", "stop_lon": "-80.42564" }, { "stop_code": "1330", "stop_name": "Toms Creek/McBryde Sbnd", "stop_lat": "37.23954", "stop_lon": "-80.42695" }, { "stop_code": "1133", "stop_name": "CTAS Institute Bldg", "stop_lat": "37.23212", "stop_lon": "-80.42288" }, { "stop_code": "1332", "stop_name": "Gilbert Linkous Sbnd", "stop_lat": "37.23654", "stop_lon": "-80.42683" }, { "stop_code": "1217", "stop_name": "Vet School Ebnd", "stop_lat": "37.22962", "stop_lon": "-80.43758" }, { "stop_code": "1212", "stop_name": "Heather/Tall Oaks Nbnd", "stop_lat": "37.21773", "stop_lon": "-80.44823" }, { "stop_code": "1207", "stop_name": "Tall Oaks/Heather Ebnd", "stop_lat": "37.21719", "stop_lon": "-80.44864" }, { "stop_code": "1213", "stop_name": "Heather/Plymouth Nbnd", "stop_lat": "37.21964", "stop_lon": "-80.44807" }, { "stop_code": "1214", "stop_name": "Heather/Huntington Nbnd", "stop_lat": "37.22206", "stop_lon": "-80.4489" }, { "stop_code": "1206", "stop_name": "Tall Oaks/Foxhunt Ebnd", "stop_lat": "37.21576", "stop_lon": "-80.45046" }, { "stop_code": "1204", "stop_name": "Hethwood Square on Hethwood", "stop_lat": "37.21675", "stop_lon": "-80.45329" }, { "stop_code": "1203", "stop_name": "Prices Fork/Huntington Wbnd", "stop_lat": "37.22456", "stop_lon": "-80.44733" }, { "stop_code": "1200", "stop_name": "Prices Fork/Old Glade Wbnd", "stop_lat": "37.23149", "stop_lon": "-80.43459" }, { "stop_code": "1205", "stop_name": "Tall Oaks/Hethwood Ebnd", "stop_lat": "37.21447", "stop_lon": "-80.45221" }, { "stop_code": "1215", "stop_name": "Prices Fork/Huntington Ebnd", "stop_lat": "37.22491", "stop_lon": "-80.44635" }, { "stop_code": "1216", "stop_name": "Prices Fork/Plantation Ebnd", "stop_lat": "37.22531", "stop_lon": "-80.44513" }, { "stop_code": "1218", "stop_name": "Prices Fork/Old Glade Ebnd", "stop_lat": "37.23142", "stop_lon": "-80.43441" }, { "stop_code": "1202", "stop_name": "Prices Fork/Plantation Wbnd", "stop_lat": "37.22541", "stop_lon": "-80.44526" }, { "stop_code": "1201", "stop_name": "Vet School Wbnd", "stop_lat": "37.22961", "stop_lon": "-80.43781" }, { "stop_code": "1302", "stop_name": "Toms Creek/Watson Nbnd", "stop_lat": "37.23803", "stop_lon": "-80.4266" }, { "stop_code": "1337", "stop_name": "Toms Creek/Hunt Club Nbnd", "stop_lat": "37.24208", "stop_lon": "-80.42768" }, { "stop_code": "1301", "stop_name": "Gilbert Linkous Nbnd", "stop_lat": "37.23656", "stop_lon": "-80.42683" }, { "stop_code": "1303", "stop_name": "Toms Creek/McBryde Nbnd", "stop_lat": "37.24026", "stop_lon": "-80.42714" }, { "stop_code": "1300", "stop_name": "Toms Creek/Winston Nbnd", "stop_lat": "37.2348", "stop_lon": "-80.42588" }, { "stop_code": "1208", "stop_name": "Tall Oaks/Foxtrail Sbnd", "stop_lat": "37.21413", "stop_lon": "-80.44431" }, { "stop_code": "1210", "stop_name": "Tall Oaks/Foxridge Nbnd", "stop_lat": "37.21413", "stop_lon": "-80.4443" }, { "stop_code": "1220", "stop_name": "Heather/Plymouth Sbnd", "stop_lat": "37.21747", "stop_lon": "-80.44834" }, { "stop_code": "1219", "stop_name": "Heather/Tall Oaks Sbnd", "stop_lat": "37.22001", "stop_lon": "-80.44811" }, { "stop_code": "1209", "stop_name": "Stroubles Cr", "stop_lat": "37.21317", "stop_lon": "-80.44418" }, { "stop_code": "1211", "stop_name": "Tall Oaks/Copper Croft Nbnd", "stop_lat": "37.21599", "stop_lon": "-80.44533" }, { "stop_code": "1423", "stop_name": "Main/Turner Sbnd", "stop_lat": "37.23323", "stop_lon": "-80.41813" }, { "stop_code": "1406", "stop_name": "Giles/Patrick Henry Nbnd", "stop_lat": "37.24497", "stop_lon": "-80.41223" }, { "stop_code": "1422", "stop_name": "Main/Collegiate Ct Sbnd", "stop_lat": "37.2343", "stop_lon": "-80.41953" }, { "stop_code": "1403", "stop_name": "Lucas/Giles Ebnd", "stop_lat": "37.2393", "stop_lon": "-80.41671" }, { "stop_code": "1402", "stop_name": "Lucas/Main Ebnd", "stop_lat": "37.23966", "stop_lon": "-80.41841" }, { "stop_code": "1407", "stop_name": "Patrick Henry/Giles Wbnd", "stop_lat": "37.24532", "stop_lon": "-80.41287" }, { "stop_code": "1404", "stop_name": "Giles/Northview Nbnd", "stop_lat": "37.24095", "stop_lon": "-80.41624" }, { "stop_code": "1421", "stop_name": "Main/Kabrich Sbnd", "stop_lat": "37.236", "stop_lon": "-80.42107" }, { "stop_code": "1405", "stop_name": "Giles/Heights Nbnd", "stop_lat": "37.2429", "stop_lon": "-80.41447" }, { "stop_code": "1414", "stop_name": "Pheasant Run", "stop_lat": "37.24905", "stop_lon": "-80.41699" }, { "stop_code": "1415", "stop_name": "Seneca/Patrick Henry Sbnd", "stop_lat": "37.24742", "stop_lon": "-80.41756" }, { "stop_code": "1328", "stop_name": "Progress/Broce Sbnd", "stop_lat": "37.24235", "stop_lon": "-80.42226" }, { "stop_code": "1401", "stop_name": "Main/Lucas Nbnd S", "stop_lat": "37.23912", "stop_lon": "-80.41995" }, { "stop_code": "1400", "stop_name": "Main/Montgomery Nbnd", "stop_lat": "37.23806", "stop_lon": "-80.42051" }, { "stop_code": "1327", "stop_name": "Progress/University Terr Sbnd", "stop_lat": "37.2435", "stop_lon": "-80.42187" }, { "stop_code": "1430", "stop_name": "Patrick Henry/Seneca Wbnd", "stop_lat": "37.24693", "stop_lon": "-80.4169" }, { "stop_code": "1326", "stop_name": "Progress/Hunt Club Sbnd", "stop_lat": "37.24487", "stop_lon": "-80.42144" }, { "stop_code": "1408", "stop_name": "Patrick Henry/Main Wbnd", "stop_lat": "37.24607", "stop_lon": "-80.41435" }, { "stop_code": "1607", "stop_name": "Gables Shopping Center", "stop_lat": "37.2156", "stop_lon": "-80.40087" }, { "stop_code": "1619", "stop_name": "Main/Ardmore Nbnd", "stop_lat": "37.21419", "stop_lon": "-80.40033" }, { "stop_code": "1627", "stop_name": "Main/Lee Nbnd", "stop_lat": "37.22878", "stop_lon": "-80.41336" }, { "stop_code": "1623", "stop_name": "Main/Graves Nbnd", "stop_lat": "37.22235", "stop_lon": "-80.40636" }, { "stop_code": "1622", "stop_name": "Main/Sunset Nbnd", "stop_lat": "37.22094", "stop_lon": "-80.40477" }, { "stop_code": "1624", "stop_name": "Main/Hemlock Nbnd", "stop_lat": "37.22392", "stop_lon": "-80.40808" }, { "stop_code": "1620", "stop_name": "Blacksburg Square", "stop_lat": "37.21581", "stop_lon": "-80.40078" }, { "stop_code": "1642", "stop_name": "Main/S Hill Sbnd", "stop_lat": "37.20723", "stop_lon": "-80.399" }, { "stop_code": "1602", "stop_name": "Main/Eheart Sbnd", "stop_lat": "37.22565", "stop_lon": "-80.40997" }, { "stop_code": "1606", "stop_name": "Main/Faystone Sbnd", "stop_lat": "37.21957", "stop_lon": "-80.40324" }, { "stop_code": "1621", "stop_name": "Main/Cohee Nbnd", "stop_lat": "37.21941", "stop_lon": "-80.40287" }, { "stop_code": "1636", "stop_name": "Industrial Park/Transportation Res Ebnd", "stop_lat": "37.1936", "stop_lon": "-80.40028" }, { "stop_code": "1644", "stop_name": "Main/South Park Sbnd", "stop_lat": "37.20017", "stop_lon": "-80.40034" }, { "stop_code": "1626", "stop_name": "Main/Clay Nbnd", "stop_lat": "37.22676", "stop_lon": "-80.41118" }, { "stop_code": "1601", "stop_name": "Blacksburg Municipal Building", "stop_lat": "37.22761", "stop_lon": "-80.4121" }, { "stop_code": "1603", "stop_name": "Main/Eakin Sbnd", "stop_lat": "37.22478", "stop_lon": "-80.40902" }, { "stop_code": "1635", "stop_name": "Main/Hemlock Sbnd", "stop_lat": "37.22377", "stop_lon": "-80.40791" }, { "stop_code": "1638", "stop_name": "Professional Park Nbnd", "stop_lat": "37.19713", "stop_lon": "-80.40028" }, { "stop_code": "1643", "stop_name": "Main/Dowdy Sbnd", "stop_lat": "37.20275", "stop_lon": "-80.39939" }, { "stop_code": "1625", "stop_name": "Main/Eakin Nbnd", "stop_lat": "37.2251", "stop_lon": "-80.40937" }, { "stop_code": "1617", "stop_name": "Marlington/Main Wbnd", "stop_lat": "37.21146", "stop_lon": "-80.39962" }, { "stop_code": "1615", "stop_name": "Marlington/Emerald Wbnd", "stop_lat": "37.21246", "stop_lon": "-80.39607" }, { "stop_code": "1616", "stop_name": "Marlington/Grayland Wbnd", "stop_lat": "37.21189", "stop_lon": "-80.39805" }, { "stop_code": "1639", "stop_name": "Main/Dowdy Nbnd", "stop_lat": "37.20199", "stop_lon": "-80.39948" }, { "stop_code": "1614", "stop_name": "Marlington/Grissom Wbnd", "stop_lat": "37.21304", "stop_lon": "-80.39409" }, { "stop_code": "1613", "stop_name": "Grissom/Nellies Cave Nbnd", "stop_lat": "37.21271", "stop_lon": "-80.39359" }, { "stop_code": "1605", "stop_name": "Main/Airport Sbnd", "stop_lat": "37.22218", "stop_lon": "-80.40617" }, { "stop_code": "1612", "stop_name": "New Kent/Sussex Ebnd", "stop_lat": "37.21147", "stop_lon": "-80.39368" }, { "stop_code": "1640", "stop_name": "Main/S Hill Nbnd", "stop_lat": "37.20697", "stop_lon": "-80.39883" }, { "stop_code": "1609", "stop_name": "Fairfax/Ellett Ebnd", "stop_lat": "37.20866", "stop_lon": "-80.39672" }, { "stop_code": "1610", "stop_name": "Fairfax/New Kent Ebnd", "stop_lat": "37.209", "stop_lon": "-80.39606" }, { "stop_code": "1637", "stop_name": "Prosperity/Industrial Park Nbnd", "stop_lat": "37.19422", "stop_lon": "-80.39758" }, { "stop_code": "1611", "stop_name": "New Kent/Loudon Ebnd", "stop_lat": "37.20996", "stop_lon": "-80.39565" }, { "stop_code": "1604", "stop_name": "Main/Edgewood Sbnd", "stop_lat": "37.22288", "stop_lon": "-80.40694" }, { "stop_code": "1705", "stop_name": "Pratt Dr/Andrews Bldg Sbnd", "stop_lat": "37.20369", "stop_lon": "-80.41245" }, { "stop_code": "1709", "stop_name": "Pratt Dr/Andrews Bldg Sbnd", "stop_lat": "37.20401", "stop_lon": "-80.41248" }, { "stop_code": "1704", "stop_name": "Rec Fields Nbnd", "stop_lat": "37.21574", "stop_lon": "-80.41868" }, { "stop_code": "1713", "stop_name": "Research Ctr/N Knollwood Nbnd", "stop_lat": "37.20264", "stop_lon": "-80.40584" }, { "stop_code": "1710", "stop_name": "Kraft/Research Ctr Ebnd", "stop_lat": "37.19888", "stop_lon": "-80.40543" }, { "stop_code": "1700", "stop_name": "Rec Fields Sbnd", "stop_lat": "37.21482", "stop_lon": "-80.41841" }, { "stop_code": "1129", "stop_name": "Coliseum Parking Lot Sbnd", "stop_lat": "37.22211", "stop_lon": "-80.41977" }, { "stop_code": "1701", "stop_name": "Pratt Dr/Garvin Bldg Sbnd", "stop_lat": "37.20169", "stop_lon": "-80.41173" }, { "stop_code": "1716", "stop_name": "Research Ctr/S Knollwood Nbnd", "stop_lat": "37.19998", "stop_lon": "-80.40532" }, { "stop_code": "1714", "stop_name": "Kraft/Knowledgeworks 1 Bldg Sbnd", "stop_lat": "37.2001", "stop_lon": "-80.4079" }, { "stop_code": "1127", "stop_name": "Lane Stadium S Endzone Sbnd", "stop_lat": "37.21853", "stop_lon": "-80.41929" }, { "stop_code": "1702", "stop_name": "Pratt/Kraft Ebnd", "stop_lat": "37.20109", "stop_lon": "-80.41074" }, { "stop_code": "1708", "stop_name": "Pratt Dr/Garvin Bldg Nbnd", "stop_lat": "37.20169", "stop_lon": "-80.41171" }, { "stop_code": "1128", "stop_name": "Lane Stadium S Endzone Nbnd", "stop_lat": "37.21852", "stop_lon": "-80.41926" }, { "stop_code": "1706", "stop_name": "Kraft/Tech Center Dr Sbnd", "stop_lat": "37.20429", "stop_lon": "-80.41001" }, { "stop_code": "1703", "stop_name": "Airport", "stop_lat": "37.20528", "stop_lon": "-80.40851" }, { "stop_code": "1707", "stop_name": "Pratt/Kraft Wbnd", "stop_lat": "37.20114", "stop_lon": "-80.41065" }, { "stop_code": "1715", "stop_name": "Kraft/Moss Bldg Sbnd", "stop_lat": "37.20186", "stop_lon": "-80.40981" }, { "stop_code": "1317", "stop_name": "University City/Glade Nbnd", "stop_lat": "37.23627", "stop_lon": "-80.43433" }, { "stop_code": "1316", "stop_name": "University Mall Nbnd", "stop_lat": "37.2346", "stop_lon": "-80.43336" }, { "stop_code": "1324", "stop_name": "The Village on Patrick Henry Ebnd", "stop_lat": "37.24511", "stop_lon": "-80.42473" }, { "stop_code": "1320", "stop_name": "Shawnee on University City Ebnd", "stop_lat": "37.24234", "stop_lon": "-80.43291" }, { "stop_code": "1318", "stop_name": "University City/Broce Nbnd", "stop_lat": "37.23792", "stop_lon": "-80.43517" }, { "stop_code": "1321", "stop_name": "University City/Falcon Ebnd", "stop_lat": "37.24274", "stop_lon": "-80.43064" }, { "stop_code": "1325", "stop_name": "Patrick Henry/Progress Ebnd", "stop_lat": "37.24579", "stop_lon": "-80.42284" }, { "stop_code": "1322", "stop_name": "University City/Toms Creek Ebnd", "stop_lat": "37.243", "stop_lon": "-80.42957" }, { "stop_code": "1323", "stop_name": "Patrick Henry/Toms Creek Ebnd", "stop_lat": "37.24405", "stop_lon": "-80.42759" }, { "stop_code": "1319", "stop_name": "Shawnee on University City Nbnd", "stop_lat": "37.2414", "stop_lon": "-80.43498" }, { "stop_code": "1132", "stop_name": "Life Sciences 1 Bldg", "stop_lat": "37.22048", "stop_lon": "-80.42543" }, { "stop_code": "1130", "stop_name": "Oak Lane Nbnd", "stop_lat": "37.22514", "stop_lon": "-80.4362" }, { "stop_code": "1118", "stop_name": "Oak Lane North", "stop_lat": "37.22643", "stop_lon": "-80.43754" }, { "stop_code": "1119", "stop_name": "Oak Lane South", "stop_lat": "37.22487", "stop_lon": "-80.43636" }, { "stop_code": "1121", "stop_name": "I Lot/Cage Sbnd", "stop_lat": "37.22068", "stop_lon": "-80.42673" }, { "stop_code": "1117", "stop_name": "Overflow Lot Wbnd", "stop_lat": "37.22419", "stop_lon": "-80.43075" }, { "stop_code": "1120", "stop_name": "Overflow Lot Ebnd", "stop_lat": "37.22409", "stop_lon": "-80.43083" }, { "stop_code": "1109", "stop_name": "Eggleston Hall/Kent St", "stop_lat": "37.22803", "stop_lon": "-80.41969" }, { "stop_code": "1131", "stop_name": "Bioinfomatics Bldg", "stop_lat": "37.22116", "stop_lon": "-80.42709" }, { "stop_code": "1122", "stop_name": "Food Science Bldg", "stop_lat": "37.22043", "stop_lon": "-80.42574" }, { "stop_code": "1126", "stop_name": "Harper Hall", "stop_lat": "37.22235", "stop_lon": "-80.42348" }, { "stop_code": "1634", "stop_name": "Fairfax/Ellett Wbnd", "stop_lat": "37.20869", "stop_lon": "-80.39674" }, { "stop_code": "1641", "stop_name": "Fairfax Circle", "stop_lat": "37.20752", "stop_lon": "-80.39388" }, { "stop_code": "1711", "stop_name": "Research Ctr/Rimrock Sbnd", "stop_lat": "37.1961", "stop_lon": "-80.40397" }, { "stop_code": "1712", "stop_name": "Research Ctr/Rimrock Nbnd", "stop_lat": "37.1961", "stop_lon": "-80.40395" }, { "stop_code": "1645", "stop_name": "Professional Park Sbnd", "stop_lat": "37.19679", "stop_lon": "-80.40028" }, { "stop_code": "1646", "stop_name": "Prosperity/Industrial Park Sbnd", "stop_lat": "37.19422", "stop_lon": "-80.3977" }, { "stop_code": "1647", "stop_name": "Industrial Park/Transportation Res Wbnd", "stop_lat": "37.1937", "stop_lon": "-80.40028" }, { "stop_code": "1424", "stop_name": "Main/Lucas Nbnd N", "stop_lat": "37.2403", "stop_lon": "-80.41919" }, { "stop_code": "1431", "stop_name": "Main/Turner Nbnd", "stop_lat": "37.23394", "stop_lon": "-80.41904" }, { "stop_code": "1425", "stop_name": "Main/Northview Nbnd", "stop_lat": "37.24192", "stop_lon": "-80.41804" }, { "stop_code": "1409", "stop_name": "1500 North Main Nbnd", "stop_lat": "37.2491", "stop_lon": "-80.41291" }, { "stop_code": "1427", "stop_name": "Main/Patrick Henry Nbnd", "stop_lat": "37.24598", "stop_lon": "-80.41511" }, { "stop_code": "1416", "stop_name": "Main/Patrick Henry Sbnd", "stop_lat": "37.24598", "stop_lon": "-80.41511" }, { "stop_code": "1413", "stop_name": "Whipple/Givens Wbnd", "stop_lat": "37.25479", "stop_lon": "-80.41341" }, { "stop_code": "1411", "stop_name": "Main/Red Maple Nbnd", "stop_lat": "37.25313", "stop_lon": "-80.41092" }, { "stop_code": "1410", "stop_name": "Main/Giles Nbnd", "stop_lat": "37.25099", "stop_lon": "-80.4116" }, { "stop_code": "1429", "stop_name": "1500 North Main Sbnd", "stop_lat": "37.2495", "stop_lon": "-80.41262" }, { "stop_code": "1420", "stop_name": "Main/Montgomery Sbnd", "stop_lat": "37.23891", "stop_lon": "-80.42007" }, { "stop_code": "1426", "stop_name": "1200 North Main Nbnd", "stop_lat": "37.24327", "stop_lon": "-80.41707" }, { "stop_code": "1428", "stop_name": "Whipple/Courtney Sbnd", "stop_lat": "37.25248", "stop_lon": "-80.41276" }, { "stop_code": "1412", "stop_name": "Givens/Main Wbnd", "stop_lat": "37.25608", "stop_lon": "-80.41147" }, { "stop_code": "1418", "stop_name": "Main/Northview Sbnd", "stop_lat": "37.24153", "stop_lon": "-80.41831" }, { "stop_code": "1419", "stop_name": "Main/Lucas Sbnd", "stop_lat": "37.24016", "stop_lon": "-80.41929" }, { "stop_code": "1417", "stop_name": "1200 North Main Sbnd", "stop_lat": "37.24327", "stop_lon": "-80.41707" }, { "stop_code": "1630", "stop_name": "Marlington/Emerald Ebnd", "stop_lat": "37.2124", "stop_lon": "-80.39629" }, { "stop_code": "1631", "stop_name": "Grissom/Nellies Cave Sbnd", "stop_lat": "37.21242", "stop_lon": "-80.39342" }, { "stop_code": "1629", "stop_name": "Marlington/Grayland Ebnd", "stop_lat": "37.21186", "stop_lon": "-80.39817" }, { "stop_code": "1632", "stop_name": "New Kent/Sussex Wbnd", "stop_lat": "37.21144", "stop_lon": "-80.39375" }, { "stop_code": "1633", "stop_name": "New Kent/Loudon Wbnd", "stop_lat": "37.20974", "stop_lon": "-80.3957" }];

WinJS.Namespace.define("Global", {
    fromRouteCode: function (code) {
        if (this._fromRouteCode[code] != null) {
            return this._fromRouteCode[code];
        } else {
            return code;
        }
    },

    _fromRouteCode: _fromRouteCode,

    getStop: function (field, value) {
        for (var i = 0; i < this._stops.length; i++) {
            var stop = this._stops[i];
            if (stop[field] == value) return stop;
        }

        return null;
    },

    _stops: _stops,
    DEFAULT_LAT: 37.231422, 
    DEFAULT_LON: -80.413939,
});

(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;
    var nav = WinJS.Navigation;

    app.addEventListener("activated", function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }

            if (app.sessionState.history) {
                nav.history = app.sessionState.history;
            }
            args.setPromise(WinJS.UI.processAll().then(function () {

                document.getElementById("cmdHome").addEventListener("click", _cmdHome, false);
                document.getElementById("cmdCalendar").addEventListener("click", _cmdCalendar, false);
                document.getElementById("cmdMap").addEventListener("click", _cmdMap, false);


                if (nav.location) {
                    nav.history.current.initialPlaceholder = true;
                    return nav.navigate(nav.location, nav.state);
                } else {
                    return nav.navigate(Application.navigator.home);
                }
            }));

        }
    });

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. If you need to 
        // complete an asynchronous operation before your application is 
        // suspended, call args.setPromise().
        app.sessionState.history = nav.history;
    };

    app.start();


    function _cmdHome() {
        if (nav.location != "/pages/home/home.html") {
            nav.navigate("/pages/home/home.html");
        } else {
            document.getElementById("appbar").winControl.hide();
        }
    }

    function _cmdMap() {
        if (nav.location != "/pages/map/map.html") {
            nav.navigate("/pages/map/map.html");
        } else {
            document.getElementById("appbar").winControl.hide();
        }
    }

    function _cmdCalendar() {
        if (nav.location != "/pages/calendar/calendar.html") {
            nav.navigate("/pages/calendar/calendar.html");
        } else {
            document.getElementById("appbar").winControl.hide();
        }
    }
})();
