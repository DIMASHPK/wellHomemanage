import React, { memo } from 'react';
import CommonDialog from 'components/Dialog';
import {
  useForm,
  SubmitHandler,
  useFieldArray,
  FormProvider,
} from 'react-hook-form';
import Button from '@material-ui/core/Button';
import { TAB_NAMES } from 'constants/tabs';
import { DialogType, FormInput } from './types';
import { INITIAL_VALUES_MAPPING, VALUES_ARRAY_NAME } from './constants';
import FlatForm from './FlatForm';
import HouseForm from './HouseForm';
import ExclusiveForm from './ExclusiveForm';
import { useStyles } from './styles';
import AddButton from './AddButton';

const Dialog: React.FC<DialogType> = memo(props => {
  const { open, title, onClose, type } = props;

  const {
    formItemsContainer,
    form,
    actionContainer,
    formItemWrapperMain,
    formAction,
  } = useStyles();

  const formDataFromHook = useForm<FormInput>({
    defaultValues: {
      [VALUES_ARRAY_NAME]: [{ ...INITIAL_VALUES_MAPPING[type], type }],
    },
  });
  const { handleSubmit, control } = formDataFromHook;

  const onSubmit: SubmitHandler<FormInput> = data => console.log(data);
  const { fields, append, remove } = useFieldArray({
    name: VALUES_ARRAY_NAME,
    control,
  });

  const componentsMappings = {
    [TAB_NAMES.FLATS]: FlatForm,
    [TAB_NAMES.HOUSES]: HouseForm,
    [TAB_NAMES.EXCLUSIVES]: ExclusiveForm,
  };

  return (
    <FormProvider {...formDataFromHook}>
      <CommonDialog open={open} title={title} onClose={onClose}>
        <form onSubmit={handleSubmit(onSubmit)} className={form}>
          <div className={formItemsContainer}>
            {fields.map((field, i) => {
              const { type } = field;

              const Component = componentsMappings[type];

              return (
                <div className={formItemWrapperMain}>
                  <Component
                    control={control}
                    name={`${VALUES_ARRAY_NAME}.${i}`}
                    remove={remove}
                    index={i}
                  />
                </div>
              );
            })}
          </div>
          <div className={actionContainer}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={formAction}
            >
              Сохранить
            </Button>
            <AddButton className={formAction} append={append} />
          </div>
        </form>
      </CommonDialog>
    </FormProvider>
  );
});

Dialog.displayName = 'Dialog';

export default Dialog;
