/* eslint-env mocha */
import unexpected from 'unexpected'
import ContentService, { generateMissingIds } from './index'
import { content } from 'src/editor/service/content/adapter/debug'

const expect = unexpected.clone()
const contentService = new ContentService()

describe('hydrate', () => {
  it('should set missing ids recursively', () => {
    const hydrated = generateMissingIds({
      cells: [
        {
          rows: [
            {},
            {
              cells: [
                {},
                {}
              ]
            }
          ]
        },
        {}
      ]
    })

    expect(hydrated.id, 'to be defined')
    expect(hydrated.cells[0].id, 'to be defined')
    expect(hydrated.cells[1].id, 'to be defined')

    expect(hydrated.cells[0].rows[0].id, 'to be defined')
    expect(hydrated.cells[0].rows[1].id, 'to be defined')
    expect(hydrated.cells[0].rows[1].cells[0].id, 'to be defined')
    expect(hydrated.cells[0].rows[1].cells[1].id, 'to be defined')
  })
})

describe('ContentService', () => {
  xit('fetch should work', (done) => {
    contentService.fetch({ dataset: { debugEditable: 2 } }).then((c) => {
      expect(c.id, 'to equal', content[2].id)
      done()
    }).catch(() => {
      expect(true, 'to be falsy')
      done()
    })
  })

  it('serialize and unserialize should work', () => {
    const cleanup = ({ content, layout, rows = [], cells = [], ...other }) => {
      if (layout) {
        other.layout = { plugin: { name: layout.plugin.name } }
      }

      if (content) {
        other.content = { plugin: { name: content.plugin.name } }
      }

      if (rows.length) {
        other.rows = rows.map(cleanup)
      }

      if (cells.length) {
        other.cells = cells.map(cleanup)
      }

      return { ...other }
    }

    const c = generateMissingIds({
      id: '1',
      cells: [{
        id: '2',
        rows: [{
          id: '3',
          cells: [{
            id: '4',
            content: { plugin: { name: 'ory/content/missing' } }
          }, {
            id: '5',
            content: { plugin: { name: 'ory/content/missing' } }
          }]
        }]
      }]
    })
    const unserialized = contentService.unserialize(c)
    const serialized = cleanup(contentService.serialize(unserialized))
    expect(serialized, 'to equal', c)
  })
})
