import * as React from 'react';
import { AlertService } from '@/index';
import { Button } from '@innovaccer/design-system';

export const AutoDismiss = () => {
  const newAlert = new AlertService();

  const addToast = (config: any) => {
    newAlert.add(config);
  };

  const conf = {
    autoDismiss: true,
    title: 'test',
    appearance: 'info',
    message: 'test message',
    dismissIn: 8000,
    actions: [
      {
        label: 'button label',
        onClick: () => alert('example')
      }
    ]
  };

  return (
      <>
        <Button onClick={() => addToast(conf)}>Add toast</Button>
      </>
  );
};

export default {
  title: 'Services/AlertService',
  component: AutoDismiss,
  parameters: {
    docs: {
      description: {
        component:
          '* If **autoDismiss** is enabled toast will automatically disappear after **5 secs**\n* If **dismissIn** is also given toast will automatically disappear after given time.\n* **dismissIn** should be in Milliseconds.'
      }
    }
  }
};
