import Vue from 'vue';
import MyComponent from './sub';
import PdcaComponent from './pdca';

new Vue({
  el        : '#app',
  template  :
      `<div class="app">
        <h1>Hello Vue.js!</h1>
        <my-component message="My Counter for TypeScript"></my-component>
        <div style="position:fixed; right: 100px;bottom:100px;"><pdca></pdca></div>
      </div>`,

  components: {
    'my-component': MyComponent,
    'pdca': PdcaComponent
  }
});
