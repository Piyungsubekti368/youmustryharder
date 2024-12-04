! function(i) {
  "anonymoustwentyfour";
  i.cssanonymousstwentyfourMenu = function(i) {
      function s() {
          a.addEventListener("click", function(i) {
              i.preventDefault(), t()
          })
      }

      function t() {
          a.classList.contains("is-active") ? c() : b()
      }

      function b() {
          n.classList.add("is-active"), a.classList.add("is-active"), o.classList.add("is-active")
      }

      function c() {
          n.classList.remove("is-active"), a.classList.remove("is-active"), o.classList.remove("is-active")
      }
      function t() {
          a.classList.contains("is-active") ? c() : b()
      }
      var n = document.querySelector(i),
          a = n ? n.querySelector(".js-menu-toggle") : void 0,
          o = n ? n.querySelector(".js-menu-mask") : void 0;
      if (!(n && a && o)) throw new Error("Invalid elements, check the structure.");
      return s(), {
          openMenu: b,
          closeMenu: c
      }
  }
}(window);