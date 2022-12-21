import * as React from 'react';
import { AlertService } from '@/index';
import { Button, Textarea, Text } from '@innovaccer/design-system';

const newAlert = new AlertService();
const addT = (conf: string) => {
  newAlert.add(JSON.parse(conf));
};

// arbitrary js object:
const myJsObj = {
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

const confSample = JSON.stringify(myJsObj, undefined, 4);
export const AutoDismiss = () => {
  const [conf, setConf] = React.useState(confSample);
  return (
    <>
      <Text>If autoDismiss is enabled toast will automatically disappear after</Text>
      <Text weight="medium"> 5 secs</Text>
      <Text> and if dismissIn is also given toast will automatically disappear after given time.</Text>
      <Text> dismissIn should be in Milliseconds</Text>
      <div className="Row mt-4">
        <div className="d-flex flex-column w-50">
          <label>Enter sample toast config :</label>
          <br />
          <Textarea
            id="toast_config_input_example"
            value={conf}
            onChange={event => setConf(event.target.value)}
            rows={15}
            cols={50}
          />

          <Text>{"AlertService.add({ title: 'test', appearance: 'info', message: 'test message' })"}</Text>

          <br />
        </div>
        <div className="Row m-auto justify-content-center w-50">
          <Button onClick={() => addT(conf)}>Add toast</Button>
        </div>
      </div>
    </>
  );
};

export default {
  title: 'Services/AlertService',
  component: AutoDismiss
};