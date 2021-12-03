import * as React from 'react';
import ReactDOM from 'react-dom';
import { ToastProps } from '@innovaccer/design-system';
import { pubSub } from '../../utils/alertServiceHelper';
import AlertContainer from './alertContainer';

const defaultConf = {
  autoHiderBar: {
    style: {
      height: '3px',
      borderRadius: '5px',
      backgroundColor: 'rgb(0,0,0,35%)'
    }
  },
  position: 'left',
  transitionDelay: 240,
  appearance: 'alert',
  title: 'Something went wrong.'
};
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
interface IRawToast extends IAlert {
  dismissIn?: number;
}

export class AlertService {
  elem!: HTMLElement;
  pubSubService: PubSubServiceProps;
  config: AlertServiceConfig;
  constructor(config = {}) {
    // create toast container
    this.createDivContainer();
    this.pubSubService = pubSub();
    this.config = { ...defaultConf, ...config };
    this.renderAlert(this.config);
  }

  createDivContainer = () => {
    this.elem = document.createElement('div');
    this.elem.setAttribute('id', 'alertService-container');
    this.elem.style.position = 'relative';
    this.elem.style.zIndex = '2147483647';
  };

  renderAlert = (config: AlertServiceConfig) => {
    const fullConf = { ...this.config, ...config };
    this.removeAlertService();
    document.body.appendChild(this.elem);
    ReactDOM.render(<AlertContainer pubSubService={this.pubSubService} defaultConfig={fullConf} />, this.elem);
  };

  removeAlertService = () => {
    const removed = ReactDOM.unmountComponentAtNode(this.elem);
    return removed;
  };

  remove = (toastId: string) => this.pubSubService.publish('remove-toast', toastId);

  add = (alert: IAlert) => {
    const toast: IRawToast = alert;

    toast.dismissIn = undefined;
    if (alert.autoDismiss) {
      toast.dismissIn = 8000;
    }
    const toastId = this.pubSubService.publish('add-toast', toast);
    return toastId;
  };
}

export default AlertService;
