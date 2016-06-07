import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('projects-swiper', 'Integration | Component | projects swiper', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{projects-swiper}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#projects-swiper}}
      template block text
    {{/projects-swiper}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
