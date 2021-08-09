import React, { memo } from 'react';
import Controller from 'components/Controller';
import { WithControllerType, ComponentPropsType } from './types';

const WithController = (
  Component: React.FC<ComponentPropsType>
): React.FC<Omit<WithControllerType, 'render'>> => {
  const WithControllerComponent: React.FC<Omit<WithControllerType, 'render'>> =
    memo(props => {
      const { name, control, rules, ...rest } = props;

      const renderInput: WithControllerType['render'] = ({
        field: { onChange, value },
        fieldState: { error },
      }) => (
        <Component onChange={onChange} value={value} error={error} {...rest} />
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
