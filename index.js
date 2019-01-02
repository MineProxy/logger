const { inspect } = require('util')

module.exports = {
  name: 'logger',
  defaultConfig: {
    dump: [],
    dump_all: false,
    dump_blacklist: []
  },
  init: proxy => {
    const { config: { logger: config } } = proxy
    console.log(`Dump: ${config.dump_all ? `all except ${config.dump_blacklist.join(', ')}` : config.dump.join(', ')}`)
    proxy.register('serverPacket', (meta, data) => dump(meta, data, true))
    proxy.register('clientPacket', (meta, data) => dump(meta, data, false))

    function dump (meta, data, isIncoming) {
      if (shouldDump(meta.name)) {
        const prefix = `C${isIncoming ? '<-' : '->'}S: ${meta.name}: `
        const packet = inspect(data, { depth: Infinity })
        console.log(packet.split('\n').map(line => prefix + line).join('\n'))
      }
      return true
    }

    function shouldDump (name) {
      if (config.dump_all && (!Array.isArray(config.dump_blacklist) || !config.dump_blacklist.includes(name))) return true
      if (Array.isArray(config.dump) && config.dump.includes(name)) return true
      return false
    }
  }
}
