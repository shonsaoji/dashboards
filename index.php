<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>I'm Whiney</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href="./bootstrap/css/bootstrap.css" rel="stylesheet">
    <link href="./css/jquery-ui-1.9.1.custom.css" rel="stylesheet">
    <link href="./css/jquery-ui-1.9.1.custom.min.css" rel="stylesheet">
    <style type="text/css">
      body {
        padding-top: 60px;
        padding-bottom: 40px;
      }
    </style>
    <link href="./bootstrap/css/bootstrap-responsive.css" rel="stylesheet">

    <!-- Le HTML5 shim, for IE6-8 support of HTML5 elements -->
    <!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <!-- Le fav and touch icons -->
    <link rel="shortcut icon" href="./bootstrap/ico/w_logo.png">
    <link rel="apple-touch-icon-precomposed" sizes="144x144" href="./bootstrap/ico/w_logo.png">
    <link rel="apple-touch-icon-precomposed" sizes="114x114" href="./bootstrap/ico/w_logo.png">
    <link rel="apple-touch-icon-precomposed" sizes="72x72" href="./bootstrap/ico/w_logo.png">
    <link rel="apple-touch-icon-precomposed" href="./bootstrap/ico/w_logo.png">
  </head>

  <body>

    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container">
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <a class="brand" href="/">Dashboard<!-- img src="./bootstrap/ico/imwlogo.png" --></a>
          
        </div>
      </div>
    </div>
    <div class="container">
	  
      <!-- Main hero unit for a primary marketing message or call to action -->
      <div class="hero-unit">
        <div id="dashboard" class="row">
        	<div class='span'>
        	    <div id="chart1" class='well'></div>
	            <div id="chart2" class='well'></div>
	        </div>
        	<div class='span well'>
        	    <div id="control1"></div><hr>
        	    <div id="control2"></div>
	            <div id="control3"></div>
	            <div id="control4"></div>
        	</div>
	    </div>
    </div>
      
      </div>

      <hr>

      <footer>
        <div class='row-fluid'>
        	<div class='span2'><p>&copy; Company 2012</p></div>
        </div>
      </footer>

    <script src="./bootstrap/js/jquery.js"></script>
    <script src="./bootstrap/js/bootstrap-transition.js"></script>
    <script src="./bootstrap/js/bootstrap-alert.js"></script>
    <script src="./bootstrap/js/bootstrap-modal.js"></script>
    <script src="./bootstrap/js/bootstrap-dropdown.js"></script>
    <script src="./bootstrap/js/bootstrap-scrollspy.js"></script>
    <script src="./bootstrap/js/bootstrap-tab.js"></script>
    <script src="./bootstrap/js/bootstrap-tooltip.js"></script>
    <script src="./bootstrap/js/bootstrap-popover.js"></script>
    <script src="./bootstrap/js/bootstrap-button.js"></script>
    <script src="./bootstrap/js/bootstrap-collapse.js"></script>
    <script src="./bootstrap/js/bootstrap-carousel.js"></script>
    <script src="./bootstrap/js/bootstrap-typeahead.js"></script>
    <script src="./js/controller.js"></script>
    <script src="./js/json2.js"></script>
    <script src="./js/jquery-ui-1.9.1.custom.js"></script>
    <script src="./js/jquery-ui-1.9.1.custom.min.js"></script>
    <script src="./js/home.js"></script>
    
    <script type="text/javascript" src="http://www.google.com/jsapi"></script>
    <script type="text/javascript">
      google.load('visualization', '1.1', {packages: ['controls']});
    </script>
    <script type="text/javascript">
      function drawVisualization() {
        // Prepare the data
        var data = google.visualization.arrayToDataTable([
          ['PRODUCT', 'BRAND', 'STORAGE BIN', 'QUANTITY IN STOCK'],
          ['DWD 014' , 'DEWALT', 'E-00-201', 2500],
          ['DW 201' , 'DEWALT', 'E-00-202', 4500],
          ['CS 1500' , 'Black & Decker', 'E-00-203', 10000],
          ['KS 600', 'Black & Decker', 'E-00-204', 2000],
          ['KS 700PE', 'Black & Decker', 'E-00-204', 1400],
          ['MW 408', 'Stanley', 'E-00-205', 5000],
          ['MaxLife 369', 'Stanley', 'E-00-205', 200]
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
          'options': {
            'width': '500px'
          }
        });
      
        // Create a dashboard
        new google.visualization.Dashboard(document.getElementById('dashboard')).
            // Establish bindings, declaring the both the slider and the category
            // picker will drive both charts.
            bind([slider, categoryPicker, categoryPicker2, categoryPicker3], [pie, pie, table, table]).
            // Draw the entire dashboard.
            draw(data);
      }
      

      google.setOnLoadCallback(drawVisualization);
    </script>
  </body>
</html>
 