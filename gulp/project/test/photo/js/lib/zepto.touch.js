!function(e){function t(e){return"tagName"in e?e:e.parentNode}function n(e,t,n,i){var o=Math.abs(e-t),a=Math.abs(n-i);return o>=a?e-t>0?"Left":"Right":n-i>0?"Up":"Down"}function i(){r=null,s.last&&(s.el.trigger("longTap"),s={})}function o(){r&&clearTimeout(r),r=null}function a(){u&&clearTimeout(u),c&&clearTimeout(c),l&&clearTimeout(l),r&&clearTimeout(r),u=c=l=r=null,s={}}var u,c,l,r,s={},p=750;e(document).ready(function(){var g,f;e(document.body).bind("touchstart",function(n){g=Date.now(),f=g-(s.last||g),s.el=e(t(n.touches[0].target)),u&&clearTimeout(u),s.x1=n.touches[0].pageX,s.y1=n.touches[0].pageY,f>0&&250>=f&&(s.isDoubleTap=!0),s.last=g,r=setTimeout(i,p)}).bind("touchmove",function(e){o(),s.x2=e.touches[0].pageX,s.y2=e.touches[0].pageY,Math.abs(s.x1-s.x2)>10&&e.preventDefault()}).bind("touchend",function(t){o(),s.x2&&Math.abs(s.x1-s.x2)>30||s.y2&&Math.abs(s.y1-s.y2)>30?l=setTimeout(function(){s.el.trigger("swipe"),s.el.trigger("swipe"+n(s.x1,s.x2,s.y1,s.y2)),s={}},0):"last"in s&&(c=setTimeout(function(){var t=e.Event("tap");t.cancelTouch=a,s.el.trigger(t),s.isDoubleTap?(s.el.trigger("doubleTap"),s={}):u=setTimeout(function(){u=null,s.el.trigger("singleTap"),s={}},250)},0))}).bind("touchcancel",a),e(window).bind("scroll",a)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(t){e.fn[t]=function(e){return this.bind(t,e)}})}(Zepto);