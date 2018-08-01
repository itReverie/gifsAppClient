import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import SearchInput from '../src/components/searchInput';
import Star from '../src/components/star';

storiesOf('Components', module)
  .add('Search', () => (
    <SearchInput onClick={action('clicked')} />
  ))
  .add('Star', () => (
    <Star onClick={action('clicked')} />
  ));