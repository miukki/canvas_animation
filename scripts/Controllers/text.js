define(['jquery'], function($){

    function text(levelCount, P, X, Y, lastPosition, onePiece, R, i){

      //show dot-description
      var d = $('#dot');

      if ((i === levelCount) && d.length) {
        var descrClass = levelCount < P/2 ? 'pull-right': 'pull-left';

        var dotLeft = Math.floor(X+Math.cos(lastPosition + 1/2 * onePiece)*R);
        var dotTop = Math.floor(Y+Math.sin(lastPosition + 1/2 * onePiece)*R);

        d.show().css({'left': dotLeft, 'top': dotTop});
        d.find('.descr').addClass(descrClass);

      }


    }

    return {
        start: text
    };
});
