import { ControllerProps, FieldError } from 'react-hook-form';

export interface ComponentPropsType {
  onChange?: (...args: any[]) => void;
  value?: unknown;
  error?: FieldError;
}

export interface DefaultFormValues {
  [key: string]: string;
}

export type WithControllerType<
  FV extends { [Property in keyof FV]: FV[Property] },
  FP extends ComponentPropsType
> = Pick<ControllerProps<FV>, 'name' | 'rules' | 'control'> & FP;
