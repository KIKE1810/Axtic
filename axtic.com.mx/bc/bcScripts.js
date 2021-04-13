$(document).ready(function (){
    $('#myloader').hide();
    //Close the bootstrap alert
    $('#linkClose').click(function () {
        $('#divError').hide('fade');
    });

    var f = new Date();



});

//$(function setAction () {
    // Save the new user details
    //$('#btnContacto').click(function () {
       //$('#contact-form').on('submit', function () {
        $('#contact-form').submit( function (e) {
            e.preventDefault();
            $('#myloader').show();
            var url = "http://tics-tula.com/contacto/api/mail";
            $.ajax({
                    url: url,
                    method: 'POST',
                    //contentType: 'application/json',
                    data: {
                        nombre: $('#form_name').val(),
                        telefono: $('#form_tel').val(),
                        email: $('#form_email').val(),
                        mensaje: $('#form_message').val(),
                        areaInteres: $('#form_need').val()
                        
                    },
                    success: function () {
                     // alert("Hemos recibido tu informacion! Enseguida nos ponemos en contacto.");
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                        $('#successModal').modal('show');
                        $('#myloader').hide();
                       
                        //window.location.href = "/index.html";//aqui va al inde
                    },
                    error: function (jqXHR) {
                        //$('#divErrorText').text(jqXHR.responseText);
                        //$('#divError').show('fade');
                        $('#myloader').hide();
                        alert('Algo salio mal: '+jqXHR.responseText);
                    }
                });
                $('#btnCerrar').click(function () {
                    window.location.href = "index.htm"
                });
        
           
        

});


