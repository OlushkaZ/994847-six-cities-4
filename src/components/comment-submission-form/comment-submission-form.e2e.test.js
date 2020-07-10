import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import {CommentSubmissionForm} from './comment-submission-form';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should CommentSubmissionForm works`, () => {
  const onSubmit = jest.fn();
  const onChange = jest.fn();

  const form = mount(
      <CommentSubmissionForm
        values={{
          rating: `5`,
          review: `lorem ipsum`
        }}
        onSubmit={onSubmit}
        onChange={onChange}
      />
  );

  form
    .find(`input[name="rating"]`)
    .at(0)
    .simulate(`change`, {target: {value: `Hello`}});

  form
    .find(`textarea[name="review"]`)
    .at(0)
    .simulate(`change`, {target: {value: `123`}});

  form
    .find(`form`)
    .at(0)
    .simulate(`submit`, {
      preventDefault: () => {},
    });

  expect(onChange).toHaveBeenCalledTimes(2);
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
