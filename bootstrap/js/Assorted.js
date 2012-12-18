function drawAssortedChart() {
	drawDonut();
	drawBar();
}

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