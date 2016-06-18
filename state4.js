demo.state4 = function () {};
demo.state4.prototype = {
  preload:  function () {},
  create:   function () {
    game.stage.backgroundColor = '#BADA55';
    console.log('State 4');
    addChangeStateEventListeners();
  },
  update:   function () {}
};