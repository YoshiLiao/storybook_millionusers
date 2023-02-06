import React from 'react';

import Filter from './Filter';

export default {
  component: Filter,
  title: 'Filter',
};

const Template = args => <Filter {...args} />;

export const Default = Template.bind({});
Default.args = {
  period: ['2023/01','2023/02'],
  years: ['2023','2022']
};