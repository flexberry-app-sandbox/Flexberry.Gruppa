import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  фИО: DS.attr('string'),
  группа: DS.belongsTo('i-i-s-gruppa-группа', { inverse: null, async: false })
});

export let ValidationRules = {
  фИО: {
    descriptionKey: 'models.i-i-s-gruppa-студент.validations.фИО.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  группа: {
    descriptionKey: 'models.i-i-s-gruppa-студент.validations.группа.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СтудентE', 'i-i-s-gruppa-студент', {
    фИО: attr('ФИО', { index: 0 }),
    группа: belongsTo('i-i-s-gruppa-группа', 'Группа', {
      наименование: attr('Наименование', { index: 2 })
    }, { index: 1, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('СтудентL', 'i-i-s-gruppa-студент', {
    фИО: attr('ФИО', { index: 0 }),
    группа: belongsTo('i-i-s-gruppa-группа', 'Наименование', {
      наименование: attr('Наименование', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
