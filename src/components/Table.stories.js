import React from 'react';
import Table from './Table';

export default {
  component: Table,
  title: 'Table',
};

const Template = args => <Table {...args} />;

export const Overview = Template.bind({});
Overview.args = {
    item: '服務項目名稱',
    count: 12345,
};