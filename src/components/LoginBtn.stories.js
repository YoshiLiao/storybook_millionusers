import React from 'react';
import LoginBtn from './LoginBtn';

export default {
  component: LoginBtn,
  title: 'LoginBtn',
  argTypes: { 
    handleLogin:  {action: 'onLogin' } ,
    handleSignUp:  {action: 'onCreateAccount' } ,
  }
};

const Template = args => <LoginBtn {...args} />;

export const Default = Template.bind({});
Default.args = {
    type: 'default',
    label: '點擊按鈕',
};