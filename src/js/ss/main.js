var colors = ["#f94144", "#f3722c", "#f8961e", "#f9844a", "#f9c74f", "#90be6d", "#43aa8b", "#4d908e", "#577590", "#277da1", "#b5c7bc", "#c9ada7", "#9a8c98", "#a4a4a4", "#22223b"];
var opacity = colors[0];
var prova = ["match", ["get", "rateTotal"], 0, opacity, 1, opacity, 2, opacity, 3, opacity, 4, opacity, 5, opacity, /* other */ opacity];
var fileName = [
  "airports",
  "buildings",
  "companies",
  "conventions",
  "embassies",
  "hospital",
  "hotels",
  "museums",
  "restaurants",
  "schools",
  "shoppingmalls",
  "stadiums",
  "stations",
  "theaters",
  "universities",
];
var threeColors1 = ["#ffbe0b", "#ff006e", "#3a86ff"];
var colButtons = "#1E1D1D";
var tudo = [];
var selectedCity = [];
var radiusSelected = [5];
var totals = [];
var totals5km = [];
var totals10km = [];
var areas1 = [];
var areas2 = [];
var selectedRating = [];
var domainRateVal = [[0], [0, 1, 2, 3, 4], [0], [0, 1, 2, 3, 4], [0], [0], [0, 1, 2, 3, 4], [0, 4], [0, 1, 2, 3, 4], [0], [0], [0, 4], [0], [0], [0]];
var filterRating = domainRateVal;
var domainButtons = [
  ["All"],
  ["1896-1989", "1990-2000", "2001-2006", "2007-2013", "2014-2020"],
  ["All"],
  ["400-500m ", "501-2.700m", "2701-14000m", "14001-75000m", ">75001m"],
  ["All"],
  ["All"],
  ["1★", "2★", "3★", "4★", "5★"],
  ["Museum", "Art"],
  ["1★", "2★", "3★", "Bib Gourmand", "Michelin Plate"],
  ["All"],
  ["All"],
  ["Shopping Centre", "Department Store"],
  ["All"],
  ["All"],
  ["All"],
];
var listSelected = [];
var filterTot = ["any"];
var keysCustom = [
  ["Name", "City", "Inter.Pax", "Domestic Pax"],
  ["Name", "City", "Height", "Year"],
  ["Company_EN", "City", "Sector", "Revenue"],
  ["venue_name", "City", "floor_area_m"],
  ["Embassy_EN", "City"],
  ["Hospital_EN", "City"],
  ["name", "City", "Rating", "Rooms"],
  ["Museum_EN", "City", "Type"],
  ["Name_EN", "City", "Rating"],
  ["School_EN", "City"],
  ["name", "City", "Type"],
  ["name", "City", "Sport", "Capacity", "Year"],
  ["Name", "City", "Type"],
  ["Theatre_name", "City"],
  ["Name_EN", "City", "Rank", "Students", "Inter. Students"],
];
var keysCustomJ = [
  ["名称", "都市", "国際線旅客数", "国内線旅客数"],
  ["名称", "都市", "高さ", "築年"],
  ["名称", "都市", "業種", "収益"],
  ["名称", "都市", "床面積"],
  ["名称", "都市"],
  ["名称", "都市"],
  ["名称", "都市", "評価", "客室数"],
  ["名称", "都市", "種別"],
  ["名称", "都市", "評価"],
  ["名称", "都市"],
  ["名称", "都市", "種別"],
  ["名称", "都市", "スポーツ", "収容人数", "開業年"],
  ["名称", "都市", "種別"],
  ["名称", "都市"],
  ["名称", "都市", "順位", "学生数", "留学生数"],
];

var titlesE = [
  ["Airports", "Major airports serving the target city."],
  ["Skyscrapers", "Buildings with a height of 100+ meters."],
  ["Fortune 500 Companies", "Companies appearing in the Fortune Global 500 which also have their HQ in the target city."],
  ["Convention & Event Spaces", "Convention centers and event spaces located in the target city."],
  ["Embassies", "Embassies and consulates located in the target city."],
  ["Hospitals", "General hospitals providing a wide range of medical services."],
  ["Hotels", "Hotels in the target city."],
  ["Museums & Galleries", "Museums and art galleries located in the target city."],
  ["Michelin Restaurants", "Restaurants with a Michelin star rating, as well as those with a Michelin Plate / Bib Gourmand."],
  ["International Schools", "International schools located in the target city."],
  ["Shopping Centers", "Major shopping centers in the target city."],
  ["Stadiums", "Stadiums with a capacity above 5,000 spectators."],
  ["Stations", "Train stations (metro / underground / subway etc) in the target city."],
  ["Theaters & Halls", "Theaters, concert halls, and auditoriums used for live performances."],
  ["Universities", "Universities ranked within the top 1000 of Times Higher Education's World University Rankings."],
];

var titlesJ = [
  ["空港", "主要な空港"],
  ["高層ビル", "高さ100m以上のビル"],
  ["世界トップ企業", "「フォーチュン・グローバル500」に掲載されている企業の本社"],
  ["コンベンションセンター・イベントスペース", "コンベンションセンターおよびイベントスペース"],
  ["大使館・領事館", "大使館および領事館"],
  ["総合病院", "幅広い診療科を持つ総合病院"],
  ["ホテル", "ホテル"],
  ["美術館・博物館・ギャラリー", "美術館・博物館・アートギャラリー"],
  ["レストラン", "ミシュランガイドに掲載されているレストラン（星/ミシュランプレート/ビブグルマン）"],
  ["インターナショナル・スクール", "インターナショナル・スクール"],
  ["ショッピング・センター", "主要なショッピング・センター"],
  ["スタジアム", "客席数5000席以上のスタジアム"],
  ["駅", "地下鉄および鉄道の駅"],
  ["劇場・ホール", "ライブ・パフォーマンスに使用される劇場、コンサートホール、公会堂"],
  ["世界トップ大学", "「世界大学ランキング（タイムズ・ハイアー・エデュケーション）」の上位1000位以内の大学"],
];

var citiesListE = ["New York", "London", "Paris", "Tokyo", "Hong Kong", "Shanghai", "Singapore", "Seoul"];
var citiesListJ = ["ニューヨーク", "ロンドン", "パリ", " 東京", "香港", "上海", "シンガポール", "ソウル"];

var fileNameTitleE = titlesE.map(function (x) {
  return x[0];
});
var fileNameTitleJ = titlesJ.map(function (x) {
  return x[0];
});

