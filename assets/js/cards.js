function resizeNav() {
    if ($(window).width() > 768) {
        $(".nav-item").each(function () {
            $(this).removeClass("list-inline-item");
            $(this).addClass("text-right");
        });
    }
}
resizeNav();