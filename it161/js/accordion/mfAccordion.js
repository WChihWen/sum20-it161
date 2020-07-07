        (function ($) {
            $.fn.mfAccordion = function (opts) {
                var defaults = { width: 150, list: null, lang: "0", display: "none" };
                var options = $.extend(defaults, opts);
                if (options.list.length != 0 || options.list != null) {
                    $(this).html('');
                    var html = '';
                    var capt = '';
                    var lnk = '';
                    html += "<ul id='accordion'>";
                    for (var j = 0; j < options.list.length; j++) {
                        switch (options.lang.toLowerCase()) {
                            case "0": capt = options.list[j].cht; break;
                            case "1": capt = options.list[j].chs; break;
                            case "2": capt = options.list[j].eng; break;
                        }
                        lnk = (options.list[j].lnk == '') ? '#' : options.list[j].lnk;
                        html += '<li ><a href="' + lnk + '">' + capt + '</a>';
                        if (options.list[j].sub.length > 0) {
                            html += '<ul style="display:' + options.display + ';">';
                            for (var k = 0; k < options.list[j].sub.length; k++) {
                                switch (options.lang.toLowerCase()) {
                                    case "0": capt = options.list[j].sub[k].cht; break;
                                    case "1": capt = options.list[j].sub[k].chs; break;
                                    case "2": capt = options.list[j].sub[k].eng; break;
                                }
                                lnk = (options.list[j].sub[k].lnk == '') ? '#' : options.list[j].sub[k].lnk;
                                html += '<li><a href="' + lnk + '">' + capt + '</a></li>';
                            }
                            html += '</ul></li>';
                        } else {
                            html += '</li>';
                        }
                    }
                    html += '</ul>';
                    $(this).append(html);

                    var id = $(this).attr('id');
                    $('#' + id + ' ul > li').click(function () {
                        var obj = this;

                        if (obj.parentNode.id == 'accordion') {
                            if ($('ul', obj).css('display') == 'none') { $('ul', obj).slideDown(); } else { $('ul', obj).slideUp(); }
                            return false;
                        } else {
                            window.location = obj.childNodes[0].href; return false;
                        }
                    });
                }
                $(this).css('width', options.width);
            };
        })(jQuery);