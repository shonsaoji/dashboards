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

    ['Chakan', new Date(2012,1,2), 'GR 3400', 400, 100],
    ['Panvel', new Date(2012,1,2), 'GT 1100', 570, 2500],
    ['Ghaziabad', new Date(2012,1,2), 'GL 310', 2100, 150],

    ['Chakan', new Date(2012,1,3), 'GR 3400', 1835, 2410],
    ['Panvel', new Date(2012,1,3), 'GT 1100', 4942, 1497],
    ['Ghaziabad', new Date(2012,1,3), 'GL 310', 2474, 1672],

    ['Chakan', new Date(2012,1,4), 'GR 3400', 2214, 2705],
    ['Panvel', new Date(2012,1,4), 'GT 1100', 746, 4933],
    ['Ghaziabad', new Date(2012,1,4), 'GL 310', 1265, 747],

    ['Chakan', new Date(2012,1,5), 'GR 3400', 843, 2003],
    ['Panvel', new Date(2012,1,5), 'GT 1100', 4205, 4381],
    ['Ghaziabad', new Date(2012,1,5), 'GL 310', 2628, 4356],

    ['Chakan', new Date(2012,1,6), 'GR 3400', 3643, 4315],
    ['Panvel', new Date(2012,1,6), 'GT 1100', 576, 3309],
    ['Ghaziabad', new Date(2012,1,6), 'GL 310', 990, 1706],

    ['Chakan', new Date(2012,1,7), 'GR 3400', 4377, 1154],
    ['Panvel', new Date(2012,1,7), 'GT 1100', 4216, 4653],
    ['Ghaziabad', new Date(2012,1,7), 'GL 310', 1378, 3001],

    ['Chakan', new Date(2012,1,8), 'GR 3400', 1619, 609],
    ['Panvel', new Date(2012,1,8), 'GT 1100', 3164, 3220],
    ['Ghaziabad', new Date(2012,1,8), 'GL 310', 1191, 1602],

    ['Chakan', new Date(2012,1,9), 'GR 3400', 2259, 1082],
    ['Panvel', new Date(2012,1,9), 'GT 1100', 683, 4254],
    ['Ghaziabad', new Date(2012,1,9), 'GL 310', 2935, 4896],

    ['Chakan', new Date(2012,1,10), 'GR 3400', 4737, 2026],
    ['Panvel', new Date(2012,1,10), 'GT 1100', 4664, 1040],
    ['Ghaziabad', new Date(2012,1,10), 'GL 310', 1183, 4362]

  ]);

  var motionchart = new google.visualization.MotionChart(
      document.getElementById('motion-dashboard'));
  motionchart.draw(data, {'width': 800, 'height': 400});	
}