(function($) {
 
  $.fn.planetize = function(options) {
    options = $.extend({}, $.fn.planetize.defaults, options);
    return this.each(function() {
            // Plugin Code
            
      console.log('Planetizing...');
      window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;

      $(this).css({
          'position': 'relative',
      });
      
      var planetimg = "url("+ options.imgurl +") no-repeat scroll center center";
      
      var atmosphere;
      switch(options.color) {
        case 'blue':
            atmosphere = 'rgba(84, 116, 222, 0.30)';
            break;
        case 'red':
            atmosphere = 'rgba(222, 84, 84, 0.20)';
                break;
        case 'green':
             atmosphere = 'rgba(116, 222, 116, 0.20)';
                break;        
        default:
             atmosphere = 'rgba(84, 116, 222, 0.30)';
      } 
      
      $('<div></div>')
        .attr('id', 'planet')
        .css({
          'z-index': '900',
          'position': 'absolute',
          'left': '0',
          'bottom': '50%',
          'width': '96px',
          'height': '96px',
          'border-radius': '100%',
          'background': planetimg,
            })
        .appendTo($(this))
        .click(function() {
                $('#planet').fadeOut('slow')
        });
      
      $('<div></div>')
        .attr('id', 'atmosphere')
        .css({
          'z-index': '999',
          'position': 'relative',
          'top': '-7px',
          'left': '-7px',
          'width': '110px',
          'height': '110px',
          'border-radius': '100%',
          'background-color': atmosphere
            })
        .appendTo($('#planet'));
             
      var maxX = $(this).innerWidth() - $('#planet').width();
      var maxY = $(this).innerHeight() - $('#planet').height();
      
      var duration = 4; // seconds
      var gridSize = 100; // pixels

      var start = null;

      function step(timestamp)
      {
          var progress, x, y;
          if(start === null) {
              start = timestamp;
          }

          progress = (timestamp - start) / duration / options.duration; // percent
          
          x = Math.sin(progress * 2 * Math.PI); // x = ƒ(t)
          y = Math.cos(progress * 2 * Math.PI); // y = ƒ(t)
          
          var left = maxX/2 + (gridSize * x) + "px";
          var bottom = maxY/2 + (gridSize * y) + "px";
          
          $('#planet').css('left', left);
          $('#planet').css('bottom', bottom);
          
          if(progress >= 1) start = null; // reset to start position
          requestAnimationFrame(step);
      }

      requestAnimationFrame(step);
            
            // End of plugin code
      });
  };
 
  $.fn.planetize.defaults = {
    'color': 'blue',
    'duration': 4000,
    'imgurl': 'img/terra.png',
  }
 
}) (jQuery);