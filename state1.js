demo.state1 = function () {};
demo.state1.prototype = {
  preload:  function () {},
  create:   function () {
    game.stage.backgroundColor = '#ddd';
    console.log('State 1');
    addChangeStateEventListeners();
  },
  update:   function () {}
};