var doc = require('doc-js');

module.exports = function(hoverClass, selector){
    var down = [],
        selector = selector || 'button, a',
        hoverClass = hoverClass || 'hover';

    doc(document).on('touchstart mousedown', selector, function(event){
        var target = doc(event.target).closest(selector);
        doc(target).addClass(hoverClass);
        down.push(target);
    });
    doc(document).on('touchend touchcancel mouseup mousemove', function(event){
        while(down.length){
            doc(down.pop()).removeClass(hoverClass);
        }
    });
};