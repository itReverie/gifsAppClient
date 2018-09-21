import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import SearchInput from '../src/components/searchInput';
import Star from '../src/components/star';
import Button from '../src/components/searchButton';
import Card from '../src/components/gifCard'
import { withInfo } from '@storybook/addon-info';

const stories = storiesOf('Components', module);

// Add the `withKnobs` decorator to add knobs support to your stories.
// You can also configure `withKnobs` as a global decorator.
stories.addDecorator(withKnobs);


stories.add('Search', withInfo('Input element to search information') ( ()=>
    <SearchInput onSearchTextChange={action('clicked')} />
  ));

  stories.add('Button', withInfo('Button to trigger an action') ( ()=>
  <Button onClick={action('clicked')}  text="Search"   />
));

  stories.add('Star', withInfo('Component to set a product as favorite') ( ()=>
    <Star onClick={action('clicked')} active={boolean('Disabled', false)}  />
  ));

  const gif={    id: "B0vFTrb0ZGDf2",
  isFavorite:true,
  preview :{
              url: "https://media1.giphy.com/media/B0vFTrb0ZGDf2/200w.gif?cid=4647a4e05b37e8f8747833465127ae26",
              width: "200",
              height: "105",
              size: "74046",
              mp4: "https://media1.giphy.com/media/B0vFTrb0ZGDf2/200w.mp4?cid=4647a4e05b37e8f8747833465127ae26",
              mp4_size: "28128",
              webp: "https://media1.giphy.com/media/B0vFTrb0ZGDf2/200w.webp?cid=4647a4e05b37e8f8747833465127ae26",
              webp_size: "146398"}
     
};
  stories.add('Card', withInfo('Component to display product information') ( ()=>
  <Card onClick={action('clicked')}  gif={gif}  />
));