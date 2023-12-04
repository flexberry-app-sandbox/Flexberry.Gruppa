import {
  defineNamespace,
  Model as СтудентMixin
} from '../mixins/regenerated/models/i-i-s-gruppa-студент';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СтудентMixin, {
});

defineNamespace(Model);

export default Model;
