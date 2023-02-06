import React from 'react';
import Direction from './Direction';

export default {
  component: Direction,
  title: 'Direction',
};

const Template = args => <Direction {...args} />;

export const Overview = Template.bind({});
Overview.args = {
    type: 'default',
    label: '預設狀態',
};