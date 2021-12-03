import * as React from 'react';
import { CSSProperties } from 'react';
import { Toast } from '@innovaccer/design-system';
import { AlertComponentProps } from './type';

interface AlertProps {
  onDismiss: (toastId: string, onClose?: () => void | undefined) => void;
  alert: AlertComponentProps;
  wrapId?: string;
  wrapClassName?: string;
  leftOrRight: string;
  indexNumber: number;
  zIndex: number;
}
const AlertComponent = (props: AlertProps) => {
  const { alert, wrapId, wrapClassName, leftOrRight, onDismiss, indexNumber, zIndex } = props;
  const { appearance, toastId, onClose, dismissIn, toastClassName, autoHiderBar } = alert;
  const { style: autoHiderBarStyle, ...autoHiderBarProps } = autoHiderBar;
  const [width, setWidth] = React.useState(0);
  const toastStyle: CSSProperties = {
    position: 'fixed',
    zIndex: zIndex + 50,
    [leftOrRight]: '24px'
  };
  const [direction, setDirection] = React.useState('');
  const prevIndexNumber = React.useRef(indexNumber);
  const timer = React.useRef<any>(null);

  React.useEffect(() => {
    if (indexNumber > prevIndexNumber.current) {
      setDirection('down');
      handlePauseTimer();
    }
    if (indexNumber < prevIndexNumber.current && indexNumber === 0) {
      setDirection('up');
      handleStartTimer();
    }

    prevIndexNumber.current = indexNumber;
  }, [indexNumber]);

  const handlePauseTimer = () => {
    clearInterval(timer.current!);
  };

  const handleCloseToast = () => {
    handlePauseTimer();
    setDirection('left');
    onDismiss(toastId, onClose);
  };

  const handleStartTimer = () => {
    if (dismissIn) {
      const intId = setInterval(() => {
        setWidth(prev => {
          if (prev < 100) {
            return prev + 0.5;
          }
          clearInterval(intId);
          return prev;
        });
      }, dismissIn / 200);
      timer.current = intId;
    }
  };

  React.useEffect(() => {
    if (dismissIn) {
      handleStartTimer();
    }
    setDirection('active');
  }, []);

  React.useEffect(() => {
    if (width === 100 && indexNumber === 0) {
      handleCloseToast();
    }
  }, [width]);

  const className = `${wrapClassName} Toast--${appearance} alertService-${direction}`;
  return (
    <div
      id={wrapId}
      onMouseEnter={handlePauseTimer}
      onMouseLeave={handleStartTimer}
      className={className}
      style={toastStyle}
    >
      <Toast {...alert} onClose={handleCloseToast} data-test={wrapId} className={toastClassName} />
      {autoHiderBar && dismissIn && indexNumber === 0 && (
        <div
          {...autoHiderBarProps}
          style={{
            width: `${width}%`,
            ...autoHiderBarStyle
          }}
        />
      )}
    </div>
  );
};

export default AlertComponent;
