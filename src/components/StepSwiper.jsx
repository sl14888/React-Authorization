import React from 'react';
import { Steps } from 'antd';
const { Step } = Steps;

const StepSwiper = () => {
  return (
    <Steps current={0}>
      <Step />
      <Step />
      <Step />
    </Steps>
  );
};

export default StepSwiper;
