// @flow
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Drawer from 'material-ui/Drawer'
import React from 'react'

const BottomToolbar = ({ open, children }: { open: boolean, children: Object }) => (
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <Drawer open={open} containerStyle={{
      top: 'inherit',
      bottom: 0,
      height: '100px',
      width: '100%',
      transform: `translate(0, ${open ? '0' : '100px'})`
    }}>
      {children}
    </Drawer>
  </MuiThemeProvider>
)

export default BottomToolbar
