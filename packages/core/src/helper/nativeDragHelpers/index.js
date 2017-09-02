// @flow
import { NativeTypes } from 'react-dnd-html5-backend'

export const isNativeHTMLElementDrag = (monitor: Object): Boolean => {
  switch (monitor.getItemType()) {
    case NativeTypes.URL:
    case NativeTypes.FILE:
    case NativeTypes.TEXT:
      return true
    default:
      return false
  }
}

export const createNativeCellReplacement = () => {
  const id = 'ory-native-drag'
  return ({
    id, rawNode: () => ({ id }),
    node: { content: { plugin: { isInlineable: false } } }
  })
}
