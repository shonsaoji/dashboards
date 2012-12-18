$("#assorted-tab").on('shown', function drawAssortedChart() {
	drawDonut();
	drawBar();
	drawColLine();
	drawBubbleChart();
});

function drawDonut() {
    var chart;

    var chartData = [{
        product: "DWD 014",
        quantity: 9252
    }, {
        product: "DW 201",
        quantity: 1882
    }, {
        product: "CS 1500",
        quantity: 1809
    }, {
        product: "KS 600",
        quantity: 1322
    }, {
        product: "KS 700PE",
        quantity: 1122
    }, {
        product: "MW 408",
        quantity: 1114
    }, {
        product: "MaxLife 369",
        quantity: 984
    }];
    // PIE CHART
    chart = new AmCharts.AmPieChart();

    // title of the chart
    chart.addTitle("Quantity of Products in Stock", 16);

    chart.dataProvider = chartData;
    chart.titleField = "product";
    chart.valueField = "quantity";
    chart.sequencedAnimation = true;
    chart.startEffect = "elastic";
    chart.innerRadius = "30%";
    chart.startDuration = 2;
    chart.labelRadius = 15;

    // the following two lines makes the chart 3D
    chart.depth3D = 10;
    chart.angle = 15;

    // WRITE                                 
    chart.write("amcharts-donut");
}

function drawBar() {
    var chart;
    var chartData = [{
        product: "DWD 014",
        income: 23.5
    }, {
        product: "DW 201",
        income: 26.2
    }, {
        product: "CS 1500",
        income: 30.1
    }, {
        product: "KS 600",
        income: 29.5
    }, {
        product: "KS 700PE",
        income: 24.6
    }, {
        product: "MW 408",
        income: 17.6
    }];

    // SERIAL CHART
    chart = new AmCharts.AmSerialChart();
    chart.dataProvider = chartData;
    chart.categoryField = "product";
    // this single line makes the chart a bar chart, 
    // try to set it to false - your bars will turn to columns                
    chart.rotate = false;
    // the following two lines makes chart 3D
    chart.depth3D = 20;
    chart.angle = 30;

    // AXES
    // Category
    var categoryAxis = chart.categoryAxis;
    categoryAxis.gridPosition = "start";
    categoryAxis.axisColor = "#DADADA";
    categoryAxis.fillAlpha = 1;
    categoryAxis.gridAlpha = 0;
    categoryAxis.fillColor = "#FAFAFA";

    // value
    var valueAxis = new AmCharts.ValueAxis();
    valueAxis.axisColor = "#DADADA";
    valueAxis.title = "Units sold (in millions)";
    valueAxis.gridAlpha = 0.1;
    chart.addValueAxis(valueAxis);

    // GRAPH
    var graph = new AmCharts.AmGraph();
    graph.title = "Sales";
    graph.valueField = "income";
    graph.type = "column";
    graph.balloonText = "Sales for [[category]]:[[value]]";
    graph.lineAlpha = 0;
    graph.fillColors = "#bf1c25";
    graph.fillAlphas = 1;
    chart.addGraph(graph);

    // WRITE
    chart.write("amcharts-bar");
}

function drawColLine() {
    var chart;
    var chartData = [{
        year: 2005,
        income: 23.5,
        expenses: 18.1
    }, {
        year: 2006,
        income: 26.2,
        expenses: 22.8
    }, {
        year: 2007,
        income: 23.1,
        expenses: 23.9
    }, {
        year: 2008,
        income: 26.5,
        expenses: 25.1
    }, {
        year: 2009,
        income: 24.6,
        expenses: 25.0
    },
    {
        year: 2010,
        income: 22.6,
        expenses: 27.0
    }];


    // SERIAL CHART  
    chart = new AmCharts.AmSerialChart();
    chart.pathToImages = "/bootstrap/js/amcharts/images/";
    chart.dataProvider = chartData;
    chart.categoryField = "year";
    chart.startDuration = 1;

    // AXES
    // category
    var categoryAxis = chart.categoryAxis;
    categoryAxis.gridPosition = "start";

    // value
    // in case you don't want to change default settings of value axis,
    // you don't need to create it, as one value axis is created automatically.
    
    // GRAPHS
    // column graph
    var graph1 = new AmCharts.AmGraph();
    graph1.type = "column";
    graph1.title = "Income";
    graph1.valueField = "income";
    graph1.lineAlpha = 0;
    graph1.fillAlphas = 1;
    chart.addGraph(graph1);

    // line
    var graph2 = new AmCharts.AmGraph();
    graph2.type = "line";
    graph2.title = "Expenses";
    graph2.valueField = "expenses";
    graph2.lineThickness = 2;
    graph2.bullet = "round";
    chart.addGraph(graph2);

    // LEGEND                
    var legend = new AmCharts.AmLegend();
    chart.addLegend(legend);

    // WRITE
    chart.write("amcharts-colLine");
}

function drawBubbleChart() {
    var chart;

    var chartData = [{
        y: 10,
        x: 14,
        value: 59,
        y2: -5,
        x2: -3,
        value2: 44
    }, {
        y: 5,
        x: 3,
        value: 50,
        y2: -15,
        x2: -8,
        value2: 12
    }, {
        y: -10,
        x: -3,
        value: 19,
        y2: -4,
        x2: 6,
        value2: 35
    }, {
        y: -6,
        x: 5,
        value: 65,
        y2: -5,
        x2: -6,
        value2: 168
    }, {
        y: 15,
        x: -4,
        value: 92,
        y2: -10,
        x2: -8,
        value2: 102
    }, {
        y: 13,
        x: 1,
        value: 8,
        y2: -2,
        x2: -3,
        value2: 41
    }, {
        y: 1,
        x: 6,
        value: 35,
        y2: 0,
        x2: -3,
        value2: 16
    }];

    // XY Chart
    chart = new AmCharts.AmXYChart();
    chart.pathToImages = "/bootstrap/js/amcharts/images/";
    chart.dataProvider = chartData;
    chart.startDuration = 1.5;

    // AXES
    // X
    var xAxis = new AmCharts.ValueAxis();
    xAxis.position = "bottom";
    xAxis.axisAlpha = 0;
    xAxis.dashLength = 1;
    xAxis.minMaxMultiplayer = 1.2;
    xAxis.autoGridCount = true;
    chart.addValueAxis(xAxis);

    // Y
    var yAxis = new AmCharts.ValueAxis();
    yAxis.position = "left";
    yAxis.minMaxMultiplier = 1.2;
    yAxis.axisAlpha = 0;
    yAxis.dashLength = 1;
    yAxis.autoGridCount = true;
    chart.addValueAxis(yAxis);

    // GRAPHS
    // first graph
    var graph = new AmCharts.AmGraph();
    graph.valueField = "value";
    graph.lineColor = "#b0de09";
    graph.xField = "x";
    graph.yField = "y";
    graph.lineAlpha = 0;
    graph.bullet = "bubble";
    chart.addGraph(graph);

    // second graph
    var graph = new AmCharts.AmGraph();
    graph.valueField = "value2";
    graph.lineColor = "#fcd202";
    graph.xField = "x2";
    graph.yField = "y2";
    graph.lineAlpha = 0;
    graph.bullet = "bubble";
    chart.addGraph(graph);

    // CURSOR
    var chartCursor = new AmCharts.ChartCursor();
    chart.addChartCursor(chartCursor);

    // SCROLLBAR
    var chartScrollbar = new AmCharts.ChartScrollbar();
    chart.addChartScrollbar(chartScrollbar);

    // WRITE                                                
    chart.write("amcharts-bubbleZoom");
}