# animated-circular-meter

<p>Draw easily circular meter.</p>

<p>Animated circular meter is a very small-size library which you can initialize with one function easily and show your value on a circular meter!

<p>Demo: https://inancakduvan.github.io/animated-circular-meter/ </p>

<img src="https://raw.githubusercontent.com/inancakduvan/animated-circular-meter/master/images/meter.png" />

# How to use

import Animated Circular Meter at end of your body tag.

<pre>
  <script src='path/animated-circular-meter.min.js'></script>
</pre>

<h3>Configuration</h3>
<table>
  <tr>
    <td></td>
    <td><b>Type</b></td>
    <td><b>Default</b></td>
  </tr>
  
  <tr>
    <td>value</td>
    <td>number</td>
    <td>-</td>
  </tr>
  
   <tr>
    <td>max</td>
    <td>number</td>
    <td>100</td>
  </tr>
  
   <tr>
    <td>color</td>
    <td>string</td>
    <td>#ff0</td>
  </tr>
  
  <tr>
    <td>background</td>
    <td>string</td>
    <td>#ebebeb</td>
  </tr>
  
  <tr>
    <td>stroke_width</td>
    <td>number</td>
    <td>3.5</td>
  </tr>
  
  <tr>
    <td>padding</td>
    <td>number</td>
    <td>0</td>
  </tr>
  
  <tr>
    <td>radius</td>
    <td>boolean</td>
    <td>false</td>
  </tr>
  
  <tr>
    <td>text</td>
    <td>object</td>
    <td>-</td>
  </tr>
</table>

<h2>Initialize</h2>
<pre>
  <script>
  
    var meter = new AnimatedCircularMeter(id, config, callback);

    meter.draw();
    
    </script>
</pre>

<h2>Example</h2>

<h3>HTML</h3>
<pre>
  <span><</span>div id="meter"><span><</span>/div>
</pre>

<h3>JS</h3>
<pre>
  <script>
  
    var meter = new AnimatedCircularMeter("meter", {
    max: 200,
    value: 160,
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
    
    </script>
</pre>

<h2>Done!!</h2>
