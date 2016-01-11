var assert = require('chai').assert;

var t = require('../index');

var pattern = /([A-Za-z 0-9])/;

describe('tekken', function() {
    it('should return a name when tekken.name() is called', function() {
        assert.match(t.tekken.name(), pattern, 'FUCK YEAH!');
    });
    it('should return an Array tekken.characters() is called', function() {
        assert.isArray(t.tekken.characters());
    });
});

describe('siliconValley', function() {
    it('should return a name when siliconValley.name() is called', function() {
        assert.match(t.siliconValley.name(), pattern, 'Shubham Srivastava');
    });
    it('should return an Array when siliconValley.characters() is called', function() {
        assert.isArray(t.siliconValley.characters());
    });
});

describe('suits', function() {
    it('should return a name when suits.names() is called', function() {
        assert.match(t.suits.name(), pattern, 'Shubham Srivastava');
    });
    it('should return an array when suits.characters is called', function() {
        assert.isArray(t.suits.characters());
    });
});

describe('GOT', function() {
    it('should return a name when GOT.names() is called', function() {
        assert.match(t.GOT.name(), pattern, 'Shubham Srivastava');
    });
    it('should return an Array when GOT.characters() is called', function() {
        assert.isArray(t.GOT.characters());
    });
});

describe('breakingBad', function() {
    it('should return a name when breakingBad.name() is called', function() {
        assert.match(t.breakingBad.name(), pattern, 'Walter White');
    });
    it('should return an array when breakingBad.characters() is called', function() {
        assert.isArray(t.breakingBad.characters());
    });
});

describe('sherlock', function() {
    it('should return a name when sherlock.name() is called', function() {
        assert.match(t.sherlock.name(), pattern, 'Walter White');
    });
    it('should return an array when sherlock.characters() is called', function() {
        assert.isArray(t.sherlock.characters());
    });
});

describe('friends', function() {
    it('should return a name when friends.name() is called', function() {
        assert.match(t.friends.name(), pattern, 'Walter White');
    });
    it('should return an array when friends.characters() is called', function() {
        assert.isArray(t.friends.characters());
    });
});
