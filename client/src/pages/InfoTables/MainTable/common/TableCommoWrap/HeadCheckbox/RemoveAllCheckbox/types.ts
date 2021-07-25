import type { TableCommonWrapType } from 'pages/InfoTables/MainTable/common/TableCommoWrap/types';

export type RemoveAllCheckboxType = Pick<
  TableCommonWrapType,
  'handleAllCells' | 'handleSelectedAll'
>;
