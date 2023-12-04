import { Serializer as СтудентSerializer } from
  '../mixins/regenerated/serializers/i-i-s-gruppa-студент';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СтудентSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
