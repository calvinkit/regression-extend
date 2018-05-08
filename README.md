## Installation
This module works on node and in the browser. It is available as the 'regression-extend' package on [npm](https://www.npmjs.com/package/regression-extend).

### npm

```
npm install --save regression-extend
```

## Usage

```javascript
var regression = require('regression-extend');
var result = regression.linear([[0, 1], [32, 67], [12, 79]]);
var gradient = result.equation[0];
var result = regression.linear([0,32,12], [1,67,79]);
var gradient = result.equation[0];
var sse = result.sse;
```

Data can be passed into the model as an points array, or as xArray, yArray. The last (2nd or 3rd, depends on what's the input format) parameter can be used to configure the model. 
For details, please consult regression package documentation.


### Properties
In addition to original regression properties, it includes the following: 

- `residual`: an array of the y-y', which is the residual/prediction error
- `me`: mean error of the residual 
- `sse`: Sum of square error/residual
- `mse`: Mean square error (MSE)
- `smse': Square root of MSE 
- 'se': Standard error of beta/equation[0] 
- 'tstat': t-Statistics of beta
- 'zscore': an array of zscore of the predictions
