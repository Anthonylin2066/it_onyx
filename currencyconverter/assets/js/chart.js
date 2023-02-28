var ctx = document.getElementById("chartjs-0");

var myChart = new Chart(ctx, {
    "type":"line",
    "data": {
        "labels": dates,
        "datasets":[{
            "data": values,
            fill: false
        }]
    },
    "options":{ 
        responsive: false,
        maintainAspectRatio: true,
    }
});
