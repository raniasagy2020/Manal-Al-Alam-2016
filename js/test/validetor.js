
    //form validetor
    $.validator.setDefaults( {
        submitHandler: function () {
            alert( "submitted!" );
        }
    } );

    $( document ).ready( function () {
        $( "#signupForm" ).validate( {
            rules: {
                fromdate: "required",
                todate: "required",
                firstname: "required",
                mobile: "required",
                address: {
                    required: true,
                    minlength: 5
                },
                username: {
                    required: true,
                    minlength: 2
                },
                password: {
                    required: true,
                    minlength: 5
                },
                confirm_password: {
                    required: true,
                    minlength: 5,
                    equalTo: "#password"
                },
                email: {
                    required: true,
                    email: true
                },
                agree: "required"
            },
            messages: {
                fromdate: "برجاء كتابة تاريخ السفر",
                todate: "برجاء كتابة تاريخ العودة",
                firstname: "برجاء كتابة الإسم",
                mobile: "برجاء كتابة رقم الهاتف",
                address: {
                    required: "برجاء كتابة العنوان",
                    minlength: "برجاء كتابة العنوان بشكل صحيج"
                },                
                username: {
                    required: "Please enter a username",
                    minlength: "Your username must consist of at least 2 characters"
                },
                password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 5 characters long"
                },
                confirm_password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 5 characters long",
                    equalTo: "Please enter the same password as above"
                },
                email: "برجاء كتابة بريدك الإلكتروني",
                agree: "Please accept our policy"
            },
            errorElement: "em",
            errorPlacement: function ( error, element ) {
                // Add the `help-block` class to the error element
                error.addClass( "help-block" );

                if ( element.prop( "type" ) === "checkbox" ) {
                    error.insertAfter( element.parent( "label" ) );
                } else {
                    error.insertAfter( element );
                }
            },
            highlight: function ( element, errorClass, validClass ) {
                $( element ).parents( ".col-sm-5" ).addClass( "has-error" ).removeClass( "has-success" );
            },
            unhighlight: function (element, errorClass, validClass) {
                $( element ).parents( ".col-sm-5" ).addClass( "has-success" ).removeClass( "has-error" );
            }
        } );

} );