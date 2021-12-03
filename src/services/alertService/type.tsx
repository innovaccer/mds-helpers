import { ToastProps } from '@innovaccer/design-system';

type autoHiderBarProp = { style: object };

export interface AlertComponentProps extends ToastProps {
  toastId: string;
  dismissIn?: number;
  toastClassName: string;
  autoHiderBar: autoHiderBarProp;
}
