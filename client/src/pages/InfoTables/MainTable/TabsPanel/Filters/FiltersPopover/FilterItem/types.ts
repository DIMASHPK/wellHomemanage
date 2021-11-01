import { tabItemType } from 'components/TabsPanel/types';
import { FiltersPropsType } from 'pages/InfoTables/MainTable/TabsPanel/Filters/types';

export interface FilterItemPropsType
  extends Omit<
    FiltersPropsType,
    'onAddFilter' | 'reactHookFormData' | 'onReset'
  > {
  index: number;
}

export interface GetNameOptionsArgsType {
  selectedTabName: FilterItemPropsType['selectedTabName'];
  name: string;
  filters: FilterItemPropsType['filters'];
}

export interface UseInputArgsType {
  selectedTabName: tabItemType['name'];
  className: string;
  name: FiltersPropsType['filters'][number]['name'];
  index: number;
  control: FilterItemPropsType['control'];
}

export interface UseInputReturnType {
  renderInput: () => JSX.Element;
}
