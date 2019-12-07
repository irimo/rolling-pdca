/*
thank you
- https://sansaisoba.qrunch.io/entries/NrmnZGUHE3xZhO3a
- https://programmer-beginner.com/scroll-spy
- https://mae.chab.in/archives/60167
*/

import Vue from 'vue';
import Component from 'vue-class-component';
import window from './window';  

@Component({
  template: `
  <div class="pdca-wrap" v-bind:style="{transform: styleObject}">PDCA<br> </div>
`,
})

export default class PdcaComponent extends Vue {
  scrollTop: number = 0;
  styleObject: String = "rotate(0deg)"
  mounted(): void {
    window.addEventListener('scroll', this.scrollSpy);
  }
  destroyed(): void {
    window.removeEventListener('scroll', this.scrollSpy);
  }
  scrollSpy() {
      this.scrollTop =
          document.documentElement.scrollTop || // IE、Firefox、Opera
          document.body.scrollTop;              // Chrome、Safari
      this.styleObject = "rotate(" + this.scrollTop + "deg)";
    }
  }