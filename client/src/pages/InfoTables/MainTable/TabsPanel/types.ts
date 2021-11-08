import { TabsProps } from '@material-ui/core';
import { onButtonClickArgs } from 'components/CreatingPopover/types';
import { tabItemType } from 'components/Tabs/types';

export interface TabsPanelTypes {
  onChange: TabsProps['onChange'];
  selectedTab: tabItemType;
  onDialogData: ({ title, type, edit }: onButtonClickArgs) => void;
}
