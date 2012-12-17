function drawGeoChart() {
    var data = google.visualization.arrayToDataTable([
                                                      ['City',   'Total Sales (Cr)', 'Operation Cost (Cr)'],
                                                      ['Panvel',      1.6761477,    0.12387],
                                                      ['Chakan',     1.324110,    0.11976],
                                                      ['Gaziabad',    1.959574,     0.31727],
                                                      ['Pune',    1.38762,     0.131727],
                                                      ['Mumbai',    1.234792,     0.32847],
                                                      ['Calcutta',    1.827643,     0.92387],
                                                      ['Jaipur',    1.85374,     0.34987],
                                                      ['Chennai',    1.42984,     0.354698],
                                                      ['Hyderabad',    1.4398,     0.23498],
                                                      ['Bangalore',    1.487365,     0.838454],
                                                    ]);

    var options = {
      region: 'IN',
      keepAspectRatio: false,
      width: 650,
      height: 500,
      backgroundColor: '#99CCFF',
      displayMode: 'markers',
      colorAxis: {colors: ['green', 'blue']}
    };

    var chart = new google.visualization.GeoChart(document.getElementById('geo-dashboard'));
    chart.draw(data, options);	
}