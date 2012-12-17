function drawPieChart() {
    // Prepare the data
    var data = google.visualization.arrayToDataTable([
      ['PRODUCT', 'BRAND', 'STORAGE BIN', 'QUANTITY IN STOCK'],
      ['DWD 014' , 'DEWALT', 'E-00-201', 2500],
      ['DW 201' , 'DEWALT', 'E-00-202', 4500],
      ['CS 1500' , 'Black & Decker', 'E-00-203', 10000],
      ['KS 600', 'Black & Decker', 'E-00-204', 2000],
      ['KS 700PE', 'Black & Decker', 'E-00-204', 1400],
      ['MW 408', 'Stanley', 'E-00-205', 5000],
      ['MaxLife 369', 'Stanley', 'E-00-205', 2000]
    ]);
  
    // Define a slider control for the Incoming column.
    var slider = new google.visualization.ControlWrapper({
      'controlType': 'NumberRangeFilter',
      'containerId': 'control1',
      'options': {
        'filterColumnLabel': 'QUANTITY IN STOCK',
      'ui': {'labelStacking': 'vertical'}
      }
    });
  
    // Define a category picker control for the Gender column
    var categoryPicker = new google.visualization.ControlWrapper({
      'controlType': 'CategoryFilter',
      'containerId': 'control2',
      'options': {
        'filterColumnLabel': 'PRODUCT',
        'ui': {
        'labelStacking': 'vertical',
          'allowTyping': false,
          'allowMultiple': false
        }
      }
    });

    // Define a category picker control for the Gender column
    var categoryPicker2 = new google.visualization.ControlWrapper({
      'controlType': 'CategoryFilter',
      'containerId': 'control3',
      'options': {
        'filterColumnLabel': 'BRAND',
        'ui': {
        'labelStacking': 'vertical',
          'allowTyping': false,
          'allowMultiple': false
        }
      }
    });
    
    // Define a category picker control for the Gender column
    var categoryPicker3 = new google.visualization.ControlWrapper({
      'controlType': 'CategoryFilter',
      'containerId': 'control4',
      'options': {
        'filterColumnLabel': 'STORAGE BIN',
        'ui': {
        'labelStacking': 'vertical',
          'allowTyping': false,
          'allowMultiple': false
        }
      }
    });

    // Define a Pie chart
    var pie = new google.visualization.ChartWrapper({
      'chartType': 'PieChart',
      'dataSourceUrl': 'https://docs.google.com/spreadsheet/ccc?key=0AvpfaQ-yYyX8dHZnVXNYaEo1Nm1kLXRCMTZDTUs1SFE#gid=0',
      'containerId': 'chart1',
      'options': {
        'width': 500,
        'height': 400,
        'legend': 'none',
        'title': 'Inventory Details',
        'chartArea': {'left': '170px', 'top': 30, 'width': '80%', 'height': '75%'},
        'pieSliceText': 'label',
        'backgroundColor': '#f5f5f5',
        'fontName': "Helvetica Neue, Helvetica, Arial, Kreon, sans-serif",
        'fontSize': 14
        
      },
      // Instruct the piechart to use colums 0 (Name) and 3 (Donuts Eaten)
      // from the 'data' DataTable.
      'view': {'columns': [0, 3]}
    });
  
    // Define a table
    var table = new google.visualization.ChartWrapper({
      'chartType': 'Table',
      'containerId': 'chart2',
//      'options': {
//        'width': '500px'
//      }
    });
  
    // Create a dashboard
    new google.visualization.Dashboard(document.getElementById('filter-dashboard')).
        // Establish bindings, declaring the both the slider and the category
        // picker will drive both charts.
        bind([slider, categoryPicker, categoryPicker2, categoryPicker3], [pie, pie, table, table]).
        // Draw the entire dashboard.
        draw(data);
}
