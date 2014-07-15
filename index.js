var doc = require('doc-js');

module.exports = function(hoverClass, selector){
    var down = [],
        selector = selector || 'button, a',
        hoverClass = hoverClass || 'hover';

    doc(document).on('touchstart mousedown', selector, function(event){
        var target = doc(event.target).closest(selector);
        target.addClass(hoverClass);
        down.push(target);
    });
    doc(document).on('touchend mouseup', function(event){
        while(down.length){
            down.pop().removeClass(hoverClass);
        }
    });
};