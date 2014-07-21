var Burner = require('Burner'),
    Vector = Burner.Vector,
    test = require('tape'),
    Oscillator, obj;

function beforeTest() {
  Burner.System.setupFunc = function() {};
  Burner.System._resetSystem();
}

test('load Oscillator.', function(t) {
  Oscillator = require('../src/Oscillator').Oscillator;
  t.ok(Oscillator, 'object loaded');
  t.end();
});

test('new Oscillator() should have default properties.', function(t) {

  beforeTest();

  obj = new Oscillator();
  t.equal(obj.name, 'Oscillator', 'name.');
  t.assert(obj.initialLocation.x === 0 && obj.initialLocation.y === 0, 'default initialLocation.');
  t.assert(obj.lastLocation.x === 0 && obj.lastLocation.y === 0, true, 'default lastLocation.');
  t.assert(obj.amplitude.x === 0 && obj.amplitude.y === 0, 'default amplitude.');
  t.equal(obj.acceleration instanceof Vector, true, 'default acceleration.');
  t.equal(obj.aVelocity instanceof Vector, true, 'default aVelocity.');
  t.equal(obj.isStatic, false, 'default isStatic.');
  t.equal(obj.isPerlin, false, 'default isPerlin.');
  t.equal(obj.perlinSpeed, 0.005, 'default perlinSpeed.');
  t.equal(obj.perlinTime, 0, 'default perlinTime.');
  t.equal(obj.perlinAccelLow, -2, 'default perlinAccelLow.');
  t.equal(obj.perlinAccelHigh, 2, 'default perlinAccelHigh.');
  t.equal(typeof obj.perlinOffsetX, 'number', 'default perlinOffsetX.');
  t.equal(typeof obj.perlinOffsetY, 'number', 'default perlinOffsetY.');
  t.equal(obj.width, 20, 'default width.');
  t.equal(obj.height, 20, 'default height.');
  t.assert(obj.color[0] === 200 && obj.color[1] === 100 && obj.color[2] === 0, 'default color.');
  t.equal(obj.borderWidth, 0, 'default borderWidth.');
  t.equal(obj.borderStyle, 'solid', 'default borderStyle.');
  t.assert(obj.borderColor[0] === 255 && obj.borderColor[1] === 150 && obj.borderColor[2] === 50, 'default borderColor.');
  t.equal(obj.borderRadius, 100, 'default borderRadius.');
  t.equal(obj.boxShadowOffsetX, 0, 'default boxShadowOffsetX.');
  t.equal(obj.boxShadowOffsetY, 0, 'default boxShadowOffsetY.');
  t.equal(obj.boxShadowBlur, 0, 'default boxShadowBlur.');
  t.equal(obj.boxShadowSpread, 0, 'default boxShadowSpread.');
  t.assert(obj.boxShadowColor[0] === 200 && obj.boxShadowColor[1] === 100 && obj.boxShadowColor[2] === 0, 'default boxShadowColor.');

  t.end();
});

