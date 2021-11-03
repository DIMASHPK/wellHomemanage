import { tabItemType } from 'components/TabsPanel/types';
import { TAB_NAMES } from 'constants/tabs';
import HomeIcon from '@material-ui/icons/Home';
import ApartmentIcon from '@material-ui/icons/Apartment';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

export const tabs: tabItemType[] = [
  {
    label: 'Квартиры',
    value: 0,
    name: TAB_NAMES.FLATS,
    icon: <ApartmentIcon />,
  },
  {
    label: 'Дома',
    value: 1,
    name: TAB_NAMES.HOUSES,
    icon: <HomeIcon />,
  },
  {
    label: 'Эксклюзив',
    value: 2,
    name: TAB_NAMES.EXCLUSIVES,
    icon: <HomeWorkIcon />,
  },
];
