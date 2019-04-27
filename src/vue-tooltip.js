/**
  * vue-tooltip
  * (c) 2019 karthik
  * @license MIT
  */

const vueTooltip = {}

/**
 * Plugin API
 */
vueTooltip.install = function (Vue, options) {
  Vue.directive('tooltip', {
    bind (el, binding, vnode, oldVnode) {
     let parentEle = document.createElement('div');
     parentEle.id = "tooltip";
     parentEle.innerText = binding.value;

     //styles
     let darktheme = document.querySelector("head");
      darktheme.innerHTML += `<style>
                                #tooltip {
                                  background-color: #404a55;
                                  min-width: 120px;
                                  height: 36px;
                                  position: absolute;
                                  color: #ffff;
                                  border-radius: 6px;
                                  line-height: 35px;
                                  animation: 0.4s fade ease-in-out;
                                }
                                #tooltip:before {
                                  content: '';
                                  position: absolute;
                                  height: 10px;
                                  width: 10px;
                                  border-radius: 1px;
                                  background-color: inherit;
                                  transform: rotate(45deg);
                                  left: 10px;
                                  bottom: -4px;
                              }
                              </style>`;
     
      //mouse enter event
      el.addEventListener('mouseenter', (event) => {
          let rect = el.getClientRects();
          parentEle.style.left = rect['0'].left + 'px';
          parentEle.style.top = rect['0'].top - 40 + 'px';

          document.getElementById('app').appendChild(parentEle);
      });

      //mouse leave event
      el.addEventListener('mouseleave', (event) => {
        document.getElementById('tooltip').remove();
      });
    },

    unbind(el, binding, vnode, oldVnode) {
      el.removeEventListener('mouseenter', () => {});
      el.removeEventListener('mouseleave', () => {});
    }
  });
}

/**
 * Auto install
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueTooltip)
}

export default vueTooltip
