function drawTimeLineGoogleChart() {
  var data = new google.visualization.DataTable();
  data.addColumn('date', 'Date');
  data.addColumn('number', 'Quantity');
  data.addColumn('string', 'title1');
  data.addColumn('string', 'text1');
  data.addColumn('number', 'Total Price');
  data.addColumn('string', 'title2');
  data.addColumn('string', 'text2');
  data.addRows([
    [new Date(2012, 1 ,1), 30, null, null, 30000, null, null],
    [new Date(2012, 1 ,2), 35, null, null, 35000, null, null],
    [new Date(2012, 1 ,3), 95, null, null, 267329, null, null],
    [new Date(2012, 1 ,4), 250, null, null, 356131, null, null],
    [new Date(2012, 1 ,5), 145, null, null, 262467, null, null],
    [new Date(2012, 1 ,7), 410, null, null, 334363, null, null],
    [new Date(2012, 1 ,8), 740, null, null, 745345, null, null],
    [new Date(2012, 1 ,9), 370, null, null, 378531, null, null],
    [new Date(2012, 1 ,10), 223, null, null, 253455, null, null],
    [new Date(2012, 1 ,11), 532, null, null, 665756, null, null],
    [new Date(2012, 1 ,12), 431, null, null, 432424, null, null],
    [new Date(2012, 1 ,13), 345, null, null, 375754, null, null],
    [new Date(2012, 1 ,14), 435, null, null, 465542, null, null],
    [new Date(2012, 1 ,15), 546, null, null, 639982, null, null]
  ]);

  var annotatedtimeline = new google.visualization.AnnotatedTimeLine(
      document.getElementById('timeline-dashboard'));
  annotatedtimeline.draw(data, {
                                // 'allValuesSuffix': '%', // A suffix that is added to all values
                                'colors': ['blue', 'red', '#0000bb'], // The colors to be used
                                'displayAnnotations': true,
                                'displayExactValues': true, // Do not truncate values (i.e. using K suffix)
                                'displayRangeSelector' : false, // Do not sow the range selector
                                'displayZoomButtons': false, // DO not display the zoom buttons
                                'fill': 30, // Fill the area below the lines with 20% opacity
                                'legendPosition': 'newRow', // Can be sameRow
//                                'max': 100000, // Override the automatic default
//                                'min':  100000, // Override the automatic default
                                'scaleColumns': [0, 1], // Have two scales, by the first and second lines
                                'scaleType': 'allfixed', // See docs...
                                'thickness': 2, // Make the lines thicker
                                'zoomStartTime': new Date(2012, 1 ,1), //NOTE: month 1 = Feb (javascript to blame)
                                'zoomEndTime': new Date(2012, 1 ,15) //NOTE: month 1 = Feb (javascript to blame)
                               });
	
}
var chart;
var chartData = [];
var chartCursor;

function drawTimeLineChart() {
//	chartData = [    [new Date(2012, 1 ,1), 30, null, null, 30000, null, null],
//	                 [new Date(2012, 1 ,2), 35, null, null, 35000, null, null],
//	                 [new Date(2012, 1 ,3), 95, null, null, 267329, null, null],
//	                 [new Date(2012, 1 ,4), 250, null, null, 356131, null, null],
//	                 [new Date(2012, 1 ,5), 145, null, null, 262467, null, null],
//	                 [new Date(2012, 1 ,7), 410, null, null, 334363, null, null],
//	                 [new Date(2012, 1 ,8), 740, null, null, 745345, null, null],
//	                 [new Date(2012, 1 ,9), 370, null, null, 378531, null, null],
//	                 [new Date(2012, 1 ,10), 223, null, null, 253455, null, null],
//	                 [new Date(2012, 1 ,11), 532, null, null, 665756, null, null],
//	                 [new Date(2012, 1 ,12), 431, null, null, 432424, null, null],
//	                 [new Date(2012, 1 ,13), 345, null, null, 375754, null, null],
//	                 [new Date(2012, 1 ,14), 435, null, null, 465542, null, null],
//	                 [new Date(2012, 1 ,15), 546, null, null, 639982, null, null]
//	             ];
	generateChartData();
	// SERIAL CHART    
    chart = new AmCharts.AmSerialChart();
    chart.pathToImages = "/bootstrap/js/amcharts/images/";
    chart.zoomOutButton = {
        backgroundColor: '#000000',
        backgroundAlpha: 0.15
    };
    chart.dataProvider = chartData;
    chart.categoryField = "date";

    // listen for "dataUpdated" event (fired when chart is rendered) and call zoomChart method when it happens
    chart.addListener("dataUpdated", zoomChart);

    // AXES
    // category
    var categoryAxis = chart.categoryAxis;
    categoryAxis.parseDates = true; // as our data is date-based, we set parseDates to true
    categoryAxis.minPeriod = "DD"; // our data is daily, so we set minPeriod to DD
    categoryAxis.dashLength = 1;
    categoryAxis.gridAlpha = 0.15;
    categoryAxis.axisColor = "#DADADA";

    // value                
    var valueAxis = new AmCharts.ValueAxis();
    valueAxis.axisAlpha = 0.2;
    valueAxis.dashLength = 1;
    chart.addValueAxis(valueAxis);

    // GRAPH
    var graph = new AmCharts.AmGraph();
    graph.title = "red line";
    graph.valueField = "visits";
    graph.bullet = "round";
    graph.bulletBorderColor = "#FFFFFF";
    graph.bulletBorderThickness = 2;
    graph.lineThickness = 2;
    graph.lineColor = "#b5030d";
    graph.negativeLineColor = "#0352b5";
    graph.hideBulletsCount = 50; // this makes the chart to hide bullets when there are more than 50 series in selection
    chart.addGraph(graph);

    // CURSOR
    chartCursor = new AmCharts.ChartCursor();
    chartCursor.cursorPosition = "mouse";
    chart.addChartCursor(chartCursor);

    // SCROLLBAR
    var chartScrollbar = new AmCharts.ChartScrollbar();
    chartScrollbar.graph = graph;
    chartScrollbar.scrollbarHeight = 40;
    chartScrollbar.color = "#FFFFFF";
    chartScrollbar.autoGridCount = true;
    chart.addChartScrollbar(chartScrollbar);
    // WRITE
    chart.write("timeline-dashboard");	
}

function generateChartData() {
    var firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 500);

    for (var i = 0; i < 500; i++) {
        var newDate = new Date(firstDate);
        newDate.setDate(newDate.getDate() + i);

        var visits = Math.round(Math.random() * 40) - 20;

        chartData.push({
            date: newDate,
            visits: visits
        });
    }
}

// this method is called when chart is first inited as we listen for "dataUpdated" event
function zoomChart() {
    // different zoom methods can be used - zoomToIndexes, zoomToDates, zoomToCategoryValues
    chart.zoomToIndexes(chartData.length - 40, chartData.length - 1);
}

// changes cursor mode from pan to select
function setPanSelect() {
    if (document.getElementById("rb1").checked) {
        chartCursor.pan = false;
        chartCursor.zoomable = true;
        
    } else {
        chartCursor.pan = true;
    }
    chart.validateNow();
}            
