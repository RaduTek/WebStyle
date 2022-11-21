function subCollapse(sub) {
    sub.addClass('collapsed');
    sub.children('.sub').slideUp();
    sub.children('.sub-foot').slideUp();
    sub.children('.sub-foot-fit').slideUp();
}

function subExpand(sub) {
    sub.children('.sub').slideDown();
    sub.children('.sub-foot').slideDown();
    sub.children('.sub-foot-fit').slideDown();
    sub.removeClass('collapsed');
}

function subToggle(sub) {
    if (sub.hasClass('collapsed')) {
        subExpand(sub);
    } else {
        subCollapse(sub);
    }
}

function subInit(sub) {
    if (sub.has('.sub-head').length > 0) {
        sub.children('.sub').addClass('has-head');
    }
    if (sub.has('.sub-head-fit').length > 0) {
        sub.children('.sub').addClass('has-head-fit');
    }
    if (sub.has('.sub-foot').length > 0) {
        sub.children('.sub').addClass('has-foot');
    }
    if (sub.has('.sub-foot-fit').length > 0) {
        sub.children('.sub').addClass('has-foot-fit');
    }
    if (sub.hasClass('collapsible')) {
        if (sub.has('.sub-head').length > 0) {
            var sub_head = sub.children('.sub-head');
            sub_head.append('<iconify-icon class="sub-collapse-icon" icon="ic:baseline-arrow-back-ios-new"></iconify-icon>');
        } else if (sub.has('.sub-head-fit').length > 0) {
            var sub_head = sub.children('.sub-head-fit');
            sub_head.prepend('<iconify-icon class="sub-collapse-icon" icon="ic:baseline-arrow-forward-ios"></iconify-icon>');
        } else return;
        sub_head.on('click', function() {
            subToggle(sub);
        });
    }
}

function subInitAll() {
    $('.sub-wrap').each(function() {
        var sub = $(this);
        subInit(sub);
    });
}

var themeVal;

function themeLight() {
    if (themeVal != 'light') {
        themeVal = 'light';
        $.cookie('theme', themeVal);
    }
    $('.globals').removeClass('dark');
    $('.globals').addClass('light');
}
function themeDark() {
    if (themeVal != 'dark') {
        themeVal = 'dark';
        $.cookie('theme', themeVal);
    }
    $('.globals').removeClass('light');
    $('.globals').addClass('dark');
}

function themeToggle() {
    if (themeVal == 'dark') themeLight();
    if (themeVal == 'light') themeDark();
}

function themeInit() {
    $('.action_toggle_theme').click(themeToggle);
    themeVal = $.cookie('theme');
    if (themeVal) {
        if (themeVal == 'dark') themeDark();
        if (themeVal == 'light') themeLight();
    } else {
        themeVal = 'light';
        $.cookie('theme', themeVal);
    }
}

function bodyOnLoad() {
    themeInit();
    subInitAll();
}