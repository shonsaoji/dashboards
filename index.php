<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>Dashboards</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- Le styles -->
    <link href="./bootstrap/css/bootstrap.css" rel="stylesheet">
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
      <ul class="nav nav-tabs">
      	<li class="active"><a id="geo-tab" href="#geo" onClick="drawGeoChart();" data-toggle="tab">Geo</a></li>
      	<li><a href="#timeline" onClick="drawTimeLineChart();" data-toggle="tab">TimeLine</a></li>
	    <li><a id="filters-tab" href="#filters" onClick="drawPieChart();" data-toggle="tab">Filters</a></li>
	    <li><a id="motion-tab" href="#motion" onClick="drawMotionChart();" data-toggle="tab">Motion</a></li>
	    <li><a id="assorted-tab" href="#assorted" data-toggle="tab">Dashboard</a></li>
	  </ul>
      <!-- Main hero unit for a primary marketing message or call to action -->
      <div class="hero-unit tab-content">
	      <div class="tab-pane fade in active" id="geo">
	      <h2>Sales across warehouses in India</h2>
	        <div id="geo-dashboard" class="row">
	        	
		    </div>
		  </div>

		  <div class="tab-pane fade" id="timeline">
		  <h2>Sales (in Lacs)  for a warehouse</h2>
	        <div id="timeline-dashboard" style="width: 100%; height: 400px;"></div>
	        <div style="margin-left:35px;">
	            <input type="radio" checked="true" name="group" id="rb1" onclick="setPanSelect()">Select
	            <input type="radio" name="group" id="rb2" onclick="setPanSelect()">Pan
			</div>        
  		  </div>
      
      	  <div class="tab-pane fade" id="filters">
      	  <h2>Inventory Details</h2>
	        <div id="filter-dashboard" class="row">
	        	<div class='span'>
	        	    <div id="chart1" class='well'></div>
	        	    <div id="chart2" class='well'></div>
		        </div>
	        	<div class='span alert alert-error'>
	        		<div id="control1"></div><hr>
	        	    <div id="control2"></div>
		            <div id="control3"></div>
		            <div id="control4"></div>
	        	</div>
		    </div>
		  </div>
		  <div class="tab-pane fade" id="motion">
		  <h2>Incoming / Outgoing stock per warehouse</h2>
	        <div id="motion-dashboard" class="row">
	        </div>
		  </div>
		  <div class="tab-pane fade" id="assorted">
		    <div class="row">
	        	<div id='amcharts-donut' class="span pull-left" style="width:475px; height:275px;"></div>
	        	<div id='amcharts-bar' class="span" style="width:475px; height:275px;"></div>
	        </div>
	        <div class="row">
	        	<div id='amcharts-colLine' class="span" style="width:475px; height:375px;"></div>
	        	<div id='amcharts-bubbleZoom' class="span" style="width:500px; height:375px;"></div>
	        </div>
	        </div>
		  
		  </div>	  
      <hr>

      <footer>
        <div class='row-fluid'>
        	<div class='span2'><p>&copy; Moolcode Company 2012</p></div>
        </div>
      </footer>
	  </div>


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
    <script src="./bootstrap/js/PieChart.js"></script>
    <script src="./bootstrap/js/MotionChart.js"></script>
    <script src="./bootstrap/js/TimeLine.js"></script>
    <script src="./bootstrap/js/Geo.js"></script>
    <script src="./bootstrap/js/amcharts.js" type="text/javascript"></script>
    <script src="./bootstrap/js/Assorted.js"></script>
    
    <script type="text/javascript" src="http://www.google.com/jsapi"></script>
    <script type="text/javascript">
      google.load('visualization', '1.1', {packages: ['controls','motionchart','geochart','annotatedtimeline']});
      google.setOnLoadCallback(drawGeoChart);
    </script>
    <script type="text/javascript">
    </script>
  </body>
</html>
 
