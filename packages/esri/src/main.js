import MappKitBus from './buses'

const createInstaller = () => (Vue) => {
  var bus = MappKitBus

  Object.defineProperty(Vue.prototype, '$mappKitBus', { //for "this.$bus"
    get() { return bus },
    set(evt) { //alt way to send an event (this.$bus=['event_name',arg1,arg2])
      if (typeof evt === 'string') evt = [evt]
      bus.$emit.apply(bus, evt)
    }
  })
}

const MappKitEsri = { install: createInstaller() }

export const Bus = MappKitBus
export default MappKitEsri