// GET SOURCE FEATURES WITH FILTER
function updateTotals() {
  var features1 = map.querySourceFeatures("cumulative", {
    sourceLayer: "cumulative",
    filter: filterTot,
  });

  var count = features1.map(function (d) {
    return d.id;
  });

  let ids = features1.map((o) => o.id);
  let filtered = features1.filter(({ id }, index) => !ids.includes(id, index + 1));
  console.log(features1.length);
  console.log(filtered.length);
  document.getElementById("number-filtered-val").innerHTML = filtered.length;
}

titlesE.forEach(function (item, index) {
  var newElement = document.createElement("option");
  newElement.value = fileName[index];
  newElement.title = item[1];
  newElement.text = item[0];
  document.getElementById("soft_skill_list").appendChild(newElement);
});

//CREATE TYPES COLORED BUTTONS
fileName.forEach(function (item, index) {
  var newGroup = document.createElement("div");
  newGroup.className = "btn-group class rate";
  newGroup.id = "rate" + index;
  newGroup.role = "group" + index;
  newGroup.style.display = "none";
  document.getElementById("rate-group").appendChild(newGroup);
  domainButtons[index].forEach(function (subItem, subIndex) {
    var newElement = document.createElement("button");
    newElement.className = "btn btn-secondary filter3 active";
    newElement.innerHTML = subItem;
    newElement.id = item;
    newElement.value = domainRateVal[index][subIndex];
    document.getElementById("rate" + index).appendChild(newElement);
  });
});

var language = ["eng"];

//CLICK ON TYPES COLORED BUTTONS
$("#rate-group button").on("click", function (e) {
  var clicked = this.dataset.layer;

  if (this.className == "btn btn-secondary filter3 active") {
    this.className = "btn btn-secondary filter3";
    this.style.opacity = 0.4;
  } else {
    this.className = "btn btn-secondary filter3 active";
    this.style.opacity = 1;
  }

  e.stopPropagation();

  fileName.forEach(function (item, index) {
    var ek = $(".filter3#" + item + ".active")
      .map((_, el) => parseInt(el.value))
      .get();
    filterRating[index] = ek;
  });

  filterType(listSelected);
});

//CREATE TYPES DROPDOWN AND FILTERING
$(".filter").prop("disabled", true).unbind("mouseenter mouseleave");

function filterType(item) {
  filterTot = ["any"];
  tudo = item;
  console.log(tudo);

  if (tudo.length == 0) {
    document.getElementById("subcat").style.display = "none";
    document.getElementById("number-filtered").style.display = "none";
    document.getElementById("number-filtered-val").style.display = "none";
    // tudo = ["aaa"];
  } else {
    document.getElementById("subcat").style.display = "block";
    document.getElementById("number-filtered").style.display = "block";
    document.getElementById("number-filtered-val").style.display = "block";
  }

  fileName.forEach(function (item, index) {
    if (tudo.includes(item)) {
      document.getElementById(index).style.display = "block";
      document.getElementById("rate" + index).style.display = "flex";
    } else {
      document.getElementById(index).style.display = "none";
      document.getElementById("rate" + index).style.display = "none";
    }
  });

  tudo.forEach(function (item, index) {
    if (radiusSelected == 5) {
      var filterRadius = ["==", "in_area_5km", 1];
    } else {
      var filterRadius = ["==", "in_area_10km", 1];
    }

    var propertyForFilter = "rateTotal_" + item;

    var filterArg = ["in", propertyForFilter];
    var indexFileName = fileName.indexOf(item);

    var filter1 = filterArg.concat(filterRating[indexFileName]);

    var filter2 = ["all", filterRadius, filter1];
    filterTot[index + 1] = filter2;
  });

  var threeColors = [
    ["match", ["get", "rateTotal"], 0, "#E1F2F8", 1, "#97B5FF", 2, "#5588F9", 3, "#4C6FBF", 4, "#425377", /* other */ "#E1F2F8"],
    ["match", ["get", "rateTotal"], 0, "#FFFDA4", 1, "#FFFF67", 2, "#FEF900", 3, "#D48301", 4, "#735301", /* other */ "#FFFDA4"],
    ["match", ["get", "rateTotal"], 0, "#FBBFAE", 1, "#FB817C", 2, "#F40607", 3, "#B4012A", 4, "#5C0100", /* other */ "#FBBFAE"],
  ];

  map.setFilter("rects", filterTot);
  map.setFilter("cumulative", filterTot);
  //map.setFilter("cumulative", filter);

  $(".filter").css("background-color", colButtons);
  if (item.length == 3) {
    map.setPaintProperty("rects", "fill-extrusion-color", ["match", ["get", "fileName"], item[0], threeColors1[0], item[1], threeColors1[1], item[2], threeColors1[2], /* other */ "#fff"]);
  } else if (item.length == 2) {
    map.setPaintProperty("rects", "fill-extrusion-color", ["match", ["get", "fileName"], item[0], threeColors1[0], item[1], threeColors1[1], /* other */ "#fff"]);
  } else if (item.length == 1) {
    map.setPaintProperty("rects", "fill-extrusion-color", ["match", ["get", "fileName"], item[0], threeColors1[0], /* other */ "#fff"]);
  }

  if (item.length == 3) {
    map.setPaintProperty("cumulative", "circle-color", ["match", ["get", "fileName"], item[0], threeColors1[0], item[1], threeColors1[1], item[2], threeColors1[2], /* other */ "#fff"]);
  } else if (item.length == 2) {
    map.setPaintProperty("cumulative", "circle-color", ["match", ["get", "fileName"], item[0], threeColors1[0], item[1], threeColors1[1], /* other */ "#fff"]);
  } else if (item.length == 1) {
    map.setPaintProperty("cumulative", "circle-color", ["match", ["get", "fileName"], item[0], threeColors1[0], /* other */ "#fff"]);
  }

  $("[data=" + item[0] + "]").css("background-color", threeColors1[0]);
  $("[data=" + item[1] + "]").css("background-color", threeColors1[1]);
  $("[data=" + item[2] + "]").css("background-color", threeColors1[2]);

  $("[id=" + item[0] + "]").css("background-color", threeColors1[0]);
  $("[id=" + item[1] + "]").css("background-color", threeColors1[1]);
  $("[id=" + item[2] + "]").css("background-color", threeColors1[2]);
  console.log(filterTot);
  updateTotals();
}

