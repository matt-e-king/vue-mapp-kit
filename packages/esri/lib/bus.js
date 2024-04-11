import mitt from 'mitt'

const emitter = mitt()
const MappKitBus = {
  $on: (...args) => emitter.on(...args),
  $once: (...args) => emitter.once(...args),
  $off: (...args) => emitter.off(...args),
  $emit: (...args) => emitter.emit(...args)
}

export const useMappKitBus = () => ({ mappKitBus: MappKitBus })
export default MappKitBus
