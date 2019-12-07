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
  <span>Plan: </span><input type="text" id="form-plan" v-model:value="t_plan" placeholder="計画を書こう" /><br />
  <span>Plan: </span><input type="text" id="form-do" v-model:value="t_do" placeholder="やることに落としこもう" /><br />
  <span>Plan: </span><input type="text" id="form-check" v-model:value="t_check" placeholder="やったこと確認しよう" /><br />
  <span>Plan: </span><input type="text" id="form-action" v-model:value="t_action" placeholder="次になにする" /><br />
  </form>
  </div>
`,
})

export default class InputForm extends Vue {
        t_plan: string =  "";
        t_do: string =  "";
        t_check: string =  "";
        t_action: string =  "";
constructor() {
        super();
        var plan: string = localStorage.getItem('plan1');
        this.t_plan = plan ? plan : "";
        var val_do: string = localStorage.getItem('do1');
        this.t_do = val_do ? val_do : "";
        var check: string = localStorage.getItem('check1');
        this.t_check = check ? check : "";
        var action: string = localStorage.getItem('action1');
        this.t_action = action ? action : "";
    }
  mounted(): void {
    this.$el.querySelector("#form-plan").addEventListener('keyup', this.blurSpy);
    this.$el.querySelector("#form-do").addEventListener('keyup', this.blurSpy);
    this.$el.querySelector("#form-check").addEventListener('keyup', this.blurSpy);
    this.$el.querySelector("#form-action").addEventListener('keyup', this.blurSpy);
  }
  destroyed(): void {
  }

      blurSpy() {
        localStorage.setItem('plan1', this.t_plan);
        localStorage.setItem('do1', this.t_do);
        localStorage.setItem('check1', this.t_check);
        localStorage.setItem('action1', this.t_action);
    }
  }