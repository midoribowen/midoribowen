import Ember from 'ember';

export default Ember.Component.extend({
  slideImage1: "",
  slideImage1Alt: "",
  slideImage2: "",
  slideImage2Alt: "",
  slideImage3: "",
  slideImage3Alt: "",
  slideTitle: "",
  slideDescription: "",
  slideSource: "",
  isGoogle: true,
  isDemo: false,
  slideLive: "",

  actions: {
    swipeContent(properties) {
      switch (properties.attributes[2].value) {
        case "0":
          this.set("slideImage1", "assets/img/SIU-1.png");
          this.set("slideImage1Alt", "Image of Shake It Up Android App");
          this.set("slideImage2", "assets/img/SIU-2.png");
          this.set("slideImage2Alt", "Image of Shake It Up Android App");
          this.set("slideImage3", "assets/img/SIU-3.png");
          this.set("slideImage3Alt", "Image of Shake It Up Android App");
          this.set("slideTitle", "Shake It Up!");
          this.set("slideDescription", "An Android app that helps users decide on their evening plans. It uses animations, gesture detection, fragments, implicit intents, and the Yelp and GoogleMaps APIs.");
          this.set("slideSource", "https://github.com/midoribowen/ShakeItUp");
          this.set("isGoogle", true);
          this.set("isDemo", false);
          this.set("slideLive", "https://play.google.com/store/apps/details?id=com.epicodus.shake_it_up");
          break;
        case "1":
          this.set("slideTitle", "MovieTime");
          this.set("slideDescription", "MovieTime App");
          this.set("slideSource", "https://github.com/midoribowen/MovieTime");
          this.set("isGoogle", true);
          this.set("isDemo", false);
          this.set("slideLive", "https://play.google.com/store/apps/details?id=com.jtrmb.movietime");
          break;
        case "2":
          this.set("slideTitle", "Drink");
          this.set("slideDescription", "Drink App");
          this.set("slideSource", "https://github.com/midoribowen/cocktail");
          this.set("isGoogle", false);
          this.set("isDemo", true);
          this.set("slideLive", "http://drink-cocktails.herokuapp.com/");
          break;
        case "3":
          this.set("slideTitle", "Kitchen");
          this.set("slideDescription", "Kitchen App");
          this.set("slideSource", "https://github.com/midoribowen/kitchen");
          this.set("isGoogle", false);
          this.set("isDemo", false);
          break;
        case "4":
          this.set("slideTitle", "eCommerce Site");
          this.set("slideDescription", "eCommerce Site");
          this.set("slideSource", "https://github.com/midoribowen/ecommerce-site");
          this.set("isGoogle", false);
          this.set("isDemo", true);
          this.set("slideLive", "http://michael-scott-paper.herokuapp.com");
          break;
        default:
          break;
      }
    }
  }

});
