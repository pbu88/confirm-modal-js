$(function(){

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

    $('.confirm-btn').confirmButton({});
});
