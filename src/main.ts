import { createApp } from 'vue'
import App from './App.vue'
import { vReveal } from './directives/reveal'
import { vTilt } from './directives/tilt'
import { vMagnetic } from './directives/magnetic'
import './style.css'

createApp(App)
  .directive('reveal', vReveal)
  .directive('tilt', vTilt)
  .directive('magnetic', vMagnetic)
  .mount('#app')
