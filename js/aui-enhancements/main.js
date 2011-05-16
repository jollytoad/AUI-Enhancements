/**
 * The main module
 *
 * @context atl.general
 */
var $ = require('speakeasy/jquery').jQuery;

$(".aui-dialog:not(.ui-draggable) .dialog-title").live('mouseenter', function() {
  var dialog = $(this).closest('.aui-dialog'),
      shadow = dialog.prev('.aui-shadow');
  dialog.draggable({
    handle: this,
    start: function() {
      shadow.hide('fast');
    }
  });
});

$(".aui-blanket").live('dblclick', function() {
  $(this).toggle('fast');
});

$(".aui-dialog .dialog-title").live("mousewheel", function(event) {
  var dialog = $(this).closest('.aui-dialog'),
      shadow = dialog.prev('.aui-shadow'),
      scale = dialog.data('scale') || 1;
  scale += event.wheelDelta < 0 ? -0.1 : 0.1;
  dialog.data('scale', scale);
  shadow.hide('fast');
  dialog.css({
    '-webkit-transform-origin': '0 0',
    '-webkit-transform': 'scale('+ scale +')'
  });
});
