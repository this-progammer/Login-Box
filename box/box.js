/*
  Login-Box Project.
  File : box.js
*/

class Box {
  constructor( width, height, name ) {
      this.width = width;
      this.height = height;
      this.name = name;
  }

  /*defBoxName*/
  static defBoxName = "Box::Container";

  /*getBox()*/
  getBox() {
    return this;
  }

  /*getWidth()*/
  getWidth() {
    return this.width;
  }

  /*getHeight()*/
  getHeight() {
    return this.height;
  }

  /*getName()*/
  getName() {
    return this.name;
  }

};
