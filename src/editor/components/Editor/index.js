// @flow
import React, { PropTypes, Component } from 'react'
import { Provider } from 'react-redux'
import { forEach } from 'ramda'
import Editable from 'src/editor/components/Editable'
import DragDropContext from 'src/editor/components/DragDropContext'
import HotKeyDecorator from 'src/editor/components/HotKey/Decorator'
import type { Store } from 'types/redux'

const Editor = ({ id, store }: {id: string, store: Store }) => (
  <Provider store={store}>
    <DragDropContext>
      <HotKeyDecorator>
        <Editable id={id} />
      </HotKeyDecorator>
    </DragDropContext>
  </Provider>
)

Editor.propTypes = {
  id: PropTypes.string.isRequired,
  store: PropTypes.object.isRequired
}

export default Editor
