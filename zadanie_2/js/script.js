const menu = $(".menu-header");
const list = $(".menu-list");
const angleDown = $(".fa-angle-down");
const angleUp = $(".fa-angle-down");

console.log(menu);

const showList = () => {
  console.log("ram");
  if (list.css('display') == 'none'|| list.css('display') == '') {
    list.fadeIn("fast");
    menu.css("background-color", "#3FA6FD").css("color", "white");
    angleDown.removeClass("anim-up");
    angleDown.addClass("anim-down");
  } else {
    list.fadeOut("fast");
    menu.css("background-color", "white").css("color", "#9A91A5");
    angleDown.removeClass("anim-down");
    angleDown.addClass("anim-up");
  }
};
menu.on("click", showList);