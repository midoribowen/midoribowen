import Ember from 'ember';

export default Ember.Component.extend({
  slideTitle: "",
  slideDescription: "",
  slideSource: "",
  slideLive: "",

  actions: {
    swipeContent(properties) {
      switch (properties.attributes[2].value) {
        case "0":
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
