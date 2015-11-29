var assert = require('chai').assert;

var tekken = require('../index');

var pattern = /([A-Za-z 0-9])/;

describe('Tekken', function() {
    it('should return a name when tekken.name() is called', function() {
        assert.match(tekken.name(), pattern, 'FUCK YEAH!');
    });
    it('should return an Array tekken.characters() is called', function() {
        assert.isArray(tekken.characters());
    });
});
