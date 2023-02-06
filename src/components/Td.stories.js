import React from 'react';
import Td from './Td';

export default {
  component: Td,
  title: 'Td',
};

const Template = args => <Td {...args} />;

export const Overview = Template.bind({});
Overview.args = {
    status: 'default',
};