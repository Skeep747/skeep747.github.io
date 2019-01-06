$(document).ready(function () {
    'use strict';
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));
    var tool = new Tool();
    tool.onMouseDown = function (event) {
        var c = Shape.Circle(event.point, 60);
        c.fillColor = 'black';
        var text = new PointText(event.point.x, event.point.y+7,5);
        text.justification = 'center';
        text.fillColor = 'white';
        text.fontSize = 15;
        text.content = 'Hello World';
    }
    paper.view.draw();
});