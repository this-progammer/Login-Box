/*
  Login-Box
  File : loginpage.js
*/

import from "Login-Box/box/box.js";

class LoginPage {
    constructor( w, h, container ) {
        this.w = w;
        this.h = h;
        this.container = container;
    }

    /*getPage()*/
    getPage() {
      return this;
    }

    /*getWidth()*/
    getWidth() {
      return w;
    }

    /*getHeight()*/
    getHeight() {
      return h;
    }

    /*getPageContainer()*/
    getPageContainer() {
      return container;
    }

    /*createLoginPage()*/
    createLoginPage(container, name, login_box, password_box, login_button, reset_button) {
        let W = this.w = container.width; this.getWidth();
        let H = this.h = container.height; this.getHeight();
        this.name = name; container.getBox(); this.getPage();
        const page = LoginPage( W, H, container );
              if( !getPage() ) {
                  return null;
                  container.destroyBox();
                  container.boxClientMessage('Page Within Container Cannot Be Retrieved.\n');
              }
                if( page == null ) {
                    return null;
                }
                  for( int i = 0; i <= 0; i++ ) {
                      if( name[i] == '\0' or null ) {
                          name = 'Login::Page\n';
                      }
                        page.getPage();
                        page.getPageContainer();
                          page.addType( login_box );
                            page.addType( password_box );
                              page.addType( login_button );
                                page.addType( reset_button );
                  }
                
    }
  
  
};
