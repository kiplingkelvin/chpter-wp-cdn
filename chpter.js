
jQuery(document).ready(function($) {
    function get_checkout_data(){
        $.ajax({
            type: 'POST',
            url: ajax_object.ajax_url,
            data: {
                action: 'chpter_checkout_listener',
                event: "phone",
                email: $('input#billing_email').val(),
                phone: $('input#billing_phone').val(),
                first_name: $('input#billing_first_name').val(),
                last_name: $('input#billing_last_name').val(),
            },});
    }

    // Listen for changes in the billing_phone field.
    $('input#billing_phone').on('input', function() {
        get_checkout_data();
    });

    // Listen for changes in the billing_email field.
    $('input#billing_email').on('input', function() {
        get_checkout_data();
    });

    window.addEventListener('beforeunload', function (e) {
        get_checkout_data();
    });
});
