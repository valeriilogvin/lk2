$(function () {

    // burger 
    $('.burger').click(function () {
        $('.burger, .sidebar').toggleClass('open');
        $('.darkbg').toggleClass('dark');
    });
    $('.darkbg').click(function () {
        $('.burger, .sidebar').removeClass('open');
        $('.darkbg').removeClass('dark');
    });
    $(window).resize(function () {
        var windowWidth = $('body').innerWidth();
        if (windowWidth > 790) {
            $('.burger, .sidebar').removeClass('open');
            $('.darkbg').removeClass('dark');
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

    // $('.burger').on('click', function () {
    //     $(this).find('.burger-span').toggleClass('active');
    //     $('.sidebar').toggleClass('active-burger');
    // })



});

/* Локализация datepicker */
$.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: 'Предыдущий',
    nextText: 'Следующий',
    currentText: 'Сегодня',
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
    monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Не',
    dateFormat: 'd, MM, y',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
};
$.datepicker.setDefaults($.datepicker.regional['ru']);