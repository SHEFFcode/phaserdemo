demo.state8 = function () {};
demo.state8.prototype = {
  preload:  function () {},
  create:   function () {
    game.stage.backgroundColor = '#BADA55';
    console.log('State 8');
    addChangeStateEventListeners();
  },
  update:   function () {}
};