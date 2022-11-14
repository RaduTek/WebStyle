function initSubs() {
    $('.sub-wrap').each(function() {
        var elem = $(this);
        if (elem.has('.sub-head').length > 0) {
            elem.children('.sub').addClass('has-head');
        }
        if (elem.has('.sub-head-fit').length > 0) {
            elem.children('.sub').addClass('has-head-fit');
        }
        if (elem.has('.sub-foot').length > 0) {
            elem.children('.sub').addClass('has-foot');
        }
        if (elem.has('.sub-foot-fit').length > 0) {
            elem.children('.sub').addClass('has-foot-fit');
        }
    });
    $('.sub-wrap.collapsible').each(function() {
        var elem = $(this);
        if (elem.has('.sub-head').length > 0) {
            var sub_head = elem.children('.sub-head');
            sub_head.append('<iconify-icon class="sub-collapse-icon" icon="ic:baseline-arrow-back-ios-new"></iconify-icon>');
        } else if (elem.has('.sub-head-fit').length > 0) {
            var sub_head = elem.children('.sub-head-fit');
            sub_head.append('<iconify-icon class="sub-collapse-icon" icon="ic:baseline-arrow-forward-ios"></iconify-icon>');
        } else return;
        sub_head.on('click', function() {
            elem.children('.sub').slideToggle();
            elem.children('.sub-foot').slideToggle();
            elem.children('.sub-foot-fit').slideToggle();
            elem.toggleClass('collapsed');
        });
    });
}

function bodyOnLoad() {
    initSubs();
}