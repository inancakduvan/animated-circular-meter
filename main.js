var meter = new AnimatedCircularMeter("chart", {
    value: 80,
    color: "#F3C089",
    background: "#eee",
    stroke_width: 3,
    padding: 1,
    radius: true,
    text: {
        show: true,
        color: "#000",
        font_size: "24px"
    }
}, function(value) {
    console.log(value)
});

meter.draw();