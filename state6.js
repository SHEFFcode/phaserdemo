demo.state6 = function () {};
demo.state6.prototype = {
  preload:  function () {},
  create:   function () {
    game.stage.backgroundColor = '#BADA55';
    console.log('State 6');
    addChangeStateEventListeners();
  },
  update:   function () {}
};