createDropdown();
function createDropdown() {
  jQuery("#soft_skill_list").multiselect({
    enableFiltering: false,
    maxHeight: 300,
    enableCaseInsensitiveFiltering: false,
    nonSelectedText: "Select Category",
    nSelectedText: "",
    numberDisplayed: 0,
    selectAll: false,
    onChange: function (option, checked) {
      // Get selected options.
      var selectedOptions = jQuery("#soft_skill_list option:selected");

      listSelected = [];
      for (i = 0; i < selectedOptions.length; i++) {
        //listSelected.push(selectedOptions[i].innerHTML.toLowerCase());
        listSelected.push(selectedOptions[i].value.toLowerCase());
      }

      filterType(listSelected);

      if (selectedOptions.length >= 3) {
        // Disable all other checkboxes.
        var nonSelectedOptions = jQuery("#soft_skill_list option").filter(function () {
          return !jQuery(this).is(":selected");
        });

        nonSelectedOptions.each(function () {
          var input = jQuery('input[value="' + jQuery(this).val() + '"]');
          input.prop("disabled", true);
          input.parent("li").addClass("disabled");
        });
      } else {
        // Enable all checkboxes.
        jQuery("#soft_skill_list option").each(function () {
          var input = jQuery('input[value="' + jQuery(this).val() + '"]');
          input.prop("disabled", false);
          input.parent("li").addClass("disabled");
        });
      }
    },
  });

  var shiftClick = jQuery.Event("click");
  shiftClick.shiftKey = true;

  $(".multiselect-container li *").click(function (event) {
    if (event.shiftKey) {
      //alert("Shift key is pressed");
      event.preventDefault();
      return false;
    } else {
      //alert('No shift hey');
    }
  });
}

//
function renewTab(titles) {
  document.getElementById("soft_skill_list").innerHTML = "";

  titles.forEach(function (item, index) {
    var newElement = document.createElement("option");
    newElement.value = fileName[index];
    newElement.title = item[1];
    newElement.text = item[0];
    document.getElementById("soft_skill_list").appendChild(newElement);
  });

  if (titles == titlesE) {
    fileName.forEach(function (item, index) {
      document.getElementById(index).innerText = fileNameTitleE[index];
    });
  } else {
    fileName.forEach(function (item, index) {
      document.getElementById(index).innerText = fileNameTitleJ[index];
    });
  }

  jQuery("#soft_skill_list").multiselect("rebuild");
}

function transalteEng() {
  document.getElementById("button0").innerText = "Select City";
  document.getElementById("city").innerText = "Click a City in the Map";
  document.getElementById("green").innerText = "Green";
  document.getElementById("streets").innerText = "Cycling";
  document.getElementById("airports").innerText = "Airports";
  for (i = 0; i < 8; i++) {
    document.getElementById("city_" + i).innerText = citiesListE[i];
  }
  document.getElementById("subcat").innerText = "Filter sub-categories";
  renewTab(titlesE);
  $(".multiselect-selected-text").text("Select Category");
}

function transalteJap() {
  document.getElementById("button0").innerText = "都市を選択";
  document.getElementById("city").innerText = "地図上の都市をクリック";
  document.getElementById("green").innerText = "緑地";
  document.getElementById("streets").innerText = "自転車ルート";
  document.getElementById("airports").innerText = "空港";
  for (i = 0; i < 8; i++) {
    document.getElementById("city_" + i).innerText = citiesListJ[i];
  }
  document.getElementById("subcat").innerText = "フィルターサブカテゴリー";
  renewTab(titlesJ);
  $(".multiselect-selected-text").text("カテゴリを選択");
}

//TOGGLE RADIUS LAYERS
$("#eng").on("click", function (e) {
  transalteEng();
  language = "eng";
  document.getElementById("eng").className = "btn btn-secondary filter2 active";
  document.getElementById("jap").className = "btn btn-secondary filter2 non";
  document.getElementById("eng").style.opacity = "1";
  document.getElementById("jap").style.opacity = "0.4";
});
$("#jap").on("click", function (e) {
  transalteJap();
  language = "jap";
  document.getElementById("eng").className = "btn btn-secondary filter2 non";
  document.getElementById("jap").className = "btn btn-secondary filter2 active";
  document.getElementById("eng").style.opacity = "0.4";
  document.getElementById("jap").style.opacity = "1";
});

//LOAD MAPBOX STYLE

var center = [3.842, 34.691];
var zoom = 1.95;

mapboxgl.accessToken = "pk.eyJ1IjoidmluY2Vuem8tbSIsImEiOiJjazkxODJsc2UwMXFvM2Zud3o0dnR5ejl6In0.mAQ5Dz6EhfUPwOoavcXj9w";
const map = new mapboxgl.Map({
  attributionControl: false,
  container: "map",
  style: "mapbox://styles/vincenzo-m/ckbc7weli0obg1io1a2z6u02m",
  center: center,
  zoom: zoom,
  bearing: 0,
  pitch: 0,
});

var nav = new mapboxgl.NavigationControl();
map.addControl(nav, "top-right");

map.addControl(
  new mapboxgl.AttributionControl({
    customAttribution: '© <a href="https://www.deepmoire.com/" target="_blank";">DeepMoiré</a>',
  })
);

//POP-UP OPTIONS
var popup = new mapboxgl.Popup({
  closeButton: false,
  closeOnClick: false,
  // anchor: 'bottom-left',
  // offset: [linearOffset, -linearOffset]
});

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function onlyUnique(value, index, self) {
  return self.indexOf(value) === index;
}

