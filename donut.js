function donut(id, config) {
    var slice_val = config.value;
    var rest_val = (100-config.value);
    var val = slice_val + " " + rest_val;

    var background =  config.background ? config.background : "#ebebeb";
    var color = config.color ? config.color : "#ff0";
    var stroke_width = config.stroke_width ? config.stroke_width : 3.5;
    var padding = config.padding ? config.padding : 0;
    var background_width = stroke_width + padding;
    var linecap = config.radius ? "round" : "butt";

    var template = ' \
    <div class="svg-item"> \
    <style> \
    .donut-slice { \
        animation: donut 3s; \
    } \
    @keyframes donut { \
        0% { \
            stroke-dasharray: 0, 100; \
        } \
        100% { \
            stroke-dasharray: '+ slice_val +', '+ rest_val +'; \
        } \
    } \
    </style> \
        <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut" style="margin:0 auto;"> \
          <circle class="donut-flat" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke="'+ background +'" stroke-width="'+ background_width  +'"></circle> \
          <circle class="donut-slice" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="'+ stroke_width +'" stroke="'+ color +'" stroke-dasharray="'+ val +'" stroke-dashoffset="25" stroke-linecap="'+ linecap +'"></circle> \
        </svg> \
      </div> \
    '

    document.getElementById(id).innerHTML = template;
}

donut("chart", {
    value: 80,
    color: "lightgreen",
    background: "#eee",
    stroke_width: 3,
    padding: 2,
    radius: true
});