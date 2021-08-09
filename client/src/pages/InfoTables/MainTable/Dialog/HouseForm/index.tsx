import React, { memo, useMemo } from 'react';
import { FlatFormTypes } from './types';
import { INPUT_FIELDS } from './constants';
import CommonForm from '../common/CommonForm';

const FlatForm: React.FC<FlatFormTypes> = memo(props => {
  const formInputs = useMemo(() => INPUT_FIELDS, []);

  return <CommonForm {...props} formInputs={formInputs} title="Дом" />;
});

FlatForm.displayName = 'FlatForm';

export default FlatForm;
