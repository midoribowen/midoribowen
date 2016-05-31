import Ember from 'ember';

export default function() {
  this.transition(
    this.fromRoute('index'),
    this.toRoute('resume'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('resume'),
    this.toRoute('about'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
  this.transition(
    this.fromRoute('about'),
    this.toRoute('index'),
    this.use('toRight'),
    this.reverse('toLeft')
  );
}
