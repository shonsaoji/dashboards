function drawMotionChart() {
  
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Warehouse');
  data.addColumn('date', 'Date');
  data.addColumn('string', 'Item Code');
  data.addColumn('number', 'Incoming');
  data.addColumn('number', 'Outgoing');
  
  data.addRows([
    ['Chakan', new Date(2012,1,1), 'GR 3400', 300, 1000],
    ['Panvel', new Date(2012,1,1), 'GT 1100', 2000, 1500],
    ['Ghaziabad', new Date(2012,1,1), 'GL 310', 1000, 2000],

    ['Chakan', new Date(2012,1,2), 'GR 3400', 400, 1200],
    ['Panvel', new Date(2012,1,2), 'GT 1100', 2570, 2500],
    ['Ghaziabad', new Date(2012,1,2), 'GL 310', 2100, 2150],

    ['Chakan', new Date(2012,1,3), 'GR 3400', 835, 2410],
    ['Panvel', new Date(2012,1,3), 'GT 1100', 2942, 3297],
    ['Ghaziabad', new Date(2012,1,3), 'GL 310', 2474, 2672],

    ['Chakan', new Date(2012,1,4), 'GR 3400', 914, 2705],
    ['Panvel', new Date(2012,1,4), 'GT 1100', 1746, 1933],
    ['Ghaziabad', new Date(2012,1,4), 'GL 310', 1665, 1747],

    ['Chakan', new Date(2012,1,5), 'GR 3400', 843, 2503],
    ['Panvel', new Date(2012,1,5), 'GT 1100', 2205, 2381],
    ['Ghaziabad', new Date(2012,1,5), 'GL 310', 2628, 3356],

    ['Chakan', new Date(2012,1,6), 'GR 3400', 1243, 3315],
    ['Panvel', new Date(2012,1,6), 'GT 1100', 1746, 2309],
    ['Ghaziabad', new Date(2012,1,6), 'GL 310', 2990, 4406],

    ['Chakan', new Date(2012,1,7), 'GR 3400', 1377, 3454],
    ['Panvel', new Date(2012,1,7), 'GT 1100', 1416, 2653],
    ['Ghaziabad', new Date(2012,1,7), 'GL 310', 3378, 4501],

    ['Chakan', new Date(2012,1,8), 'GR 3400', 1619, 3909],
    ['Panvel', new Date(2012,1,8), 'GT 1100', 1164, 1220],
    ['Ghaziabad', new Date(2012,1,8), 'GL 310', 3191, 4802],

    ['Chakan', new Date(2012,1,9), 'GR 3400', 1859, 4082],
    ['Panvel', new Date(2012,1,9), 'GT 1100', 1683, 3254],
    ['Ghaziabad', new Date(2012,1,9), 'GL 310', 2935, 4196],

    ['Chakan', new Date(2012,1,10), 'GR 3400', 1737, 3826],
    ['Panvel', new Date(2012,1,10), 'GT 1100', 2664, 5340],
    ['Ghaziabad', new Date(2012,1,10), 'GL 310', 3183, 4662]

  ]);

  var motionchart = new google.visualization.MotionChart(
      document.getElementById('motion-dashboard'));
  motionchart.draw(data, {'width': 800, 'height': 400});	
}