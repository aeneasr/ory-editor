// @flow
import { editable } from 'src/editor/reducer/editable'
import { UPDATE_EDITABLE } from 'src/editor/actions/editables'
import type { Editable } from 'types/editable'

export const editables = (state : Editable[] = [], action: {
  type: string,
  id: string,
  editable: Editable
}): Editable[] => {
  switch (action.type) {
    case UPDATE_EDITABLE:
      return [...state.filter(({ id }: Editable): boolean => id !== action.id), action.editable].map((e: Editable): Editable => editable(e, action))
    default:
      return state.map((e: Editable) => editable(e, action))
  }
}
