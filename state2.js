demo.state2 = function () {};
demo.state2.prototype = {
  preload:  function () {},
  create:   function () {
    game.stage.backgroundColor = '#BADA55';
    console.log('State 2');
    addChangeStateEventListeners();
  },
  update:   function () {}
};