import {
  defineNamespace,
  Model as ГруппаMixin
} from '../mixins/regenerated/models/i-i-s-gruppa-группа';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГруппаMixin, {
});

defineNamespace(Model);

export default Model;
