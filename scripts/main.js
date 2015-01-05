requirejs.config({
//enforceDefine: true,
  paths: {
    animation: 'Controllers/animation',
    jquery: '../bower_components/jquery/dist/jquery',
    excanvas: 'vendor/excanvas',
    addText: 'Controllers/text'
  }
});


require(['animation'], function(animation){

 animation.start(6, 10, ['black', 'yellow', 'red']);

});	
