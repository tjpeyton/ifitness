$(document).ready(function() {
    $(".container").load("home.html");
});

$("ul.navbar-nav li").each(function() {
    $(this).on("click", function{
        $(".container").load(($this).attr("data-page")+".html");
    });
});

$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
