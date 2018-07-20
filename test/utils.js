// test
import test from 'ava';

// src
import * as utils from 'src/utils';

test('if throws will throw a ReferenceError with the message passed', (t) => {
  const message = 'my special message';

  t.throws(
    () => utils.throws(message),
    ReferenceError,
    message
  );
});
