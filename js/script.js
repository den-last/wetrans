$(document).ready(function() {
    $(function() {
        $(document).on("click", ".mobile_menu_container .parent", function(e) {
            e.preventDefault();
            $(".mobile_menu_container .activity").removeClass("activity");
            $(this).siblings("ul").addClass("loaded").addClass("activity");
        });
        $(document).on("click", ".mobile_menu_container .back", function(e) {
            e.preventDefault();
            $(".mobile_menu_container .activity").removeClass("activity");
            $(this).parent().parent().removeClass("loaded");
            $(this).parent().parent().parent().parent().addClass("activity");
        });
        $(document).on("click", ".mobile__menu", function(e) {
            e.preventDefault();
            $(".mobile_menu_container").addClass("loaded");
            $(".mobile_menu_overlay").fadeIn();
        });
        $(document).on("click", ".mobile_menu_overlay", function(e) {
            $(".mobile_menu_container").removeClass("loaded");
            $(this).fadeOut(function() {
                $(".mobile_menu_container .loaded").removeClass("loaded");
                $(".mobile_menu_container .activity").removeClass("activity");
            });
        });
        $(document).on("click", ".close__menu", function(e) {
            $(".mobile_menu_container").removeClass("loaded");
            $('.mobile_menu_overlay').fadeOut(function() {
                $(".mobile_menu_container .loaded").removeClass("loaded");
                $(".mobile_menu_container .activity").removeClass("activity");
            });
        });
    });
});

// $(function() {
//     $(document).on("click", ".mobile_menu_container .parent", function(e) {
//         e.preventDefault();
//         $(".mobile_menu_container .activity").removeClass("activity");
//         $(this).siblings("ul").addClass("loaded").addClass("activity");
//     });
//     $(document).on("click", ".mobile_menu_container .back", function(e) {
//         e.preventDefault();
//         $(".mobile_menu_container .activity").removeClass("activity");
//         $(this).parent().parent().removeClass("loaded");
//         $(this).parent().parent().parent().parent().addClass("activity");
//     });
//     $(document).on("click", ".mobile__menu", function(e) {
//         e.preventDefault();
//         $(".mobile_menu_container").addClass("loaded");
//         $(".mobile_menu_overlay").fadeIn();
//     });
//     $(document).on("click", ".mobile_menu_overlay", function(e) {
//         $(".mobile_menu_container").removeClass("loaded");
//         $(this).fadeOut(function() {
//             $(".mobile_menu_container .loaded").removeClass("loaded");
//             $(".mobile_menu_container .activity").removeClass("activity");
//         });
//     });
//     $(document).on("click", ".close__menu", function(e) {
//         $(".mobile_menu_container").removeClass("loaded");
//         $('.mobile_menu_overlay').fadeOut(function() {
//             $(".mobile_menu_container .loaded").removeClass("loaded");
//             $(".mobile_menu_container .activity").removeClass("activity");
//         });
//     });
// });

$(document).ready(function() {
    //Скрыть PopUp при загрузке страницы    
    PopUpHide();
});
//Функция отображения PopUp
function PopUpShow() {
    $("#popup1").show();
}
//Функция скрытия PopUp
function PopUpHide() {
    $("#popup1").hide();
}

$('.close_info1').click(function() {
    PopUpHide();
});

$('.call').click(function() {
    PopUpShow();
});
let inputs = document.querySelectorAll('.input__file');
Array.prototype.forEach.call(inputs, function(input) {
    let label = input.nextElementSibling,
        labelVal = label.querySelector('.input__file-button-text').innerText;

    input.addEventListener('change', function(e) {
        let countFiles = '';
        if (this.files && this.files.length >= 1)
            countFiles = this.files.length;

        if (countFiles)
            label.querySelector('.input__file-button-text').innerText = 'Выбрано файлов: ' + countFiles;
        else
            label.querySelector('.input__file-button-text').innerText = labelVal;
    });
});
// jQuery(document).ready(function($) {
//     $('.gallery__show__wrapp').masonry({
//         // options
//         itemSelector: '.msnry',
//         columnWidth: 300,
//         gutter: 15,
//         isFitWidth: true
//     });
// });