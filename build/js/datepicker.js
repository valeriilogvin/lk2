let month = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];

$(function () {

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


    $('.datepicker').datepicker({
        showOn: "button",
        range: 'period', // режим - выбор периода
        numberOfMonths: 2,
        buttonImageOnly: true,
        buttonImage: "img/icons/calendar-icon.svg",
        onSelect: function (dateText, inst, extensionRange) {
            // extensionRange - объект расширения
            $('.date-start').html(extensionRange.startDate.getDay() + ' ' + month[extensionRange.startDate.getMonth()]);
            $('.date-end').html(' - ' + extensionRange.endDate.getDay() + ' ' + month[extensionRange.endDate.getMonth()] + ', ' + extensionRange.endDate.getFullYear());
            $('#dateFrom').val(extensionRange.startDateText);
            $('#dateTo').val(extensionRange.startDateText);

            // console.log(extensionRange); // массив дат (объект даты)
            // console.log(extensionRange.startDate.getMonth());
            // console.log(extensionRange.startDateText);
        }
    });
});