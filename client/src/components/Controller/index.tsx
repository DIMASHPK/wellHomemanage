import React, { memo } from 'react';
import { Controller as ControlCommon } from 'react-hook-form';
import { ControllerType } from './types';

const Controller: React.FC<ControllerType> = memo(props => {
  const { name, control, rules, render } = props;

  return (
    <ControlCommon
      name={name}
      control={control}
      rules={rules}
      render={render}
    />
  );
});

Controller.displayName = 'Controller';

export default Controller;
