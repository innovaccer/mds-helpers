import { ToastProps } from '@innovaccer/design-system';
export interface AlertServiceConfig {
    dismissIn?: number;
    position: string;
    transitionDelay: number;
    appearance: string;
    title: string;
}
export interface PubSubServiceProps {
    publish: (eventName: string | number, data: any) => any;
    subscribe: (eventName: string | number, callback: any) => any;
}
interface IAlert extends ToastProps {
    autoDismiss?: boolean;
}
export declare class AlertService {
    elem: HTMLElement;
    pubSubService: PubSubServiceProps;
    config: AlertServiceConfig;
    constructor(config?: {});
    createDivContainer: () => void;
    renderAlert: (config: AlertServiceConfig) => void;
    removeAlertService: () => boolean;
    remove: (toastId: string) => any;
    add: (alert: IAlert) => any;
}
export default AlertService;
