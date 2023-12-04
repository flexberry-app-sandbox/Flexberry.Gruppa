import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

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
