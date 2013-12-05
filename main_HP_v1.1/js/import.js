(function(){
    if (! new Array().push) return false;
    var scripts = new Array(
      'metro-js/metro-accordion.js',
      'metro-js/metro-button-set.js',
      'metro-js/metro-calendar.js',
      'metro-js/metro-carousel.js',
      'metro-js/metro-core.js',
      'metro-js/metro-countdown.js',
      'metro-js/metro-date-format.js',
      'metro-js/metro-datepicker.js',
      'metro-js/metro-dialog.js',
      'metro-js/metro-drag-tile.js',
      'metro-js/metro-dropdown.js',
      'metro-js/metro-fluentmenu.js',
      'metro-js/metro-hint.js',
      'metro-js/metro-input-control.js',
      'metro-js/metro-listview.js',
      'metro-js/metro-live-tile.js',
      'metro-js/metro-loader.js',
      'metro-js/metro-notify.js',
      'metro-js/metro-plugin-template.js',
      'metro-js/metro-progressbar.js',
      'metro-js/metro-rating.js',
      'metro-js/metro-slider.js',
      'metro-js/metro-stepper.js',
      'metro-js/metro-streamer.js',
      'metro-js/metro-tab-control.js',
      'metro-js/metro-table.js',
      'metro-js/metro-times.js',
      'metro-js/metro-touch-handler.js',
      'metro-js/metro-treeview.js'
    );
  for (var i=0; i<scripts.length; i++) {
    document.write('<script type="text/javascript" src="' +scripts[i] +'"></script>');
  }
})();