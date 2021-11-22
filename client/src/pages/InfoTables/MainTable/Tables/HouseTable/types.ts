import { GetOptionalType } from 'constants/types';
import { TAB_NAMES } from 'constants/tabs';
import { HeadColumnType } from 'pages/InfoTables/common/Table/types';
import type { HideColumnsLogicType } from '../types';
import { useStyles } from './styles';

export type HouseTablePropsType = HideColumnsLogicType & {
  activeTab: GetOptionalType<typeof TAB_NAMES>;
};

export type GetTableColumnsType = (data: {
  classes: ReturnType<typeof useStyles>;
}) => Omit<HeadColumnType, 'onClick'>[];
