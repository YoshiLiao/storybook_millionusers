import React from 'react';
import Levels from './Levels';

export default {
  component: Levels,
  title: 'Levels',
};

const Template = args => <Levels {...args} />;

export const Default = Template.bind({});
Default.args = {
    status:'default'
};

export const Disabled = Template.bind({});
Disabled.args = {
  status:'disabled'
};