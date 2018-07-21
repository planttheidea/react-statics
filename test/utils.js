// test
import test from 'ava';

// src
import * as utils from 'src/utils';

test('if isPlainObject returns false when the type of the value is not an object', (t) => {
  const value = 'foo';

  const result = utils.isPlainObject(value);

  t.is(result, false);
});

test('if isPlainObject returns false when the value is null', (t) => {
  const value = null;

  const result = utils.isPlainObject(value);

  t.is(result, false);
});

test('if isPlainObject returns false when the value is not a plain object', (t) => {
  const value = [];

  const result = utils.isPlainObject(value);

  t.is(result, false);
});

test('if isPlainObject returns true when the value is a plain object', (t) => {
  const value = {};

  const result = utils.isPlainObject(value);

  t.is(result, true);
});

test('if throws will throw a ReferenceError with the message passed', (t) => {
  const message = 'my special message';

  t.throws(() => utils.throws(message), ReferenceError, message);
});
