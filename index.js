var doc = require('doc-js');

module.exports = function(hoverClass, selector){
    var down = [],
        selector = selector || 'button, a',
        hoverClass = hoverClass || 'hover';

    doc(document).on('touchstart mousedown', selector, function(event){
        doc(event.target).addClass(hoverClass);
        down.push(event.target);
    });
    doc(document).on('touchend mouseup', function(event){
        while(down.length){
            doc(down.pop()).removeClass(hoverClass);
        }
    });
};