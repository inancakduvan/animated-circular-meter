var meter = new AnimatedCircularMeter("meter", {
    value: 80,
    color: "#D78AB1",
    background: "#d9d9d9",
    stroke_width: 3,
    padding: 1,
    radius: true,
    text: {
        show: true,
        color: "#E5507A",
        font_size: "30px"
    }
}, function(value) {
    console.log(value)
});

meter.draw();