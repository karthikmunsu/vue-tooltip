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

  // Add global method or property
  Vue.myGlobalMethod = function () {
   // something logic ...
  }

  // Add a global asset
  Vue.directive('tooltip', {
    bind (el, binding, vnode, oldVnode) {
     // something logic ...
     console.log('binded', el);
    
     let parentEle = document.createElement('div');
     parentEle.id = "tooltip";
     parentEle.classList.add('tl');
     parentEle.classList.add('t-btm');
     let childEle = document.createElement('div');
     childEle.innerText = binding.value;
     parentEle.appendChild(childEle);

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
                                .tl:before {
                                  left: 13px;
                                }
                                .t-btm:before {
                                  bottom: -5px;
                                  transform: rotate(-135deg);
                                }
                              </style>`;
     
      //mouse enter event
      el.addEventListener('mouseenter', (event) => {
        console.log('hovering');
          let rect = el.getClientRects();
          console.log(rect['0']);
          parentEle.style.left = rect['0'].left + 'px';
          parentEle.style.top = rect['0'].top - 40 + 'px';

          document.getElementById('app').appendChild(parentEle);
      });

      //mouse leave event
      el.addEventListener('mouseleave', (event) => {
        console.log('leaving');
        //document.getElementById('tooltip').remove();
      });
    },
    unbind(el, binding, vnode, oldVnode) {
      el.removeEventListener('mouseenter', () => {});
      el.removeEventListener('mouseleave', () => {});
    }
  })

  // Inject some component options
  Vue.mixin({
    created: function () {
     // something logic ...
    }
  })

  // Add an instance method
  Vue.prototype.$myMethod = function (options) {
   // something logic ...
  }

}

/**
 * Auto install
 */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(vueTooltip)
}

export default vueTooltip
