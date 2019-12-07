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
  // props   : ['t_scrolltop'],
})
/*   <style type="text/css">
  #absdiv {
    display: inline-block;
    font-size: 3em;
    position:fixed;
    bottom:20px;
    right:20px;
  }
  </style>
 */
export default class PdcaComponent extends Vue {
  scrollTop: number = 0;
  styleObject: String = "rotate(100deg)"
  mounted(): void {
    window.addEventListener('scroll', this.scrollSpy);
  }
destroyed(): void {
  window.removeEventListener('scroll', this.scrollSpy);
}

  // methods: {
  // window.onscroll = function()
  scrollSpy() {
    // window.onscroll = function () {
      this.scrollTop =
          document.documentElement.scrollTop || // IE、Firefox、Opera
          document.body.scrollTop;              // Chrome、Safari
    // };
      // this.scrollTop =
      //     document.documentElement.scrollTop || // IE、Firefox、Opera
      //     document.body.scrollTop;              // Chrome、Safari
      // var absdiv = document.getElementById("absdiv");
      // absdiv.style = "transform: rotate("+scrollTop+"deg)";
      this.styleObject = "rotate(" + this.scrollTop + "deg)";
      // el.mystyle = "";

    }
  // }
      // 2. それぞれのnavItemの画面左端からの距離を取得し、positionsに格納しておく
  // calculatePosition() {
        // const position = el.getBoundingClientRect().left;
        // const position = el.getBoundingClientRect().left;
        // this.positions.push(position);
      // },
    // },
  
    // watch: {
      // 4. currentIndexが更新されるたびに、navを移動させる（actionクラスが付与されているnavItemを左端に移動させる）
      // currentIndex(newIndex) {
      //   const scrollBar = this.$el.querySelector('#scroll-bar');
      //   scrollBar.scrollLeft = this.positions[newIndex];
      // },
    // },
  }