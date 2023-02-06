import React from 'react';
import Buttons from './Buttons';

export default {
  component: Buttons,
  title: 'Buttons',
};

const Template = args => <Buttons {...args} />;


export const Default = Template.bind({});
Default.args = {
    type: 'default',
    label: '預設狀態',
};

export const Selected = Template.bind({});
Selected.args = {
    type: 'selected',
    label: '選取狀態',
};