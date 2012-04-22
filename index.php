<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title></title>
    <?php
    require_once 'includes/js.php';
    require_once 'includes/models/models.php';
    require_once 'includes/views/views.php';
    ?>
    <script type="text/template" id="search_template">
    <label>Search</label>
    <input type="text" id="search_input" />
    <input type="button" id="search_button" value="Search" />
  </script>
    <script type="text/javascript">
      var front;
      var middle;
      jQuery(function($) {
	Backbone.emulateHTTP = true;
	//front = new window.FrontView();
	middle = new window.MiddleView({el: $("#middle")});
	middle2 = new window.MiddleView({el: $(".mid")});
	middle2.updateFromFetch();
	middle2.render();
      });
    </script>
  </head>
  <body>
    Base<div id="middle"></div><br/>
    Fetch<div class="mid"></div>
  </body>
</html>
