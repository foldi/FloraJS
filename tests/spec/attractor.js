describe("Attractor", function() {

  var obj, getDataType, system, records;

  beforeEach(function() {

    // create world element
    var world = document.createElement('div');
    world.id = 'worldA';
    world.className = 'world';
    document.body.appendChild(world);

    system = Flora.Mantle.System;
    system.create(null, document.getElementById('worldA'));
    getDataType = Flora.Utils.getDataType;
  });

  afterEach(function() {
    Flora.Mantle.PubSub.publish('destroySystem');
    obj = null;
  });

  it("should create an Attractor with its required properties.", function() {
    obj = system.add('Attractor');
    expect(getDataType(obj.G)).toEqual('number');
    expect(getDataType(obj.mass)).toEqual('number');
    expect(getDataType(obj.isStatic)).toEqual('boolean');
    expect(getDataType(obj.width)).toEqual('number');
    expect(getDataType(obj.width)).toEqual('number');
    expect(getDataType(obj.opacity)).toEqual('number');
    expect(getDataType(obj.zIndex)).toEqual('number');
    expect(obj.name).toEqual('Attractor');
  });

});