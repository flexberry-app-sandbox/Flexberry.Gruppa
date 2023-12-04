import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-gruppa-группа', 'Unit | Serializer | i-i-s-gruppa-группа', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-gruppa-группа',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-gruppa-группа',
    'model:i-i-s-gruppa-студент',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
