function donut(id) {
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
            stroke-dasharray: 90, 10; \
        } \
    } \
    </style> \
        <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut" style="margin:0 auto;"> \
          <circle class="donut-flat" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke="#ebebeb" stroke-width="3.5"></circle> \
          <circle class="donut-slice" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="3.5" stroke="#ff6200" stroke-dasharray="90 10" stroke-dashoffset="25"></circle> \
        </svg> \
      </div> \
    '

    document.getElementById(id).innerHTML = template;
}

donut("chart");