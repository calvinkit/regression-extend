var regression = require('regression');
var stat = require('./statistics');
var myRegression = {};

var methods = ['linear', 'exponential', 'logarithmic', 'power', 'polynomial']; 

methods.forEach((e) => {
    myRegression[e] = function(ptsOrxArray, optOryArray, opt) {
        if (Array.isArray(optOryArray)) { 
            ptsOrxArray = ptsOrxArray.map((x,i) => [x, optOryArray[i]]);
            optOryArray = opt;
        } 
        var result = regression[e](ptsOrxArray, optOryArray);
        result.residual = ptsOrxArray.map((e,i) => e[1]-result.points[i][1]);
        result.me = stat.mean(result.residual);
        result.sse = stat.variance(result.residual)*(result.residual.length-1);         // sum of square error (use variance since me = 0 anyways)
        result.mse = result.sse/ptsOrxArray.length;                                     // almost same as sample variance but /N instead of /N-1
        result.smse = Math.sqrt(result.mse);                                            // square root of mse
        result.se = Math.sqrt(result.sse/(ptsOrxArray.length-2)/stat.variance(ptsOrxArray.map((e)=>e[0]))/(ptsOrxArray.length-1));   // standard error of the slope 
        result.tstat = result.se!=0?result.equation[0]/result.se:1000; 
        //result.pValue = x.length<=2?0:new StudentT(x.length-1).cdf(result.tstat);
        result.zscore = result.residual.map((e) => e/result.smse);
        return result;
    }
});

module.exports = myRegression;
