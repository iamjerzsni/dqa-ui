var options = {
    series: [{
        data: [400, 430, 448, 470, 1200]
    }],
    chart: {
        type: 'bar',
        height: 200
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            borderRadiusApplication: 'end',
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Philippines'],
    },
    colors:['#F44336']
};

var chart = new ApexCharts(document.querySelector("#chart1"), options);
chart.render();
// ===========================================================================================
var options1 = {
    series: [{
        data: [400, 430, 448, 470]
    }],
    chart: {
        type: 'bar',
        height: 220
    },
    plotOptions: {
        bar: {
            borderRadius: 4,
            borderRadiusApplication: 'end',
            horizontal: true,
        }
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['Flexport', 'Middesk', 'Medica', 'Canon'],
    },
    colors:['#F44336']
};

var chart1 = new ApexCharts(document.querySelector("#chart2"), options1);
chart1.render();


$(document).ready(function() {
    $(".project-progress-1, .team-progress-1").circleProgress({
        max: 100,
        value: 40,
        textFormat: "percent"
    }), $(".project-progress-2, .team-progress-2").circleProgress({
        max: 100,
        value: 65,
        textFormat: "percent"
    }), $(".project-progress-3, .team-progress-3").circleProgress({
        max: 100,
        value: 50,
        textFormat: "percent"
    }), $(".project-progress-4, .team-progress-4").circleProgress({
        max: 100,
        value: 75,
        textFormat: "percent"
    })
});

var e = moment().subtract(29, "days"),
    t = moment();

"use strict";
$(function() {
    var e = moment().subtract(29, "days"),
        t = moment();

    function o(e, t) {
        $("#reportrange span").html(e.format("MMMM DD, YYYY") + " - " + t.format("MMMM DD, YYYY"))
    }
    $("#reportrange").daterangepicker({
        startDate: e,
        endDate: t,
        ranges: {
            Today: [moment(), moment()],
            Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
            "Last 7 Days": [moment().subtract(6, "days"), moment()],
            "Last 30 Days": [moment().subtract(29, "days"), moment()],
            "This Month": [moment().startOf("month"), moment().endOf("month")],
            "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
        }
    }, o), o(e, t)
})