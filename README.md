# TEKKEN
[![Build Status](https://travis-ci.org/shbm/tekken.svg)](https://travis-ci.org/shbm/tekken)
[![Downloads/Month](https://img.shields.io/npm/dm/tekken.svg)](https://www.npmjs.com/package/tekken)

A node.js module to generate random names of Tekken, Game Of Thrones, Silicon Valley, Sherlock, Breaking Bad and Suits characters.

## INSTALLATION
```shell
npm install tekken
```

## USAGE

```javascript
var t = require('tekken');

t.tekken.name(); // returns the name of a Tekken Player
t.tekken.characters(); // returns an Array of names of Tekken Players

t.GOT.name(); // returns the name of a Game Of Thrones character
t.GOT.characters(); // returns an Array of names of Games Of Thrones characters

t.suits.name(); // returns the name of a Suits character
t.suits.characters(); // returns an Array of names of suits characters

t.breakingBad.name(); // returns the name of a Breaking Bad character
t.breakingBad.characters(); // return an Array of names of Breaking Bad characters

t.siliconValley.name(); // returns the name of a Silicon Valley character
t.siliconValley.characters(); // returns an Array of names of Silicon Valley characters

t.sherlock.name(); // returns the name of a Sherlock character
t.sherlock.characters(); // returns an Array of names of Sherlock characters

```

## LICENSE
MIT
