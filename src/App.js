// in src/App.js
import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import Dashboard from './Dashboard';

import { Admin, Resource,ListGuesser,List,Datagrid,TextField,NumberField,DateField} from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
const theme = createMuiTheme({
  palette: {
    type: 'dark', // Switching the dark mode on is a single property value change.
  },
});
const dataProvider = jsonServerProvider('http://192.168.2.2:4000/api/pools/indexchain');
export const BlockList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          {/* <TextField source="id" /> */}
          <NumberField source="blockHeight" />
          <NumberField source="networkDifficulty" />
          {/* <TextField source="infoLink" /> */}
          <TextField source="hash" />
          {/* <TextField source="miner" /> */}
          <DateField source="created" showTime />
      </Datagrid>
  </List>
);
export const MinerList = props => (
  <List {...props}>
      <Datagrid rowClick="edit">
          {/* <TextField source="id" /> */}
          <TextField source="miner" />
          <NumberField source="hashrate" />
          <NumberField source="sharesPerSecond" />
      </Datagrid>
  </List>
);
const App = () => (
  <Admin dashboard={Dashboard} theme={theme} dataProvider={dataProvider}>
    <Resource name="miners" list={MinerList} />
    <Resource name="blocks" list={BlockList}/>
    <Resource name="payments" list={ListGuesser} />

  </Admin>
);

export default App;