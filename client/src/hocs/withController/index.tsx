import React, { memo } from 'react';
import { Controller, ControllerProps } from 'react-hook-form';
import { ComponentPropsType, WithControllerType } from './types';

const WithController = <F extends { [Property in keyof F]: F[Property] }>(
  Component: React.FC<ComponentPropsType>
): React.FC<Omit<WithControllerType<F>, 'render'>> => {
  const WithControllerComponent: React.FC<
    Omit<WithControllerType<F>, 'render'>
  > = memo(props => {
    const { name, control, rules, ...rest } = props;

    const renderInput: ControllerProps<F>['render'] = ({
      field: { onChange, value },
      fieldState: { error },
    }) => (
      <Component
        {...(rest as any)}
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
  });

  WithControllerComponent.displayName = 'WithControllerComponent';

  return WithControllerComponent;
};

WithController.displayName = 'WithController';

export default WithController;
