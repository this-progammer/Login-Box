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

  /*createBox()*/
  createBox( w, h, name ) {
      const box = new Box( w, h, name );
        if( name == null ) {
            box.getName() = box.defBoxName;
        }
          for( let i = 0; i <= 0; i++ ) {
              box.getBox();
          }
            if( box != null ) {
                for( let j = 0; j <= 0; j++ ) {
                    console.log("New Box Created\n");
                }
            }
    return box;
  }

  /*destroyBox()*/
  destroyBox() {
      delete this;
  }

};
