/**
 * 多分それぞれの行を別のコンポーネントにした方がスマートなんだろうけど
 * 時間切れでやんす
 */

import Vue from 'vue';
import Component from 'vue-class-component';
import window from './window';  

@Component({
  template: `
  <div class="inputform">
  <form id="myform">
  Plan: <input type="text" id="form-plan" v-model:value="t_plan" placeholder="計画を書こう"><br>
  {{t_plan}}<br>
  Do: <input type="text" id="form-do"><br>
  Check: <input type="text" id="form-check"><br>
  Action: <input type="text" id="form-action"><br>
  </form>
  </div>
`,
})

export default class InputForm extends Vue {
  t_plan: String = "";
    constructor() {
        super();
        const plan:string = localStorage.getItem('plan1');
        this.t_plan = plan;
    }
  mounted(): void {
    this.$el.querySelector("#form-plan").addEventListener('blur', this.blurSpy);
    this.$el.querySelector("#form-do").addEventListener('blur', this.blurSpy);
    this.$el.querySelector("#form-check").addEventListener('blur', this.blurSpy);
    this.$el.querySelector("#form-action").addEventListener('blur', this.blurSpy);
    window.addEventListener('onbeforeunload', this.blurSpy);
  }
  destroyed(): void {
    // window.removeEventListener('scroll', this.scrollSpy);
  }

  blurSpy() {
    const plan: string = this.t_plan as string;
      localStorage.setItem('plan1', plan);
    }
  }