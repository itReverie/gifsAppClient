import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import SearchInput from '../src/components/searchInput';
import Star from '../src/components/star';

const stories = storiesOf('Components Knobs', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);


stories.add('Search', () => (
    <SearchInput onClick={action('clicked')} />
  ));

  stories.add('Star', () => (
    <Star onClick={action('clicked')} active={boolean('Disabled', false)}  />
  ));