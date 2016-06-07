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
          this.set("slideSource", "https://github.com/midoribowen/ShakeItUp")
          this.set("slideLive", "https://play.google.com/store/apps/details?id=com.epicodus.shake_it_up");
          break;

        default:
          break;
      }
    }
  }

});
