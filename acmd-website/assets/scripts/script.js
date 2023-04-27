// THIS IS FOR THE IMAGE CARSOUSEL ON THE HOME PAGE //

/* Alternate Configuation Options Here - https://accessible360.github.io/accessible-slick/#demos */

$(document).ready(function() {

    $('.fade').slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      slide: 'div',
      cssEase: 'linear',
      autoplay: true,
      autoplaySpeed: 2000
    });


});

// ---------- cont. below ----- //
async function displayHeight() {
  var myURL = "https://waterservices.usgs.gov/nwis/iv/?format=json&indent=on&sites=07055646,07055660, 07055680,07055780&period=P7D&parameterCd=00065&siteStatus=all";

  var msgObject = await fetch(myURL);
  var msgJSONText = await msgObject.text();
  var msg = JSON.parse(msgJSONText);

  /* Site 1 */
  var dates = [];
  var values = [];
  /* fLen contains the length of the array (number of values) */
  fLen = msg.value.timeSeries[0].values[0].value.length;
  for (i = 0; i < fLen; i++) {
      values[i] = msg.value.timeSeries[0].values[0].value[i].value;
      dates[i] = msg.value.timeSeries[0].values[0].value[i].dateTime;
  }
  var sitename = msg.value.timeSeries[0].sourceInfo.siteName;
  var sitecode = msg.value.timeSeries[0].sourceInfo.siteCode[0].value;
  var siteDescription = msg.value.timeSeries[0].variable.variableDescription;

   /* Site 2 */
   var dates = [];
   var valuess = [];
   /* fLen contains the length of the array (number of values) */
   fLen = msg.value.timeSeries[1].values[0].value.length
   for (i = 0; i < fLen; i++) {
       valuess[i] = msg.value.timeSeries[1].values[0].value[i].value
       dates[i] = msg.value.timeSeries[1].values[0].value[i].dateTime
   }
   var sitenamee = msg.value.timeSeries[1].sourceInfo.siteName
   var sitecode = msg.value.timeSeries[1].sourceInfo.siteCode[0].value
   var siteDescription = msg.value.timeSeries[1].variable.variableDescription

    /* Site 3 */
    var dates = [];
    var valuesss = [];
    /* fLen contains the length of the array (number of values) */
    fLen = msg.value.timeSeries[2].values[0].value.length
    for (i = 0; i < fLen; i++) {
        valuesss[i] = msg.value.timeSeries[2].values[0].value[i].value
        dates[i] = msg.value.timeSeries[2].values[0].value[i].dateTime
    }
    var sitenameee = msg.value.timeSeries[2].sourceInfo.siteName
    var sitecode = msg.value.timeSeries[2].sourceInfo.siteCode[0].value
    var siteDescription = msg.value.timeSeries[2].variable.variableDescription

     /* Site 4 */
     var dates = [];
     var valuessss = [];
     /* fLen contains the length of the array (number of values) */
     fLen = msg.value.timeSeries[3].values[0].value.length
     for (i = 0; i < fLen; i++) {
         valuessss[i] = msg.value.timeSeries[3].values[0].value[i].value
         dates[i] = msg.value.timeSeries[3].values[0].value[i].dateTime
     }
     var sitenameeee = msg.value.timeSeries[3].sourceInfo.siteName
     var sitecode = msg.value.timeSeries[3].sourceInfo.siteCode[0].value
     var siteDescription = msg.value.timeSeries[3].variable.variableDescription

     var ctx4 = document.getElementById("heightChart"); //change id of canvas

     Chart.Legend.prototype.afterFit = function() { //increases margin between legend and chart
        this.height = this.height + 10;
    };

    var myChart = new Chart(ctx4, {
        "type": "line",
        "data": {
            "labels": dates,
            "datasets": [{
                "label": sitename, //site 1
                "data": values,
                "fill": false,
                "borderColor": "red",
                "lineTension": 0.1,
                "pointRadius": 0
            }, {
                "label": sitenamee, //site 2
                "data": valuess,
                "fill": false,
                "borderColor": "blue",
                "lineTension": 0.1,
                "pointRadius": 0
            }, {
                "label": sitenameee, //site 3
                "data": valuesss,
                "fill": false,
                "borderColor": "green",
                "lineTension": 0.1,
                "pointRadius": 0
            }, {
                "label": sitenameeee, //site 4
                "data": valuessss,
                "fill": false,
                "borderColor": "black",
                "lineTension": 0.1,
                "pointRadius": 0
            }]
        },
        "options": {
            "responsive": false,
            "maintainAspectRatio": false,
            "legend":{
                "display":true,
                "position": 'top',
            },
            "layout": {
              "padding": 10,
             },
            "scales":{
                "xAxes": [{
                    "type": 'time',
                    "time":{
                        "unit": 'day',
                        "displayFormats": {
                            "day": 'MMM DD'
                        }
                    }
                }],
                "yAxes": [{
                    "ticks":{
                        "beginAtZero": true,
                        "stepSize": 0.5
                    },
                    "scaleLabel": {
                        "display":true,
                        "labelString": siteDescription,
                    }
                }]    
            }
        }
    });
}