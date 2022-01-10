import { AlertComponentProps } from "./type";
interface AlertProps {
    onDismiss: (toastId: string, onClose?: () => void | undefined) => void;
    alert: AlertComponentProps;
    wrapId?: string;
    wrapClassName?: string;
    leftOrRight: string;
    indexNumber: number;
    zIndex: number;
}
declare const AlertComponent: (props: AlertProps) => JSX.Element;
export default AlertComponent;
