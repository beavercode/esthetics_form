jQuery(document).ready(function() {
    //select's init
    var params = {
        changedEl: "#n100",
        visRows: 6,
        scrollArrows: true
    };
    cuSel(params);
    params = {
        changedEl: "#n200",
        visRows: 6,
        scrollArrows: true
    };
    cuSel(params);
    params = {
        changedEl: "#n300",
        visRows: 6,
        scrollArrows: true
    };
    cuSel(params);

    //accordion
    $("#cert_tabs").tabs(
        "#cert_tabs div.cert__sidebar-desc",
        {tabs: 'span', effect: 'fade', initialIndex: 1}
    );

    //date calendar
    $.tools.dateinput.localize("ru",  {
        months:        'Январь,Февраль,Март,Апрель,Май,Июнь,Июль,Август,Сентябрь,Октябрь,Ноябрь,Декабрь',
        shortMonths:   'Янв,Фев,Мар,Апр,Май,Июн,Июл,Авг,Сен,Окт,Ноя,Дек',
        days:          'Воскресенье,Понедельник,Вторник,Среда,Четверг,Пятница,Суббота',
        shortDays:     'Вск,Пнд,Втр,Срд,Чтв,Птн,Сбт'
    });
    $("#date").dateinput({
        format: 'dddd dd, mmmm yyyy',   // the format displayed for the user
        lang: 'ru', // localisation language
        firstDay: 1, // which day starts a week. 0 = sunday, 1 = monday etc.
        min: -1,   // min selectable day (90 days backwards)
        max: 90,    // max selectable day (90 days onwards)
        offset: [0, 0], // tweak the position of the calendar
        selectors: false,   // whether month/year dropdowns are shown
        onShow: function() {
            var pos = $('#date').offset();
            $('#calroot').css('top', pos.top + 21).css('left', pos.left - 13);
        }
    });

    //validation
    $.tools.validator.fn("[minlength]", function(input, value) {
        var min = input.attr("minlength");
        return value.length >= min ? true : {
            ru: "Минимум " + min + " символ" + (min > 1 ? "ов" : "")
        };
    });
    $.tools.validator.localize("ru", {
        ':email'    : 'Неверный формат эмейл',
        '[required]': 'Поле необходимо заполнить'
    });
    $("#cert__form").validator({lang: 'ru'});
});