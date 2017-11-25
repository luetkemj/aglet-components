import React from 'react';
import renderer from 'react-test-renderer';
import Footer from './footer.component';

test('Footer renders correctly', () => {
  const tree = renderer
    .create(<Footer repo="https://github.com/luetkemj/aglet-components" />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