//LOAD MAP
map.on("load", function () {
  //ADD CITIES GEOJSON
  d3.json("data/minimap-points-01.geojson", function (err, data) {
    if (err) throw err;

    var cities = data.features.map(function (d) {
      return d.properties.city;
    });

    var citiesCoord = data.features.map(function (d) {
      return d.geometry.coordinates;
    });

    // CREATE CIRCLES AREAS
    circleColl1 = [];
    circleColl2 = [];
    citiesCoord.forEach(function (item, index) {
      var options = { steps: 50, units: "kilometers", properties: { city: cities[index] } };
      var circle = turf.circle(item, 5, options);
      circleColl1.push(circle);
    });
    areas1 = turf.featureCollection(circleColl1);

    citiesCoord.forEach(function (item, index) {
      var options = { steps: 50, units: "kilometers", properties: { city: cities[index] } };
      var circle = turf.circle(item, 10, options);
      circleColl2.push(circle);
    });
    areas2 = turf.featureCollection(circleColl2);

    map.addSource("areas1", {
      type: "geojson",
      data: areas1,
    });

    map.addLayer(
      {
        id: "areas1",
        type: "line",
        source: "areas1",
        minzoom: 7,
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#fff",
          "line-opacity": 0.5,
          "line-width": ["interpolate", ["linear"], ["zoom"], 6, 0.5, 12, 2],
          "line-dasharray": [0, 2],
        },
      },
      "settlement-minor-label"
    );

    map.addSource("areas2", {
      type: "geojson",
      data: areas2,
    });

    map.addLayer(
      {
        id: "areas2",
        type: "line",
        source: "areas2",
        minzoom: 7,
        layout: {
          visibility: "none",
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": "#fff",
          "line-opacity": 0.5,
          "line-width": ["interpolate", ["linear"], ["zoom"], 6, 0.5, 12, 2],
          "line-dasharray": [0, 2],
        },
      },
      "settlement-minor-label"
    );

    fileName.forEach(function (item, index) {
      var propertyTotals = data.features.map(function (d) {
        var int = parseInt(d.properties[item]);
        return int;
      });
      var sum = propertyTotals.reduce((a, b) => a + b, 0);
      totals.push(numberWithCommas(sum));
    });

    // CONTROL CITIES DROPDOWN
    $(".first .dropdown-item").click(function () {
      var selText = $(this).text();
      var selId = $(this).attr("value");

      $(this).parents().eq(0).prev().text(selText);
      $(this).parents().eq(0).prev().attr("value", selId);

      map.flyTo({
        center: citiesCoord[selId],
        zoom: 14,
      });
    });

    map.addSource("citypoints", {
      type: "geojson",
      data: data,
    });

    //ADD CITY CENTER ICON
    map.loadImage("img/icons.png", function (error, image) {
      if (error) throw error;
      map.addImage("center", image);

      map.addLayer({
        id: "points",
        type: "symbol",
        minzoom: 7,
        source: "citypoints",
        layout: {
          "icon-image": "center",
          "icon-size": ["interpolate", ["linear"], ["zoom"], 7, 0.1, 12, 0.2],
        },
      });
    });

    map.addLayer(
      {
        id: "citypoints",
        source: "citypoints",
        type: "circle",

        maxzoom: 5,
        paint: {
          "circle-color": "#FFFFFF",
          "circle-radius": 10,
          "circle-opacity": 0.7,
        },
      },
      "settlement-minor-label"
    );

    var domain = [
      [0, 1],
      [1896, 1990, 2001, 2007, 2014, 2020],
      [0, 1],
      [50, 501, 2701, 14001, 75001],
      [0, 1],
      [0, 1],
      [1, 2, 3, 4, 5],
      [1, 2, 3, "Bib Gourmand", "Michelin Plate"],
      [0, 1],
      [0, 1],
      [0, 1],
      [0, 1],
      [0, 1],
      [0, 1],
      [0, 1],
    ];

    var fileNameiiiiiiiiii = [
      "airports",
      "buildings",
      "companies",
      "conventions",
      "embassies",
      "hospital",
      "hotels",
      "museums",
      "restaurants",
      "schools",
      "shoppingmalls",
      "stadiums",
      "stations",
      "theaters",
      "universities",
    ];

    // CREATE RATING PROPERTY USING D3 DOMAIN
    var fiveStars = [0, 1, 2, 3, 4];
    var scaled0 = d3.scaleLinear().domain(domain[1]).range(fiveStars)("2019");
    scaled0 = Math.round(scaled0);
    if (scaled0 > 5) {
      scaled0 = 5;
    }

    var rateProperty = ["fileName", "year", "fileName", "floor_area_m", "fileName", "fileName", "rating", "type", "rating", "fileName", "type", "fileName", "fileName", "fileName", "fileName"];
    var exceptions = ["Bib Gourmand", "Michelin Plate", "art", "museum", "Shopping Centre", "department", "mall"];
    var exceptionsSub = ["4", "5", "5", "1", "1", "5"];

    // ADD POINTS GEOJSON
    d3.json("data/cumulative.geojson", function (err, dataCumulative) {
      if (err) throw err;

      var gigi = [];

      dataAirports = { type: "FeatureCollection" };
      dataAirports.features = dataCumulative.features.filter(function (d) {
        return d.properties.fileName == "airports";
      });

      dataCumulative.features = dataCumulative.features.filter(function (d) {
        return d.properties.floor_area_m > 399 || typeof d.properties.floor_area_m == "undefined";
      });

      //PRE-PROCESS DATA
      dataCumulative.features = dataCumulative.features.map(function (d) {
        d.properties["id_code"] = d.id;
        var fileNameRead = d.properties.fileName;
        d.properties.city = d.properties.city.toLowerCase();
        var indexIn1 = [];
        var indexIn2 = [];

        areas1.features.forEach(function (item, index) {
          var poligono = turf.polygon(item.geometry.coordinates);
          var punto = turf.points([d.geometry.coordinates]);

          var within = turf.pointsWithinPolygon(punto, poligono);
          indexIn1.push(within.features.length);
        });

        areas2.features.forEach(function (item, index) {
          var poligono = turf.polygon(item.geometry.coordinates);
          var punto = turf.points([d.geometry.coordinates]);

          var within = turf.pointsWithinPolygon(punto, poligono);
          indexIn2.push(within.features.length);
        });

        indexIn1 = indexIn1.reduce((x, y) => x + y);
        indexIn2 = indexIn2.reduce((x, y) => x + y);

        d.properties["in_area_5km"] = indexIn1;
        d.properties["in_area_10km"] = indexIn2;

        var indexCategory = fileName.indexOf(d.properties.fileName);

        var toScale = "";

        exceptions.forEach(function (item, index) {
          if (d.properties[rateProperty[indexCategory]] == item) {
            toScale = exceptionsSub[index];
          } else {
            toScale = d.properties[rateProperty[indexCategory]];
          }
        });

        var scaled = d3.scaleLinear().domain(domain[indexCategory]).range(fiveStars)(toScale);

        var scaled2 = Math.round(scaled);
        if (scaled2 > 4) {
          scaled2 = 4;
        }
        gigi.push(scaled);

        //var scaled = d3.scaleLinear().domain([0, 100000]).range(fiveStars)(d.properties[rateProperty[indexCategory]]);

        if (typeof scaled2 == "undefined" || scaled2 == null || isNaN(scaled2)) {
          d.properties["rateTotal_" + fileNameRead] = 0;
        } else {
          d.properties["rateTotal_" + fileNameRead] = scaled2;
        }

        //d.properties["rateTotal"] = d3.scaleLinear().domain([0, 100000]).range(fiveStars)(d.id);
        //console.log(rateProperty[indexCategory]);
        //d.properties["rateTotal"] = d3.scaleLinear().domain([0, 10]).range([0, 100])(5);
        return d;
      });

      var all5km = dataCumulative.features.filter(function (d) {
        return d.properties.in_area_5km == 1;
      });

      var all10km = dataCumulative.features.filter(function (d) {
        return d.properties.in_area_10km == 1;
      });

      console.log(dataCumulative);
      //ADD TOTALS VALUES FOR DIFFERENT RADIUS TO THE CITY GEOJSON
      data.features = data.features.map(function (d) {
        fileName.forEach(function (item, index) {
          var dataCity5 = all5km.filter(function (d) {
            return d.properties.city == d.properties.city;
          });

          var specificSum5 = dataCity5.filter(function (d) {
            return d.properties.fileName == item;
          });

          var dataCity10 = all10km.filter(function (d) {
            return d.properties.city == d.properties.city;
          });

          var specificSum10 = dataCity10.filter(function (d) {
            return d.properties.fileName == item;
          });
          d.properties[item] = [numberWithCommas(specificSum5.length), numberWithCommas(specificSum10.length)];
        });

        return d;
      });

      // fileName.forEach(function (item, index) {
      //   var specificSum = dataCity.filter(function (d) {
      //     return d.properties.fileName == item;
      //   });
      //   totals5km.push(numberWithCommas(specificSum.length));
      //   var specificSum = all10km.filter(function (d) {
      //     return d.properties.fileName == item;
      //   });
      //   totals10km.push(numberWithCommas(specificSum.length));
      // });

      //MOUSE BEHAVIOUR FOR CITIES
      map.on("mouseenter", "citypoints", function () {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("click", "citypoints", function (e) {
        selectedCity = [];
        var coord = e.features[0].geometry.coordinates;
        var callP = e.features[0].properties;
        var cityTag = e.features[0].properties.city;
        var coord = e.features[0].geometry.coordinates;
        embassiesCountCity = e.features[0].properties.embassies;
        companiesCountCity = e.features[0].properties.companies;
        $("#city").text(cityTag);

        fileName.forEach(function (item, index) {
          document.getElementById(index).innerHTML = item + "   " + "<span class='number5'>" + callP[item][0] + "</span>" + "<span class='number10'>" + callP[item][1] + "</span>";
          selectedCity.push(callP[item]);
        });

        map.flyTo({
          center: coord,
          zoom: 14,
        });
      });

      map.on("mouseleave", "citypoints", function () {
        map.getCanvas().style.cursor = "";
      });

      map.addSource("cumulative", {
        type: "geojson",
        data: dataCumulative,
      });

      // Load an image from an external URL.
      map.loadImage("img/plane.png", function (error, image) {
        if (error) throw error;

        // Add the image to the map style.
        map.addImage("plane", image);

        // Add a data source containing one point feature.
        map.addSource("airports", {
          type: "geojson",
          data: dataAirports,
        });

        // Add a layer to use the image to represent the data.
        map.addLayer({
          id: "airports",
          type: "symbol",
          minzoom: 6,
          source: "airports", // reference the data source
          layout: {
            visibility: "visible",
            "icon-image": "plane", // reference the image
            "icon-size": ["interpolate", ["linear"], ["zoom"], 6, 0.1, 20, 0.5],
          },
        });
      });

      //CREATE TYPES COLORED BUTTONS
      fileName.forEach(function (item, index) {
        var newElement = document.createElement("td");
        newElement.className = "filter";
        newElement.style.backgroundColor = colButtons;
        //newElement.innerHTML = fileNameTitleE[index] + "   " + "<span class='number'>" + totals[index] + "</span>";
        newElement.textContent = fileNameTitleE[index];
        newElement.style.display = "none";
        newElement.id = index;
        newElement.setAttribute("data", item);
        var newButton = document.createElement("td");
        document.getElementById("buttons-group").appendChild(newElement);
      });

      //CONTROL GREEN AND STREETS BUTTONS

      for (i = 0; i < 7; i++) {
        var greenLayer = "green" + i;
        map.setLayoutProperty(greenLayer, "visibility", "visible");
      }

      $("#buttons-group2 button").on("click", function (e) {
        var clickedLayerA = this.dataset.layer;

        if (this.className == "btn btn-secondary filter2b active") {
          this.className = "btn btn-secondary filter2b";

          this.style.opacity = 0.4;
        } else {
          this.className = "btn btn-secondary filter2b active";
          this.style.opacity = 1;
        }

        clickedLayerA = clickedLayerA.split("&");

        e.stopPropagation();

        clickedLayerA.forEach(function (item, i) {
          var visibility = map.getLayoutProperty(item, "visibility");

          if (visibility === "visible") {
            map.setLayoutProperty(item, "visibility", "none");
          } else {
            map.setLayoutProperty(item, "visibility", "visible");
          }
        });
      });

      function updateRadius() {
        var selectedOptions = jQuery("#soft_skill_list option:selected");
        var listSelected = [];
        for (i = 0; i < selectedOptions.length; i++) {
          listSelected.push(selectedOptions[i].value.toLowerCase());
        }
        filterType(listSelected);
      }

      //TOGGLE RADIUS LAYERS
      $("#5km").on("click", function (e) {
        radiusSelected = 5;
        updateRadius();
        //map.setPaintProperty("rects", "fill-extrusion-opacity", ["match", ["get", "in_area_5km"], 0, 0.1, 1, 1, /* other */ 0]);
        document.getElementById("5km").className = "btn btn-secondary filter2 active";
        document.getElementById("10km").className = "btn btn-secondary filter2 non";
        document.getElementById("5km").style.opacity = "1";
        document.getElementById("10km").style.opacity = "0.4";
        map.setLayoutProperty("areas1", "visibility", "visible");
        map.setLayoutProperty("areas2", "visibility", "none");
      });
      $("#10km").on("click", function (e) {
        radiusSelected = 10;
        updateRadius();
        document.getElementById("5km").className = "btn btn-secondary filter2 non";
        document.getElementById("10km").className = "btn btn-secondary filter2 active";
        document.getElementById("5km").style.opacity = "0.4";
        document.getElementById("10km").style.opacity = "1";
        map.setLayoutProperty("areas1", "visibility", "none");
        map.setLayoutProperty("areas2", "visibility", "visible");
      });

      //CREATE POINTS LAYER
      map.addLayer(
        {
          id: "cumulative",
          source: "cumulative",
          type: "circle",
          filter: ["==", "fileName", "aaa"],
          layout: {
            visibility: "visible",
          },
          minzoom: 7,
          paint: {
            "circle-radius": ["interpolate", ["linear"], ["zoom"], 10, 1, 18, 9, 20, 20],
            "circle-opacity": 1,
            "circle-color": "#007ACC",
            // "circle-stroke-width": ["interpolate", ["linear"], ["zoom"], 11, 0.4, 18, 1.2, 20, 3],
            // "circle-stroke-color": "#fff",
          },
        },
        "settlement-minor-label"
      );

      var pointsEx = dataCumulative.features.map(function (d) {
        return d.geometry.coordinates;
      });

      var propEx = dataCumulative.features.map(function (d) {
        return d.properties;
      });

      // CREATE BARS LAYER
      var radius = 0.005;
      circleColl = [];
      pointsEx.forEach(function (item, index) {
        var options = { steps: 10, units: "kilometers", properties: propEx[index] };
        var circle = turf.circle(item, radius, options);
        circleColl.push(circle);
      });

      var collection = turf.featureCollection(circleColl);

      map.addSource("buildingBase", {
        type: "geojson",
        data: collection,
      });

      map.addLayer(
        {
          id: "rects",
          type: "fill-extrusion",
          source: "buildingBase",
          filter: ["==", "fileName", "aaa"],
          paint: {
            "fill-extrusion-color": [
              "match",
              ["get", "fileName"],
              fileName[0],
              prova,
              fileName[1],
              colors[1],
              fileName[2],
              colors[2],
              fileName[3],
              colors[3],
              fileName[4],
              colors[4],
              fileName[5],
              colors[5],
              fileName[6],
              colors[6],
              fileName[7],
              colors[7],
              fileName[8],
              colors[8],
              fileName[9],
              colors[9],
              fileName[10],
              colors[10],
              fileName[11],
              colors[11],
              fileName[12],
              colors[12],
              fileName[13],
              colors[13],
              fileName[14],
              colors[14],
              /* other */ "#fff",
            ],
            //"fill-extrusion-color": "#4AACB5",
            "fill-extrusion-height": 1,
            "fill-extrusion-base": 0,
            //"fill-extrusion-opacity": ["match", ["get", "in_area"], 5, 0.1, 10, 0.7, /* other */ 1],
          },
          layout: {
            visibility: "none",
          },
        },
        "settlement-minor-label"
      );

      map.addSource("rects", {
        type: "geojson",
        data: collection,
      });

      //GET CENTER OF BUILDINGS POLYGONS
      var geomPolygons = collection.features.map(function (d) {
        return d.geometry.coordinates;
      });

      var geomId = collection.features.map(function (d) {
        return d.properties.id_code;
      });

      var geomFileName = collection.features.map(function (d) {
        return d.properties.fileName;
      });

      var centerPolygons = [];
      geomPolygons.forEach(function (item, index) {
        var polygon = turf.polygon(item);
        var center = turf.centerOfMass(polygon);
        centerPolygons.push(center);
      });

      //DEFINE DRAWING ACTIONS
      var draw = new MapboxDraw({
        displayControlsDefault: false,
        controls: {
          polygon: true,
          trash: true,
          line_string: true,
        },
      });
      map.addControl(draw, "top-right");

      //ZOOM OUT ON BUTTON CLICK
      $("#button-zoom").click(function () {
        draw.deleteAll();
        cleanAll();
        if ($(window).width() < 500) {
          document.getElementById("mobile").style.top = "83%";
        }
        $("#city").text("Click a City in the Map");
        //$("#city").css("font-size", 20);
        fileName.forEach(function (item, index) {
          document.getElementById(index).innerHTML = item + "   " + "<span class='number'>" + totals[index] + "</span>";
        });
        map.flyTo({
          center: center,
          zoom: zoom,
          bearing: 0,
          pitch: 0,
        });
      });

      var countPoly = [];
      map.on("draw.create", updateFilter);
      map.on("draw.delete", updateFilter);
      map.on("draw.update", updateFilter);

      function updateFilter(e) {
        var areaDrawn = draw.getAll();

        //FIND LINE-STRING AND CALCULATE LENGTH
        var filteredLine = areaDrawn.features.filter(function (d) {
          return d.geometry.type === "LineString";
        });

        var lineExtremes = filteredLine.map(function (d) {
          return d.geometry.coordinates;
        });
        if (lineExtremes.length != 0) {
          var line = turf.lineString(lineExtremes[0], lineExtremes[1]);
          var length = turf.length(line, { units: "kilometers" });

          var lenght2 = (Math.round(length * 100) / 100).toFixed(2);

          var lenght3 = lenght2.toString() + " km";
          var gigi = lineExtremes[0][0];

          var point1 = turf.point(lineExtremes[0][0]);
          var point2 = turf.point(lineExtremes[0][1]);

          var midpoint = turf.midpoint(point1, point2);

          var midpointCoord = midpoint.geometry.coordinates;

          popup.setHTML(lenght3).setLngLat(midpointCoord).addTo(map);
        } else {
        }

        //FIND POLYGONS AND FILTER BUILDINGS INSIDE IT

        var filteredPoly = areaDrawn.features.filter(function (d) {
          return d.geometry.type === "Polygon";
        });

        var collection2 = turf.featureCollection(filteredPoly);

        var geomDrawn = collection2.features.map(function (d) {
          return d.geometry.coordinates;
        });

        countPoly.push(geomDrawn.length);

        var centerOnly = centerPolygons.map(function (d) {
          return d.geometry.coordinates;
        });

        var points = [];
        centerOnly.forEach(function (item, i) {
          var processId = geomId[i].toString();
          var point = turf.point(centerOnly[i], { id: processId, fileName: geomFileName[i] });
          points.push(point);
        });

        var fc = turf.featureCollection(points);

        var idArray = [];
        var fileNameArray = [];
        geomDrawn.forEach(function (item) {
          var searchWithin = turf.polygon(item);

          var ptsWithin = turf.pointsWithinPolygon(fc, searchWithin);

          var propId = ptsWithin.features.map(function (d) {
            return d.properties.id;
          });

          var propFileName = ptsWithin.features.map(function (d) {
            return d.properties.fileName;
          });
          fileNameArray.push(propFileName);
          idArray.push(propId);
        });

        var idArrFlat = idArray.flat();
        var fileNameArrayFlat = fileNameArray.flat();

        var uniqueId = [];
        $.each(idArrFlat, function (i, el) {
          if ($.inArray(el, uniqueId) === -1) uniqueId.push(el);
        });

        var inList = ["in", "id_code"];

        uniqueId.forEach(function (item) {
          inList.push(parseInt(item));
        });

        var filterArg = ["in", "fileName"];
        var globalFilter = filterArg.concat(tudo);

        var allFilters = ["all", inList, globalFilter];

        if (idArrFlat.length == 0) {
          map.setFilter("rects", globalFilter);
          map.setFilter("cumulative", globalFilter);

          fileName.forEach(function (item, index) {
            document.getElementById(index).innerHTML = item + "   " + "<span class='number'>" + selectedCity[index] + "</span>";
          });
        } else {
          map.setFilter("rects", allFilters);
          map.setFilter("cumulative", allFilters);
          fileName.forEach(function (item, index) {
            var unique = fileNameArrayFlat.filter(function (d) {
              return d == item;
            });

            document.getElementById(index).innerHTML = item + "   " + "<span class='number'>" + unique.length + "</span>";
          });
        }
      }

      //________________________________________________________________________________-
      //DOWNLOAD CSV

      $("#button-download").click(function () {
        var rendered = map.queryRenderedFeatures({ layers: ["cumulative"] });

        var limitFeatures = 20;
        var limited = rendered.slice(0, limitFeatures);

        var featuresFiltered = turf.featureCollection(rendered);

        var propertiesToCsv = [];

        for (var i = 0, len = featuresFiltered.features.length; i < len; i++) {
          var keys = Object.keys(featuresFiltered.features[i].properties);

          propertiesToCsv.push(keys);
        }

        propertiesToCsv1 = propertiesToCsv.flat(1);
        propertiesManual = [
          "fileName",
          "name",
          "name",
          "company_en",
          "venue_name",
          "embassy_en",
          "hospital_en",
          "name",
          "museum_en",
          "name_en",
          "school_en",
          "name",
          "name",
          "name",
          "theatre_name",
          "name_en",
        ];

        propertiesToCsv2 = propertiesManual.filter(onlyUnique);

        console.log(propertiesToCsv2);

        var ajo = [];

        propertiesToCsv2.forEach(function (item) {
          var prop = featuresFiltered.features.map(function (d) {
            if (!(item in d.properties) || d.properties[item] == "") {
              return "nd";
            } else {
              return d.properties[item];
            }
          });

          ajo.push(prop);
        });

        var transposeAjo = ajo[0].map((_, colIndex) => ajo.map((row) => row[colIndex]));
        var newArray = $.merge(propertiesToCsv2, transposeAjo);
        console.log(transposeAjo);
        newArray = newArray.flat();

        var bibo = [];
        newArray.forEach(function (item) {
          var string = item.toString();
          var cleaned = string.split(",").join("-");
          bibo.push(cleaned);
        });

        var typeList = ajo[6];

        var embassiesSel = typeList.reduce(function (n, val) {
          return n + (val === "embassy");
        }, 0);

        var companiesSel = typeList.reduce(function (n, val) {
          return n + (val === "company");
        }, 0);

        embassiesCount = embassiesSel;
        companiesCount = companiesSel;

        var rows = [],
          size = transposeAjo[0].length;
        console.log(size);
        while (bibo.length > 0) rows.push(bibo.splice(0, size));

        let csvContent = "data:text/csv;charset=utf-8,";

        rows.forEach(function (rowArray) {
          let row = rowArray.join(",");
          csvContent += row + "\r\n";
        });

        var encodedUri = encodeURI(csvContent);
        var link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "DataDownload.csv");
        document.body.appendChild(link); // Required for FF

        link.click(); // This will download the data file named "my_data.csv".
      });

      //CREATE AIRPORTS POP-UP
      map.on("mouseenter", "airports", function () {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseenter", "airports", function (e) {
        var callP = e.features[0].properties;
        var coord = e.features[0].geometry.coordinates;
        console.log(coord);
        var indexFileName = fileName.indexOf(callP.fileName);
        // var coordLat = coord[1].toFixed(6);
        // var coordLng = coord[0].toFixed(6);

        var infoShow = [];

        var keysListO = Object.keys(callP);
        var keysList = keysCustom[indexFileName];
        console.log(callP.fileName);
        console.log(keysListO);
        console.log(keysList);
        var infoType = "<div class='label1'>" + "Type" + "</div>" + "<div class='label2'>" + callP.fileName + "</div>";
        // var infoLat = "<div class='label1'>" + "Lat" + "</div>" + "<div class='label2'>" + coordLat + "</div>";
        // var infoLng = "<div class='label1'>" + "Lon" + "</div>" + "<div class='label2'>" + coordLng + "</div>";
        infoShow.push(infoType);
        keysList.forEach(function (item, i) {
          item = item.toLowerCase();

          var htmlLine = "<div class='label1'>" + item + "</div>" + "<div class='label2'>" + callP[item] + "</div>";

          infoShow.push(htmlLine);
        });

        // infoShow.push(infoLat);
        // infoShow.push(infoLng);

        var infoShow = infoShow.join("<p>");
        popup.setHTML(infoShow).setLngLat(e.lngLat).addTo(map);
      });

      map.on("mouseleave", "airports", function () {
        map.getCanvas().style.cursor = "";
        popup.remove();
      });

      //CREATE BUILDING POP-UP 3D
      map.on("mouseenter", "rects", function () {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseenter", "rects", function (e) {
        var callP = e.features[0].properties;
        var coord = e.features[0].geometry.coordinates;
        console.log(coord);
        var indexFileName = fileName.indexOf(callP.fileName);
        // var coordLat = coord[1].toFixed(6);
        // var coordLng = coord[0].toFixed(6);

        var infoShow = [];

        var keysListO = Object.keys(callP);
        var keysList = keysCustom[indexFileName];
        console.log(callP.fileName);
        console.log(keysListO);
        console.log(keysList);
        var infoType = "<div class='label1'>" + "Type" + "</div>" + "<div class='label2'>" + callP.fileName + "</div>";
        // var infoLat = "<div class='label1'>" + "Lat" + "</div>" + "<div class='label2'>" + coordLat + "</div>";
        // var infoLng = "<div class='label1'>" + "Lon" + "</div>" + "<div class='label2'>" + coordLng + "</div>";
        infoShow.push(infoType);
        keysList.forEach(function (item, i) {
          item = item.toLowerCase();

          var htmlLine = "<div class='label1'>" + item + "</div>" + "<div class='label2'>" + callP[item] + "</div>";

          infoShow.push(htmlLine);
        });

        // infoShow.push(infoLat);
        // infoShow.push(infoLng);

        var infoShow = infoShow.join("<p>");
        popup.setHTML(infoShow).setLngLat(e.lngLat).addTo(map);
      });

      map.on("mouseleave", "rects", function () {
        map.getCanvas().style.cursor = "";
        popup.remove();
      });

      //CREATE BUILDING POP-UP 2D
      map.on("mouseenter", "cumulative", function () {
        map.getCanvas().style.cursor = "pointer";
      });

      map.on("mouseenter", "cumulative", function (e) {
        map.getCanvas().style.cursor = "pointer";

        var callP = e.features[0].properties;
        var coord = e.features[0].geometry.coordinates;
        console.log(coord);
        var indexFileName = fileName.indexOf(callP.fileName);
        var coordLat = coord[1].toFixed(6);
        var coordLng = coord[0].toFixed(6);

        var infoShow = [];

        var keysListO = Object.keys(callP);
        var keysList = keysCustom[indexFileName];
        var keysListJ = keysCustomJ[indexFileName];
        console.log(callP.fileName);
        console.log(keysListO);
        console.log(keysList);

        if (language == "eng") {
          var infoType = "<div class='label1'>" + "Type" + "</div>" + "<div class='label2'>" + callP.fileName + "</div>";
          var infoLat = "<div class='label1'>" + "Lat" + "</div>" + "<div class='label2'>" + coordLat + "</div>";
          var infoLng = "<div class='label1'>" + "Lon" + "</div>" + "<div class='label2'>" + coordLng + "</div>";
          infoShow.push(infoType);
          keysList.forEach(function (item, i) {
            item = item.toLowerCase();
            var htmlLine = "<div class='label1'>" + item + "</div>" + "<div class='label2'>" + callP[item] + "</div>";
            infoShow.push(htmlLine);
          });
        } else {
          var infoType = "<div class='label1'>" + "種類" + "</div>" + "<div class='label2'>" + callP.fileName + "</div>";
          var infoLat = "<div class='label1'>" + "緯度" + "</div>" + "<div class='label2'>" + coordLat + "</div>";
          var infoLng = "<div class='label1'>" + "経度" + "</div>" + "<div class='label2'>" + coordLng + "</div>";
          infoShow.push(infoType);
          keysList.forEach(function (item, i) {
            item = item.toLowerCase();
            var htmlLine = "<div class='label1'>" + keysListJ[i] + "</div>" + "<div class='label2'>" + callP[item] + "</div>";
            infoShow.push(htmlLine);
          });
        }

        infoShow.push(infoLat);
        infoShow.push(infoLng);

        var infoShow = infoShow.join("<p>");
        popup.setHTML(infoShow).setLngLat(e.lngLat).addTo(map);
      });

      map.on("mouseleave", "cumulative", function () {
        map.getCanvas().style.cursor = "";
        popup.remove();
      });
    });
  });

  //FILTER WITH DROPDOWN
  $(".dropdown-menu")
    .find(".dropdown-item")
    .click(function () {
      var selVal = $(this).attr("data-type");
      var selText = $(this).text();

      $("#dropdownMenuButton").text(selText);

      if (selText == "All") {
        map.setFilter("rects", ["!=", "type", "AAA"]);
        map.setFilter("cumulative", ["!=", "type", "AAA"]);
      } else {
        map.setFilter("rects", ["==", "type", selVal]);
        map.setFilter("cumulative", ["==", "type", selVal]);
      }
    });

  //CLEAN BUTTON

  function cleanAll(e) {
    //map.setFilter("rects", ["!=", "id_code", "AAA"]);
    popup.remove();
    var filterArg = ["in", "fileName"];
    var globalFilter = filterArg.concat(tudo);
    map.setFilter("rects", globalFilter);
    map.setFilter("cumulative", globalFilter);
    fileName.forEach(function (item, index) {
      document.getElementById(index).innerHTML = item + "   " + "<span class='number'>" + totals[index] + "</span>";
    });
  }

  //DEFINE 2D AND 3D VIEWS
  var view1 = {
    bearing: 0,
    pitch: 0,
    speed: 0.01,
    curve: 1,
  };
  var view2 = {
    bearing: -30,
    pitch: 80,
    speed: 0.01,
    curve: 1,
  };

  var height = 20;

  $(".button3d").click(function () {
    var selButton = $(this).text();

    if (selButton === "2D") {
      $(this).text("3D");
      map.setLayoutProperty("rects", "visibility", "visible");
      map.setLayoutProperty("cumulative", "visibility", "none");
      //map.setPaintProperty("rects", "fill-extrusion-height", 40);
      map.setPaintProperty("rects", "fill-extrusion-height", ["match", ["get", "rateTotal"], 0, height, 1, height * 2, 2, height * 3, 3, height * 4, 4, height * 5, 5, height * 6, /* other */ height]);

      map.flyTo(view2);
    } else if (selButton === "3D") {
      map.setLayoutProperty("rects", "visibility", "none");
      map.setLayoutProperty("cumulative", "visibility", "visible");
      map.setPaintProperty("rects", "fill-extrusion-height", 1);
      map.flyTo(view1);
      $(this).text("2D");
    } else {
    }
  });

  //_______________________________________________________________________________________________________________________-

  //LOAD BIKES STREETS GEOJSON
  d3.json("data/all_bikes_final.geojson", function (err, data4) {
    if (err) throw err;

    map.addSource("streets", {
      type: "geojson",
      data: data4,
    });

    map.addLayer(
      {
        id: "streets",
        type: "line",
        source: "streets",

        layout: {
          "line-join": "round",
          "line-cap": "round",
          visibility: "visible",
        },
        paint: {
          "line-color": "#fff",
          "line-width": ["interpolate", ["linear"], ["zoom"], 12, 0.5, 22, 6],
          "line-opacity": ["interpolate", ["linear"], ["zoom"], 8, 0.6, 22, 0.9],
        },
      },
      "poi-label"
    );
  });
});
