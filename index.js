var doc = require('doc-js');

module.exports = function(hoverClass, selector){
    var down = [],
        selector = selector || 'button, a',
        hoverClass = hoverClass || 'hover';

    function setClasses(){
        for(var i = 0; i < down.length; i++){
            doc(down[i]).addClass(hoverClass);
        }
    }

    doc(document).on('touchstart mousedown', selector, function(event){
        var target = doc(event.target).closest(selector);
        down.push(target);
        setTimeout(setClasses, 50);
    });

    function cancelHover(event){
        if(event.defaultPrevented){
            return;
        }
        while(down.length){
            doc(down.pop()).removeClass(hoverClass);
        }
    }

    doc(document).on('touchend touchmove touchcancel mouseup mousemove', cancelHover);
};