import { atom } from 'recoil';
import { Alert } from '../typings/alertTypes';

const alertState = atom<Alert>({
  key: 'alertState',
  default: {
    isActive: false,
    type: 'warning',
    label: '',
  },
});

export { alertState };
