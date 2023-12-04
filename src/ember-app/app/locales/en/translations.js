import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISGruppaГруппаLForm from './forms/i-i-s-gruppa-группа-l';
import IISGruppaСтудентLForm from './forms/i-i-s-gruppa-студент-l';
import IISGruppaГруппаEForm from './forms/i-i-s-gruppa-группа-e';
import IISGruppaСтудентEForm from './forms/i-i-s-gruppa-студент-e';
import IISGruppaФормаForm from './forms/i-i-s-gruppa-форма';
import IISGruppaГруппаModel from './models/i-i-s-gruppa-группа';
import IISGruppaСтудентModel from './models/i-i-s-gruppa-студент';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-gruppa-группа': IISGruppaГруппаModel,
    'i-i-s-gruppa-студент': IISGruppaСтудентModel
  },

  'application-name': 'Gruppa',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Gruppa',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Gruppa',
          title: 'Gruppa'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        gruppa: {
          caption: 'Gruppa',
          title: 'Gruppa',
          'i-i-s-gruppa-группа-l': {
            caption: 'Группа',
            title: ''
          },
          'i-i-s-gruppa-студент-l': {
            caption: 'Студент',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-gruppa-группа-l': IISGruppaГруппаLForm,
    'i-i-s-gruppa-студент-l': IISGruppaСтудентLForm,
    'i-i-s-gruppa-группа-e': IISGruppaГруппаEForm,
    'i-i-s-gruppa-студент-e': IISGruppaСтудентEForm,
    'i-i-s-gruppa-форма': IISGruppaФормаForm
  },

});

export default translations;
