// Jquery Plugin Tabbed Combo Box
// A plugin to render checbox as tabbed button
// Version 0.1 - 24 Nov 2014
// by Peter Boccia
// peterboccia88@gmail.com

(function ($) {

    $.tabCheckBox = function (element, options) {

        var defaults = {
            activeClass: 'active',
            inactiveClass: 'inactive',
            attributeLabel: 'data-text',
            onChange: function () { }
        }

        var plugin = this;

        plugin.settings = {}

        var $element = $(element);
        var span;

        plugin.init = function () {
            plugin.settings = $.extend({}, defaults, options);

            $element.hide();

            span = $('<span />')
                .addClass('tabbedCheckbox')
                .text($element.attr(plugin.settings.attributeLabel));

            if ($element.is(':checked') || $element.val() == 'true') {
                plugin.select();
            }
            else {
                plugin.deselect();
            }

            span.click(function (e) {
                if ($element.val() == 'true') {
                    plugin.deselect();
                }
                else {
                    plugin.select();
                }
            });

            span.insertAfter($element);
        }

        plugin.select = function () {
            span.removeClass(plugin.settings.inactiveClass).addClass(plugin.settings.activeClass);
            $element.val(true);
        }

        plugin.deselect = function () {
            span.removeClass(plugin.settings.activeClass).addClass(plugin.settings.inactiveClass);
            $element.val(false);
        }

        plugin.init();
    }

    $.fn.tabCheckBox = function (options) {
        return this.each(function () {
            if (undefined == $(this).data('tabCheckBox')) {
                var plugin = new $.tabCheckBox(this, options);
                $(this).data('tabCheckBox', plugin);
            }
        });
    }

})(jQuery);
