import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.gruppa.caption'),
          title: i18n.t('forms.application.sitemap.gruppa.title'),
          children: [{
            link: 'i-i-s-gruppa-группа-l',
            caption: i18n.t('forms.application.sitemap.gruppa.i-i-s-gruppa-группа-l.caption'),
            title: i18n.t('forms.application.sitemap.gruppa.i-i-s-gruppa-группа-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-gruppa-студент-l',
            caption: i18n.t('forms.application.sitemap.gruppa.i-i-s-gruppa-студент-l.caption'),
            title: i18n.t('forms.application.sitemap.gruppa.i-i-s-gruppa-студент-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})