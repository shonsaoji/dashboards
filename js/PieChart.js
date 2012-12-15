
var PieChart = {
	draw: function(data) {
		var keys = data['keys'];
		var values = values['values'];
		var chartData = []
		chartData.push(keys);
		for(i in values) {
			chartData.push(values[i]);
		}
		// Create and populate the data table.
		var data = google.visualization.arrayToDataTable(chartData);

		// Create and draw the visualization.
		new google.visualization.PieChart(document.getElementById('chart_div')).
		draw(data, {title:"Pie Chart"});
	}	
};

/*
		                    ['Task', 'Hours per Day'],
		                  	['Work', 11],
		                  	['Eat', 2],
		                  	['Commute', 2],
		                  	['Watch TV', 2],
		                  	['Sleep', 7]

*/