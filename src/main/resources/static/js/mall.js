/**
 * Created by cheng on 2016/6/15.
 */
$(document).ready(function () {
    $("#main").load("load1.html");
    $("#btn1").click(function () {
        $("#main").load("load1.html", function (response, status, xhr) {
//                    alert(response+" "+status+" "+xhr);
        });
    });
    $("#btn2").click(function () {
        $("#main").load("load2.html", function (response, status, xhr) {
//                    alert(response+" "+status+" "+xhr);
        });
    });

    var $totalPrice = $(".total-price").children("strong").text();
    if($totalPrice!="" && $totalPrice!="0") {
        $(".total-price").show();
    }else {
        $(".total-price").hide();
    }



    $(".type").click(function() {
        var $type = $(this);
        var ac = $type.siblings(".active").removeClass("active");
        $type.addClass("active");
    });




});