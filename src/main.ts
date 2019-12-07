import Vue from 'vue';
import MyComponent from './sub';
import PdcaComponent from './pdca';

new Vue({
  el        : '#app',
  template  :
      `<div class="app">
        <h1>Hello Vue.js!</h1>
        <my-component message="My Counter for TypeScript"></my-component>
        <pdca></pdca>
      </div>`,

  components: {
    'my-component': MyComponent,
    'pdca': PdcaComponent
  }
});
