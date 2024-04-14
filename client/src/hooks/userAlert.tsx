import { useRecoilState } from 'recoil';
import { alertState } from '../store/alert';

const useAlert = () => {
  const [alert, setAlert] = useRecoilState(alertState);

  const showAlert = (type: 'warning' | 'success', label: string) => {
    setAlert({
      isActive: true,
      type,
      label,
    });
  };

  const hideAlert = () => {
    setAlert({
      isActive: false,
      type: 'warning',
      label: '',
    });
  };

  return { alert, showAlert, hideAlert };
};

export default useAlert;
