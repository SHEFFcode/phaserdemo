demo.state3 = function () {};
demo.state3.prototype = {
  preload:  function () {},
  create:   function () {
    game.stage.backgroundColor = '#BADA55';
    console.log('State 3');
    addChangeStateEventListeners();
  },
  update:   function () {}
};