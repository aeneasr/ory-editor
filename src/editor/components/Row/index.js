// @flow
import React, { PropTypes, Component } from 'react'
import droppable from './Droppable'
import { connect } from 'react-redux'
import { shouldPureComponentUpdate } from 'src/editor/helper/shouldComponentUpdate'
import { isLayoutMode, isResizeMode, isInsertMode } from 'src/editor/selector/display'
import { editableConfig, purifiedNode, node } from 'src/editor/selector/editable'
import { createStructuredSelector } from 'reselect'
import Inner from './inner'
import dimensions from 'react-dimensions'
import cssModules from 'react-css-modules'
import type { ComponentizedRow } from 'types/editable'

import * as commonStyles from 'src/editor/styles'
import localStyles from './index.scoped.css'

class Row extends Component {
  constructor(props: ComponentizedRow) {
    super(props)
    const { config: { whitelist } } = props
    this.Droppable = droppable(whitelist)
  }

  shouldComponentUpdate = shouldPureComponentUpdate
  Droppable: Object

  render() {
    const { isLayoutMode, isResizeMode, isInsertMode }: ComponentizedRow = this.props
    const Droppable = this.Droppable
    const props = { ...this.props }

    if (isLayoutMode || isResizeMode || isInsertMode) {
      props.styles = {
        ...props.styles,
        ...commonStyles.flexbox,
        ...localStyles // override defaults
      }
    }

    if (isLayoutMode || isInsertMode) {
      return (
        <Droppable {...props}>
          <Inner {...props} />
        </Droppable>
      )
    }

    return <Inner {...props} />
  }
}

Row.propTypes = {
  isLayoutMode: PropTypes.bool.isRequired,
  isResizeMode: PropTypes.bool.isRequired,
  isInsertMode: PropTypes.bool.isRequired,
  config: PropTypes.object.isRequired,
  node: PropTypes.object.isRequired
}

const mapStateToProps = createStructuredSelector({
  isLayoutMode,
  config: editableConfig,
  isResizeMode,
  isInsertMode,
  node: purifiedNode,
  rawNode: (state: any, props: any) => () => node(state, props)
})

export default dimensions()(connect(mapStateToProps)(cssModules(Row, {
  ...commonStyles.floating,
  ...commonStyles.common,
  ...localStyles
}, { allowMultiple: true })))
