import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISGruppaГруппаLForm from './forms/i-i-s-gruppa-группа-l';
import IISGruppaСтудентLForm from './forms/i-i-s-gruppa-студент-l';
import IISGruppaформаРедForm from './forms/i-i-s-gruppa-форма-ред';
import IISGruppaГруппаEForm from './forms/i-i-s-gruppa-группа-e';
import IISGruppaГруппаВФормеForm from './forms/i-i-s-gruppa-группа-в-форме';
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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Gruppa',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Gruppa',
          title: 'Gruppa'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-gruppa-группа-l': IISGruppaГруппаLForm,
    'i-i-s-gruppa-студент-l': IISGruppaСтудентLForm,
    'i-i-s-gruppa-форма-ред': IISGruppaформаРедForm,
    'i-i-s-gruppa-группа-e': IISGruppaГруппаEForm,
    'i-i-s-gruppa-группа-в-форме': IISGruppaГруппаВФормеForm,
    'i-i-s-gruppa-студент-e': IISGruppaСтудентEForm,
    'i-i-s-gruppa-форма': IISGruppaФормаForm
  },

});

export default translations;
