$(function () {

    // burger 
    $('.burger').click(function () {
        $('.burger, .sidebar').toggleClass('open');
        $('.darkbg').toggleClass('dark');
        $('body').toggleClass('lock');
    });
    $('.darkbg').click(function () {
        $('.burger, .sidebar').removeClass('open');
        $('.darkbg').removeClass('dark');
        $('body').removeClass('lock');
    });
    $(window).resize(function () {
        var windowWidth = $('body').innerWidth();
        if (windowWidth > 790) {
            $('.burger, .sidebar').removeClass('open');
            $('.darkbg').removeClass('dark');
            $('body').removeClass('lock');
        }
    });
    // /burger 


    $('.sidebar__link').hover(function () {
        $(this).toggleClass('hover');
        $(this).find('.sidebar__svg').toggleClass('hover');
        $(this).find('.sidebar__link-text').toggleClass('hover');
    })

    setTimeout(() => {
        $('select').styler();
    }, 200)

    $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

    $('.lk-banner__loop').magnificPopup({
        type: 'image'

    });

    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });

    $('.add-link__close').on('click', function () {
        $.magnificPopup.close();
    })

    $('.support__top-soc').hover(function () {
        $(this).toggleClass('hover');
        $(this).find('.support__top-elips-svg').toggleClass('hover');
    })

    $("input[name='add-chat-input[]']").change(function(){
        var filename = $(this).val().replace(/.*\\/, "");
        $('#add-file-text').html(`
            <a onclick="support_screenshot_delete()" style="padding: 10px;">
                <svg  width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 1L7.39013 8.39013" stroke="#8E92A6"/>
                    <path d="M7.38965 1L-0.000482559 8.39013" stroke="#8E92A6"/>
                </svg>
            </a>

            ${filename}
        `);
    });

});

function multiple_input_handler(files){
    if (files.length === 1){
        $('#input-multiply-text').html(files[0].name);
    } else {
        $('#input-multiply-text').html(`${files.length} файла выбрано`);
    }
}

function support_input_file_handler(){
    $("input[name='add-chat-input[]']").click();
}

function support_screenshot_delete() {
    $("input[name='add-chat-input[]']").val('');
    $('#add-file-text').html('');
}