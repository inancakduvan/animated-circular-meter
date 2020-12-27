function Donut(id, config, callback) {
    this.slice_val = config.value;
    this.rest_val = (100-config.value);
    this.val = this.slice_val + " " + this.rest_val;

    this.background =  config.background ? config.background : "#ebebeb";
    this.color = config.color ? config.color : "#ff0";
    this.stroke_width = config.stroke_width ? config.stroke_width : 3.5;
    this.padding = config.padding ? config.padding : 0;
    this.background_width = this.stroke_width + this.padding;
    this.linecap = config.radius ? "round" : "butt";
    this.text = {
        show: config.text ? config.text.show ? "block" : "none" : "none",
        color: config.text ? config.text.color ? config.text.color : config.text.color : this.color,
        font_size: config.text ? config.text.font_size ? config.text.font_size : config.text.font_size : "16px"
    }

    this.template = ' \
    <div class="svg-wrapper" style="position:relative;"> \
    <style> \
    .donut-slice { \
        animation: donut 3s; \
    } \
    @keyframes donut { \
        0% { \
            stroke-dasharray: 0, 100; \
        } \
        100% { \
            stroke-dasharray: '+ this.slice_val +', '+ this.rest_val +'; \
        } \
    } \
    </style> \
        <svg width="100%" height="100%" viewBox="0 0 40 40" class="donut" style="margin:0 auto;"> \
          <circle class="donut-flat" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke="'+ this.background +'" stroke-width="'+ this.background_width  +'"></circle> \
          <circle class="donut-slice" cx="20" cy="20" r="15.91549430918954" fill="transparent" stroke-width="'+ this.stroke_width +'" stroke="'+ this.color +'" stroke-dasharray="'+ this.val +'" stroke-dashoffset="25" stroke-linecap="'+ this.linecap +'"></circle> \
        </svg> \
                \
        <div class="text" style="position:absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); color:'+ this.text.color  +'; font-size: '+ this.text.font_size +'; display:'+ this.text.show  +'">'+ this.slice_val +'%</div>\
      </div> \
    '

    this.draw = function() {
        document.getElementById(id).innerHTML = this.template;

        if(callback) {
            callback(this.slice_val);
        }
    }
}