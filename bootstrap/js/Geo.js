function drawGeoChart() {
    var data = google.visualization.arrayToDataTable([
                                                      ['City',   'Population', 'Area'],
                                                      ['Panvel',      2761477,    1285.31],
                                                      ['Chakan',     1324110,    181.76],
                                                      ['Gaziabad',    959574,     117.27],
                                                    ]);

    var options = {
      region: 'IN',
      displayMode: 'markers',
      colorAxis: {colors: ['green', 'blue']}
    };

    var chart = new google.visualization.GeoChart(document.getElementById('geo-dashboard'));
    chart.draw(data, options);	
}