import React, { memo } from 'react';
import { Controller, ControllerProps } from 'react-hook-form';
import { ComponentPropsType, WithControllerType } from './types';

const WithController = <
  FV extends { [Property in keyof FV]: FV[Property] },
  FP extends ComponentPropsType
>(
  Component: React.FC<FP>
) => {
  const WithControllerComponent: React.FC<WithControllerType<FV, FP>> = memo(
    props => {
      const { name, control, rules, ...rest } = props;

      const renderInput: ControllerProps<FV>['render'] = ({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <Component
          {...(rest as FP)}
          onChange={onChange}
          value={value}
          error={error}
        />
      );

      return (
        <Controller
          render={renderInput}
          name={name}
          control={control}
          rules={rules}
        />
      );
    }
  );

  WithControllerComponent.displayName = 'WithControllerComponent';

  return WithControllerComponent;
};

WithController.displayName = 'WithController';

export default WithController;
