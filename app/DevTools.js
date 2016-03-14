/* @flow */

import React from 'react';
import { createDevTools  } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import ChartMonitor from 'redux-devtools-chart-monitor';

export default createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h'
                changePositionKey='ctrl-q'
                defaultIsVisible={false}>
    <ChartMonitor />
  </DockMonitor>
);

