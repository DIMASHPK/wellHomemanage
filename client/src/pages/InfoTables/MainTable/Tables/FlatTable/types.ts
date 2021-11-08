import { TAB_NAMES } from 'constants/tabs';
import { GetOptionalType } from 'constants/types';
import { HeadColumnType } from 'pages/InfoTables/common/Table/types';
import type { HideColumnsLogicType } from '../types';
import { useStyles } from './styles';

export type FlatTablePropsType = HideColumnsLogicType & {
  activeTab: GetOptionalType<typeof TAB_NAMES>;
};

export type GetTableColumnsType = (data: {
  classes: ReturnType<typeof useStyles>;
}) => Omit<HeadColumnType, 'onClick'>[];
