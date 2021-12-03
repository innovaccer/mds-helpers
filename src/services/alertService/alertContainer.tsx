import * as React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import AlertComponent from './alertComponent';
import { AlertServiceConfig, PubSubServiceProps } from './alertService';
import { AlertComponentProps } from './type';

interface AlertContainerProps {
  pubSubService: PubSubServiceProps;
  defaultConfig: AlertServiceConfig;
}

export type doctype = Document;

const AlertContainer = (props: AlertContainerProps) => {
  const { pubSubService, defaultConfig } = props;
  const { transitionDelay, position } = defaultConfig;
  const [alerts, setAlerts] = React.useState<AlertComponentProps[]>([]);

  const addToast = (toast: AlertComponentProps) => {
    setAlerts(existing => [toast, ...existing]);
  };

  const removeToast = (toastId: string) => {
    const filteredAlerts: AlertComponentProps[] = alerts
      .slice()
      .filter((alert: AlertComponentProps) => alert.toastId !== toastId);
    setAlerts(filteredAlerts);
  };

  React.useEffect(() => {
    const addUnsub = pubSubService.subscribe('add-toast', addToast);
    const removeUnsub = pubSubService.subscribe('remove-toast', removeToast);
    return () => {
      addUnsub();
      removeUnsub();
    };
  }, []);

  const dismiss = (id: string, onClose?: () => void | undefined) => {
    removeToast(id);
    return onClose ? onClose() : null;
  };

  const getDismissIn = (alert: AlertComponentProps) => {
    let dismissIn;
    // as we have delay in animation
    // timer will start even before
    // toast appears on screen
    // to avoid this we are adding transitionDelay
    if (alert.dismissIn) {
      dismissIn = alert.dismissIn + transitionDelay;
    }

    return dismissIn;
  };

  return (
    <ReactCSSTransitionGroup
      transitionName="alertService"
      transitionEnterTimeout={transitionDelay}
      transitionLeaveTimeout={transitionDelay}
    >
      {alerts.length > 0
        ? alerts.map((alert, i, alertsStack) => {
            return (
              <AlertComponent
                zIndex={alertsStack.length - i}
                leftOrRight={position}
                wrapId={`alert-toast__${alert.toastId}`}
                alert={{
                  ...defaultConfig,
                  ...alert,
                  dismissIn: getDismissIn(alert)
                }}
                key={alert.toastId}
                indexNumber={i}
                wrapClassName="alertService"
                onDismiss={dismiss}
              />
            );
          })
        : null}
    </ReactCSSTransitionGroup>
  );
};

export default AlertContainer;
