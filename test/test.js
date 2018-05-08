var util = require('util');
var assert = require('assert');
var regression = require('./../lib/regression');
var stat = require('./../lib/statistics');

describe('Linear Regression', function() {
    var x = [1,2,3,4,5,6,7,8,9,10];
    var y = [3,5,7,9,11.5,12.99,15.1,17.2,19.03,20.98];
    var result = regression.linear(x,y, {precision:5});
    it('beta w/ array', function() {
        assert.strictEqual(result.equation[0], 2.00497);;
    });
    it('alpha w/ array', function() {
        assert.strictEqual(result.equation[1], 1.05267);;
    });
    it('mean error w/ array', function() {
        assert.strictEqual(+result.me.toFixed(5), -0.00001);
    });
    it('SSE error w/ array', function() {
        assert.strictEqual(+result.sse.toFixed(5), 0.23536);
    });
    it('SMSE error w/ array', function() {
        assert.strictEqual(+result.smse.toFixed(5), 0.15342);
    });
    it('tStat error w/ array', function() {
        assert.strictEqual(+result.tstat.toFixed(5), 106.17231);
    });

    var x = [1,2,3,4,5,6,7,8,9,10];
    var y = [3,5,7,9,11.5,12.99,15.1,17.2,19.03,20.98];
    var pts = x.map((e,i) => [e, y[i]]);
    var result = regression.linear(pts, {precision:5});
    it('beta w/ pts', function() {
        assert.strictEqual(result.equation[0], 2.00497);;
    });
    it('alpha w/ pts', function() {
        assert.strictEqual(result.equation[1], 1.05267);;
    });
});
