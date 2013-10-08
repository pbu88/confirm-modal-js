/* ========================================================
 * confirm-modal.js
 * http://github.com/pbu88/confirm-modal.js
 * ========================================================
 *
 * This piece of code is intended to serve as a guide 
 * in the tedious writing of boilerplate code needed to 
 * create confirmation dialogs in your web pages.
 *
 * It can be used with anchors <a/> and forms <form/> in a 
 * declarative and easy to remember way within the tag 
 * definition. It also can be called within a JavaScript 
 * block of code programatically.
 *
 * The requirements are simple:
 *  1. The use of jQuery (who doesn't ;) ).
 *  2. Have a modal dialog to be called when the button is
 *     clicked.
 *
 * The example here utilizes Twitter's Bootstrap library
 * (specifically bootstrap-modal.js) to deal with modals,
 * but the code layout is intended to be easily adapted to 
 * any circumstance. */


$(function(){

    /* CONFIRMATION BUTTON CLASS DEFINITION
     * ==================================== */

    function ConfirmationButton(element, options){

        this.$elem = $(element);
        this.options = options;
        this.modal = $(options.modal);

        var that = this;
        this.$elem.click(function( e ){
            e.preventDefault();
            that.modal.modal();
            that.modal
                .find('.modal-text')
                .html(that.options.text);

            if (that.options.action) {
                that.modal
                    .find('.modal-action')
                    .attr('href', that.options.action);
            }
            else if (that.options.submit) {
                that.modal
                    .find('.modal-action')                    
                    .click(function ( e ) {
                        e.preventDefault();
                        $(that.options.submit).submit();
                    });
            }

        });

    }

    /* CONFIRMATION BUTTON PLUGIN DEFINITION
     * ===================================== */

    $.fn.confirmButton = function(option){
        return this.each(function(){
            var $this = $(this),
                data = $this.data(),
                options = $.extend({}, data, option);

            $this.data(
                'confirm-btn',
                new ConfirmationButton(this, options)
            );
        });
    };

    /* CONFIRMATION BUTTON CLASS INITIALIZATION
     * ======================================== */

    $('.confirm-btn').confirmButton({});
});
