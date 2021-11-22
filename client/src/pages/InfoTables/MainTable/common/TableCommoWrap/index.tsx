import React, { memo } from 'react';
import Table from 'pages/InfoTables/common/Table';
import { HeadColumnType } from 'pages/InfoTables/common/Table/types';
import clsx from 'clsx';
import { useStyles } from './styles';
import HeadCheckbox from './HeadCheckbox';
import type { TableCommonWrapType } from './types';
import { usePopover } from './hooks/usePopover';
import OptionsDropDown from './OptionsDropDown';

const TableCommonWrap: React.FC<TableCommonWrapType> = memo(props => {
  const {
    tableColumns: tableColumnsProps,
    children,
    data,
    selectedCells,
    selectedAll,
    handleAllCells,
    handleSelectedAll,
    onHideColumn,
    hiddenColumns,
    pathForHiddenColumnsState,
    stickyHeader = true,
    ...rest
  } = props;

  const { id, handleClose, anchorEl, handleClick, open } = usePopover();

  const { headCell, allCheckbox } = useStyles();

  const tableColumns: HeadColumnType[] = [
    {
      title: (
        <HeadCheckbox
          data={data}
          selectedCells={selectedCells}
          selectedAll={selectedAll}
          color="primary"
          handleAllCells={handleAllCells}
          handleSelectedAll={handleSelectedAll}
        />
      ),
      className: allCheckbox,
      id: 0,
      canHide: false,
    },
    ...tableColumnsProps,
  ].map((item, i) => ({
    ...item,
    className: clsx(headCell, item?.className),
    isSort: Boolean(i),
    onClick: handleClick,
    canHide: item?.canHide ?? true,
  }));

  const tableColumnsCanHide = tableColumns.filter(
    ({ value }) =>
      !hiddenColumns?.[pathForHiddenColumnsState]?.[value as string]
  );

  return (
    <>
      <Table
        headColumns={tableColumnsCanHide}
        stickyHeader={stickyHeader}
        {...rest}
      >
        {props => children?.(props)}
      </Table>
      <OptionsDropDown
        id={id}
        headColumns={tableColumns}
        anchorEl={anchorEl}
        onClose={handleClose}
        open={open}
        onHideColumn={onHideColumn}
        hiddenColumns={hiddenColumns}
        pathForHiddenColumnsState={pathForHiddenColumnsState}
      />
    </>
  );
});

TableCommonWrap.displayName = 'TableCommonWrap';

export default TableCommonWrap;