test('new Oscillator() should have custom properties.', function(t) {

  beforeTest();

  obj = new Oscillator({
    acceleration: new Vector(),
    aVelocity: new Vector(),
    isStatic: true,
    isPerlin: true,
    perlinSpeed: 0.001,
    perlinTime: 100,
    perlinAccelLow: -3,
    perlinAccelHigh: 3,
    perlinOffsetX: 100,
    perlinOffsetY: 100,
    width: 10,
    height: 10,
    color: [100, 50, 10],
    borderWidth: 20,
    borderStyle: 'dotted',
    borderColor: [150, 10, 10],
    borderRadius: 30,
    boxShadowOffsetX: 10,
    boxShadowOffsetY: 10,
    boxShadowBlur: 4,
    boxShadowSpread: 10,
    boxShadowColor: [10, 30, 80]
  });

  t.equal(obj.acceleration instanceof Vector, true, 'custom acceleration.');
  t.equal(obj.aVelocity instanceof Vector, true, 'custom aVelocity.');
  t.equal(obj.isStatic, true, 'custom isStatic.');
  t.equal(obj.isPerlin, true, 'custom isPerlin.');
  t.equal(obj.perlinSpeed, 0.001, 'custom perlinSpeed.');
  t.equal(obj.perlinTime, 100, 'custom perlinTime.');
  t.equal(obj.perlinAccelLow, -3, 'custom perlinAccelLow.');
  t.equal(obj.perlinAccelHigh, 3, 'custom perlinAccelHigh.');
  t.equal(obj.perlinOffsetX, 100, 'custom perlinOffsetX.');
  t.equal(obj.perlinOffsetY, 100, 'custom perlinOffsetY.');
  t.equal(obj.width, 10, 'custom width.');
  t.equal(obj.height, 10, 'custom height.');
  t.assert(obj.color[0] === 100 && obj.color[1] === 50 && obj.color[2] === 10, 'custom color.');
  t.equal(obj.borderWidth, 20, 'custom borderWidth.');
  t.equal(obj.borderStyle, 'dotted', 'custom borderStyle.');
  t.assert(obj.borderColor[0] === 150 && obj.borderColor[1] === 10 && obj.borderColor[2] === 10, 'custom borderColor.');
  t.equal(obj.borderRadius, 30, 'custom borderRadius.');
  t.equal(obj.boxShadowOffsetX, 10, 'custom boxShadowOffsetX.');
  t.equal(obj.boxShadowOffsetY, 10, 'custom boxShadowOffsetY.');
  t.equal(obj.boxShadowBlur, 4, 'custom boxShadowBlur.');
  t.equal(obj.boxShadowSpread, 10, 'custom boxShadowSpread.');
  t.assert(obj.boxShadowColor[0] === 10 && obj.boxShadowColor[1] === 30 && obj.boxShadowColor[2] === 80, 'custom boxShadowColor.');

  t.end();
});

test('draw() should assign a css test string to the style property.', function(t) {

  beforeTest();

  var obj;

  Burner.System.Classes = {
    Oscillator: Oscillator
  };

  Burner.System.setup(function() {
    this.add('World');
    obj = this.add('Oscillator'); // add your new object to the system
  });

  Burner.System._stepForward();

    t.equal(obj.el.style.width, '20px', 'el.style width.');
    t.equal(obj.el.style.height, '20px', 'el.style height.');
    t.equal(obj.el.style.backgroundColor, 'rgb(200, 100, 0)', 'el.style backgroundColor');
    t.equal(obj.el.style.borderTopWidth, '0px', 'el.style border top width');
    t.equal(obj.el.style.borderRightWidth, '0px', 'el.style border right width');
    t.equal(obj.el.style.borderBottomWidth, '0px', 'el.style border bottom width');
    t.equal(obj.el.style.borderLeftWidth, '0px', 'el.style border left width');
    t.equal(obj.el.style.borderTopStyle, 'solid', 'el.style border top style');
    t.equal(obj.el.style.borderRightStyle, 'solid', 'el.style border right style');
    t.equal(obj.el.style.borderBottomStyle, 'solid', 'el.style border bottom style');
    t.equal(obj.el.style.borderLeftStyle, 'solid', 'el.style border left style');
    t.equal(obj.el.style.borderTopColor, 'rgb(255, 150, 50)', 'el.style border top color');
    t.equal(obj.el.style.borderRightColor, 'rgb(255, 150, 50)', 'el.style border right color');
    t.equal(obj.el.style.borderBottomColor, 'rgb(255, 150, 50)', 'el.style border bottom color');
    t.equal(obj.el.style.borderLeftColor, 'rgb(255, 150, 50)', 'el.style border left color');
    t.equal(obj.el.style.borderTopLeftRadius, '100% 100%', 'el.style border top left radius');
    t.equal(obj.el.style.borderTopRightRadius, '100% 100%', 'el.style border top right radius');
    t.equal(obj.el.style.borderBottomRightRadius, '100% 100%', 'el.style border bottom right radius');
    t.equal(obj.el.style.borderBottomLeftRadius, '100% 100%', 'el.style border bottom left radius');
    t.equal(obj.el.style.boxShadow, 'rgb(200, 100, 0) 0px 0px 0px 0px', 'el.style boxShadow');
    t.equal(obj.el.style.opacity, '0.75', 'el.style opacity');
    t.equal(obj.el.style.zIndex, '1', 'el.style zIndex');
  t.end();


});
