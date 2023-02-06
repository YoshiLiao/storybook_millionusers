import React from 'react';

import Section from './Section';

export default {
  component: Section,
  title: 'Section',
};

const Template = args => <Section {...args} />;

export const Default = Template.bind({});
Default.args = {
  type1: 'default',
  type2: 'default',
};

export const Selected = Template.bind({});
Selected.args = {
  type1: 'selected',
  type2: 'default',
};