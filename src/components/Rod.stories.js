import React from 'react';
import Rod from './Rod';

export default {
  component: Rod,
  title: 'Rod',
};

const Template = args => <Rod {...args} />;

export const Default = Template.bind({});
Default.args = {
    status: 'default',
};

export const Disabled = Template.bind({});
Disabled.args = {
    status: 'disabled',
};