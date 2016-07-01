/* eslint-env mocha */
import unexpected from 'unexpected'
import PluginService, { defaultContentPlugins, defaultLayoutPlugins } from './index'

const expect = unexpected.clone()

const plugins = new PluginService()

describe('PluginService', () => {
  defaultContentPlugins.forEach((p) => {
    it(`should find plugin ${p.name} ${p.version}`, () => {
      expect(plugins.findContentPlugin(p.name, p.version), 'to be', p)
    })
  })

  defaultLayoutPlugins.forEach((p) => {
    it(`should find plugin ${p.name} ${p.version}`, () => {
      expect(plugins.findLayoutPlugin(p.name, p.version), 'to be', p)
    })
  })
})
