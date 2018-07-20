// test
import test from 'ava';
import React from 'react';
import {compose} from 'redux';
import {measure} from 'remeasure';

// src
import * as index from 'src/index';

test('if statics will decorate the component passed', (t) => {
  const Component = () => <div>Component</div>;

  const properties = {
    custom: 'bar',
    displayName: 'Foo',
  };

  const Result = index.default(properties)(Component);

  t.is(Result, Component);

  Object.keys(properties).forEach((property) => {
    t.is(Result[property], properties[property]);
  });
});

test('if statics will work composed', (t) => {
  const Component = () => <div>Component</div>;

  const properties = {
    custom: 'bar',
    displayName: 'Foo',
  };

  const Composed = compose(
    index.default(properties),
    measure.width
  )(Component);

  Object.keys(properties).forEach((property) => {
    t.is(Composed[property], properties[property]);
  });
});

test('if statics will throw a ReferenceError when the properties passed are not an object', (t) => {
  t.throws(() => index.default(), ReferenceError);
});

test('if statics will throw a ReferenceError when the Component passed is not a function', (t) => {
  t.throws(() => index.default({})({}), ReferenceError);
});
