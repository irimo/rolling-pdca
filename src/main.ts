import Vue from 'vue';
import InputForm from './inputform';
import PdcaComponent from './pdca';

new Vue({
  el        : '#app',
  template  :
      `<div class="app">
        <h1>PDCAまわしてこー！</h1>
        <div>localstorace に PDCA を保存していきますよー！いつかテキスト書き出しとかできたらいいね（やるのか？）</div>
        <inputform></inputform>
        <div style="position:fixed; right: 100px;top:100px;"><pdca></pdca></div>
      </div>`,

  components: {
    'inputform': InputForm,
    'pdca': PdcaComponent
  }
});
