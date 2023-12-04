import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-gruppa-группа-l');
  this.route('i-i-s-gruppa-группа-e',
  { path: 'i-i-s-gruppa-группа-e/:id' });
  this.route('i-i-s-gruppa-группа-e.new',
  { path: 'i-i-s-gruppa-группа-e/new' });
  this.route('i-i-s-gruppa-студент-l');
  this.route('i-i-s-gruppa-студент-e',
  { path: 'i-i-s-gruppa-студент-e/:id' });
  this.route('i-i-s-gruppa-студент-e.new',
  { path: 'i-i-s-gruppa-студент-e/new' });
});

export default Router;
