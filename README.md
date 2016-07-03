ts-vector
=========

<b>ts-vector</b> provides a Vector class that extends the JavaScript/TypeScript array with the most commonly used mathematical and statistical functions.

<b>This library uses EcmaScript 6 array inheritance, so it's not going to work in old browsers!</b>
Node.js 5.0 and the latest Chrome already support most of the Array inheritance features. 

Install it from NPM: 
`npm install ts-vector --save`
Or use a bundled .js file: 
 [ts-vector.js](https://github.com/ggmod/ts-vector/releases/download/v0.1.0/ts-vector-0.1.0.js)

### Examples

```javascript
var v = new Vector(100).fillBy(() => Math.random());
var {x,y,dx} = v.histogram({ bins: 10 }); 
var mode = x[y.argmax()];
console.log('Most values between:', mode, mode + dx);
var y_cum = y.cumsum();
console.log('Cumulative distribution:', x, y_cum);

var lessCount = v.lessThan(0.5).sum();
console.log('Smaller than 0.5:', lessCount/v.length);

// vector operations:

var v = Vector.from([0, 3, 2, 12, 3]);
var size = v.magnitude();
var result = v.add(1).subtract([1, 3, -2, 2, 7]).dot([5, 0, 1, -3, 4]);
```

#### Licensing
MIT License
