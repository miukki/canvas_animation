define(['jquery', 'excanvas', 'addText'], function($, excanvas, addText){

    function canvasDraw(levelCount, P, COLOR){
      var container = document.createElement('canvas');

      if (window.G_vmlCanvasManager) {window.G_vmlCanvasManager.initElement(container);} //canvas for IE8

      // requestAnimationFrame Shim
      (function() {
        window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
      })();


      var w = $('.canvas').width();
      var h = $('.canvas').height();

      container.setAttribute('width', w);
      container.setAttribute('height', h);

      $('.canvas').append(container);

      var ctx = container.getContext('2d');
      var X = w / 2;
      var Y = h / 2;
      var R = Math.min(w, h) / 2 - 20;
      var onePiece =  1/P*2*Math.PI;
      var lastPosition = 1/2*Math.PI;
      var l = P;
      var i = 0;

      ctx.lineWidth = 3;
      ctx.clearRect(0, 0, w, h);


      step(i);//step for draw arc

      function animateArc(k, cb) {

        //animate start
        ctx.arc(X, Y, R + 10, lastPosition, lastPosition + k);
        ctx.fill();
        k = k + onePiece/7;

        if (k > onePiece) {
        	cb();
        	return;
        }

        if (requestAnimationFrame) {
          requestAnimationFrame(function () { animateArc(k, cb); });//arc-animation for moder browsers
        };

      }

      function step(i) {
        var color = (i === levelCount) ? COLOR[1] : (i < levelCount) ? COLOR[0] : COLOR[2]; //coloring 
        var k = requestAnimationFrame ? 0 : onePiece; //animate one arc
        ctx.fillStyle = color;
        ctx.strokeStyle = '#fff';
        ctx.beginPath();
        ctx.moveTo(X, Y);
        if (!k) {
	        animateArc(k, cb);
        } else {
        	cb();
        }
      }

      function cb() {
        //next step-animation
        ctx.lineTo(X, Y);
        ctx.stroke();

        addText.start(levelCount, P, X, Y, lastPosition, onePiece, R, i);

        lastPosition += onePiece;//next arc
        i++;

        if (i < l) {
            step(i); //next step

      }
  	}


   }

    return {
        start: canvasDraw
    };
});
