# hoverclass

Automatically add a class to selected elements on 'hover' leverageing touch events.

# why?

Mobile browsers don't hover good.

This makes hover styles choppy at best.

This module fixes this by adding a customisable hover class to a select set of elements when they are touched.

# usage

Require it:

    var hoverclass = require('hoverclass');

Initialise it:

    hoverclass([class, selector]);

You can optionally pass a custom class to set on hover, by default it is .hover

You can optionally pass a custom selector to apply hover classes too, by default it is 'button, a'