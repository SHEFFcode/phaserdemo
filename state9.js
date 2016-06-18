demo.state9 = function () {};
demo.state9.prototype = {
  preload:  function () {},
  create:   function () {
    game.stage.backgroundColor = '#BADA55';
    console.log('State 9');
    addChangeStateEventListeners();
  },
  update:   function () {}
};