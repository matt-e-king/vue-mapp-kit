import { ref, watch } from 'vue'
import MappKitBus from '../bus'

export const defaultEvents = [
  'ready',
  'remove'
]

export const layerEvents = [
  ...defaultEvents,
  "edits",
  "layerview-create",
  "layerview-create-error",
  "layerview-destroy",
  "refresh"
]

export const viewEvents = [
  ...defaultEvents,
  "blur",
  "click",
  "double-click",
  "drag",
  "focus",
  "hold",
  "immediate-click",
  "immediate-double-click",
  "key-down",
  "key-up",
  "layerview-create",
  "layerview-create-error",
  "layerview-destroy",
  "mouse-wheel",
  "pointer-down",
  "pointer-enter",
  "pointer-leave",
  "pointer-move",
  "pointer-up",
  "resize"
]

export const sketchEvents = [
  ...defaultEvents,
  "create",
  "delete",
  "redo",
  "undo",
  "update"
]

export const ConstructionProps = {
  addTo: {
    type: Object
  },
  events: Array,
  enableBus: Boolean,
  order: Number,
  // properties from Esri Class signature
  properties: {
    type: Object,
    default: () => ({})
  }
}

export const useConstructor = (
  {
    afterBootHook,
    addToHook,
    removeFromHook,
    mergePropsHook,
    afterInitHook,
    name = ''
  },
  props = {},
  emit = () => {}
) => {
  let module
  let booted = ref(false)

  const getEsriObject = () => {
    return module
  }

  // @todo maybe constructor is not responsible for this?
  const addTo = (parent, order) => {
    if (
      parent &&
      parent.add &&
      typeof parent.add === 'function'
    ) {
      parent.add(module, order)
    } else {
      console.error(`[${name}] no parent "add" found`)
    }
  }
  const remove = removeFromHook || function () {}
  const afterBoot = () => {}
  const afterInit = () => {}
  const mergeProps = () => {}

  // METHODS
  const bootRoutine = () => {
    emit('ready', module)
    if (props.enableBus) {
      MappKitBus.$emit(`${name}${props.properties.id ? `-${props.properties.id}` : ''}-ready`, module)
    }

    booted.value = true
    afterBootHook ? afterBootHook(module) : afterBoot() // @todo used to be called afterLoadedHook
  }
  const setupEvents = () => {
    if (
      Array.isArray(props.events)
      && props.events.length
      && typeof module.on === 'function'
    ) {
      for (const key in props.events) {
        const eventType = props.events[key]
        
        module.on(eventType, (event) => {
          const payload = {
            event,
            source: module
          }

          emit(eventType, payload)

          if (props.enableBus) {
            MappKitBus.$emit(`${name}${props.properties.id ? `-${props.properties.id}` : ''}-${eventType}`, payload)
          }
        })
      }
    }
  }

  // @todo add parent here for addTo?
  const instantiate = (esriClass, parent) => {
    if (!esriClass) {
      // if module does not exist on $data
      // set non-reactive version of it
      throw new Error('Esri class does not exists')
    }

    // setTimeout defers execution to help with some underlying race condition??
    setTimeout(() => {
      const additionalProperties = mergePropsHook ? mergePropsHook(module) : mergeProps()
      module = new esriClass({ ...props.properties, ...additionalProperties })

      if (
        module.when &&
        !['WebMap'].includes(name)
      ) {
        module.when(() => {
          bootRoutine()
        }).catch((e) => {
          console.error(e)
        })
      } else {
        bootRoutine()
      }
  
      setupEvents()
      addToHook ? addToHook(module) : addTo(parent, props.order)
      afterInitHook ? afterInitHook(module) : afterInit()
    }, 0)
  }


  // WATCHERS
  watch(
    () => props.properties.visible,
    (val) => {
      if (module.hasOwnProperty('visible')) {
        module.visible = val
      }
    }
  )

  watch(
    () => props.properties.opacity,
    (val) => {
      if (module.hasOwnProperty('opacity')) {
        module.opacity = val
      }
    }
  )

  return {
    instantiate,
    getEsriObject,
    addTo,
    remove,
    booted
  }
}