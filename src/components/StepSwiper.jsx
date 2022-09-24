import React from 'react';
import { Steps } from 'antd';
const { Step } = Steps;

const StepSwiper = ({ step }) => {
  return (
    <Steps current={step}>
      <Step />
      <Step />
      <Step />
    </Steps>
  );
};

export default StepSwiper;
