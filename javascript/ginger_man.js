/*
10. First we need the 'ginger man factory' that will produce the ginger man div
elements  with for us. The elements would need to have class so that we can
style them later.
*/

class GingerMan {
  constructor() {
    this.gingerElement = $("<div class='ginger_man'></div>");
    /*
    18. We want now to give the ginger men the hat. For that, let's introduce the
    variations of the hats the ginger men can have(with the pictures)
    */
    this.hats = {
        SANTA: "santa_hat.png",
        ST: "st_hat.png",
        NONE: 0
    };
    /*
    23. Now the time for neck accessory. Add the variations just like we did above
    */
    this.neck = {
        PAPILLON: "neck_papillon.png",
        SCARF: "neck_scarf.png",
        NONE: 0
    };
    /*
    27. Time for the buttons - you know what to do(see above!)
    */
    this.buttons = {
        RED: "btn_red.png",
        GREEN: "btn_green.png",
        BLUE: "btn_blue.png",
        NONE: 0
    };

  };

  /*
  11. Now when we have a factory, we need a way to ask the factory to give us
  the ginger man. (Go to index.html afterwards)
  */

  getGingerMan() {
      return this.gingerElement;
  };

  /*
  15. On this step we want to create a way to tell the factory to bake the
  chocolate ginger men. Once we did it, let's head to index.html and place
  some chocolate ginger men on the tray
  */

  setChocolate() {
      this.gingerElement.addClass("chocolate");
  };

  /*
  19. Once we have the types of the hat, let's create a wall to tell which hat
  we want on the ginger men. Go to index.html to place the hats
  */
  setHat(hat) {
    var hatElement = $("<div class='block hat'></div>");
    this.gingerElement.children(".hat").remove();
    if (hat == 0) {
        return;
    }
    hatElement.css("background-image", 'url("images/ginger/' + hat + '")');
    this.gingerElement.append(hatElement);
  };
  /*
  24. And just as we did with the hats, we want to have a way to tell which neck
  accessory do we want(and then add it in index.html)
  */
  setNeck(neck) {
    var neckElement = $("<div class='block neck'></div>");
    this.gingerElement.children(".neck").remove();
    if (neck == 0) {
        return;
    }
    neckElement.css("background-image", 'url("images/ginger/' + neck + '")');
    this.gingerElement.append(neckElement);
  };

  /*
  28. Define the way to tell which buttons do you want (and then add it in index.html)
  */
  setButton(button) {
    var buttonsElement = $("<div class='block buttons'></div>");
    this.gingerElement.children(".buttons").remove();
    if (button == 0) {
        return;
    }
    buttonsElement.css("background-image", 'url("images/ginger/' + button + '")');
    this.gingerElement.append(buttonsElement);
  };

  /*
  32. Define the way to add the candy (and then add it in index.html)
  */

  setCandy(hasCandy) {
    var candyElement = $("<div class='block candy'></div>");
    if (hasCandy) {
        this.gingerElement.append(candyElement);
    } else {
        this.gingerElement.children(".candy").remove();
    }
  }
}
