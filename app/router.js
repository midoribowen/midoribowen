import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about', { path: '/about' });
  this.route('resume', { path: '/resume' });
});

export default Router;
