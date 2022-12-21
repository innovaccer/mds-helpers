import * as React from 'react';
import { AlertService } from '@/index';
import { Button } from '@innovaccer/design-system';

export const Simple = () => {
  const alertService = new AlertService();

  const clickHandler = () => {
    const toast = {
      title: 'test',
      appearance: 'info' as const,
      message: 'test message',
      actions: [
        {
          label: 'button label',
          onClick: () => alert('example')
        }
      ]
    };
    alertService.add(toast);
  };

  return (
    <>
      <Button onClick={clickHandler}>Add toast</Button>
    </>
  );
};

export default {
  title: 'Services/AlertService',
  component: Simple
};
