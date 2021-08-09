import { registerComponents } from './utils'
import * as components from './components'
import MappKitBus from './buses'

// TODO: test options
const createInstaller = c => (Vue, options) => {
  var bus = MappKitBus

  Object.defineProperty(Vue.prototype, '$mappKitBus', { //for "this.$bus"
    get() { return bus },
    set(evt) { //alt way to send an event (this.$bus=['event_name',arg1,arg2])
      if (typeof evt === 'string') evt = [evt]
      bus.$emit.apply(bus, evt)
    }
  })

  // do something with options
  registerComponents(Vue, c)
}

// https://vuejs.org/v2/guide/plugins.html
// Vue plugins, at minimum, need to return an object with an install function
// createInstaller is a double arrow function;
//returns another function, creates a closure over imported components
const MappKitLeaflet = { install: createInstaller(components) }

export const Bus = MappKitBus
export default MappKitLeaflet
