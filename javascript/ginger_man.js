/*
8. First we need the 'ginger man factory' that will produce the ginger man div
elements  with for us. The elements would need to have class so that we can
style them later.
*/

var GingerMan = function () {
    this.gingerElement = $("<div class='ginger_man'></div>");
  }

  /*
  9. Now when we have a factory, we need a way to ask the factory to give us
  the ginger man.
  */

  GingerMan.prototype.getGingerMan = function () {
      return this.gingerElement;
  };

  /*
  10. So, we have a factory, we can ask the factory to give us a ginger man and
  now let's ask the factory to give us 10 ginger men

  - create an array gingerMen
  - add 10 genger men to the array
  */

  var gingerMen = [];
        for(var i = 0 ; i<10; i++) {
            gingerMen[i] = new GingerMan();
            $("#inside_tray").append(gingerMen[i].getGingerMan());
        }
