import React from 'react';
import renderer from 'react-test-renderer';

import {CommentSubmissionForm} from './comment-submission-form';

it(`Should CommentSubmissionForm render correctly`, () => {
  const tree = renderer.create((
    <CommentSubmissionForm
      isDisabled={false}
      values={{
        rating: `5`,
        review: `lorem ipsum`
      }}
      onChange={jest.fn()}
      onSubmit={jest.fn()}
    />
  )).toJSON();

  expect(tree).toMatchSnapshot();
});
