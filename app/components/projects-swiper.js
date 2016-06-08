import Ember from 'ember';

export default Ember.Component.extend({
  slideTitle: "",
  slideDescription: "",
  slideSource: "",
  isGoogle: null,
  isDemo: null,
  slideLive: "",

  actions: {
    swipeContent(properties) {
      switch (properties.attributes[2].value) {
        case "0":
          this.set("slideTitle", "Shake It Up!");
          this.set("slideDescription", "An Android app that helps users decide on their evening plans. It uses animations, gesture detection, fragments, implicit intents, and the Unsplash, Yelp, and GoogleMaps APIs.");
          this.set("slideSource", "https://github.com/midoribowen/ShakeItUp");
          this.set("isGoogle", true);
          this.set("isDemo", false);
          this.set("slideLive", "https://play.google.com/store/apps/details?id=com.epicodus.shake_it_up");
          break;
        case "1":
          this.set("slideTitle", "Movie Lookup");
          this.set("slideDescription", "An Android app that uses JSON data from the Movie Database (TMDb). Users can search for and browse movie info, set movie posters as wallpaper, search Netflix, and share posters.");
          this.set("slideSource", "https://github.com/midoribowen/MovieTime");
          this.set("isGoogle", true);
          this.set("isDemo", false);
          this.set("slideLive", "https://play.google.com/store/apps/details?id=com.jtrmb.movietime");
          break;
        case "2":
          this.set("slideTitle", "Drink");
          this.set("slideDescription", "An EmberJS web app optimized for mobile that consumes data from the Absolut Drinks Database. Users can select beverages to serve at a party, calculate the ingredients they need by guest number, and print a grocery list.");
          this.set("slideSource", "https://github.com/midoribowen/cocktail");
          this.set("isGoogle", false);
          this.set("isDemo", true);
          this.set("slideLive", "http://drink-cocktails.herokuapp.com/");
          break;
        case "3":
          this.set("slideTitle", "YesChef!");
          this.set("slideDescription", "A Java web app that integrates a point-of-sale and inventory management system for restaurants. Demonstrates routing in a Spark framework, CRUD, and use of a relational database with PostgreSQL.");
          this.set("slideSource", "https://github.com/midoribowen/kitchen");
          this.set("isGoogle", false);
          this.set("isDemo", false);
          break;
        case "4":
          this.set("slideTitle", "eCommerce Site");
          this.set("slideDescription", "An EmberJS front-end online store that uses an Ember service for shopping cart functionality. Features include toggles for product attribute selection and a running total price. Uses Ember Paper add-on for material design features.");
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
