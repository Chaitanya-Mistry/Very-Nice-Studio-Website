let cnames = ['Justin T.', 'Narendra M.', 'Sachin T.', 'Alfreda'];
// Getting the clients's images
let clients_images = document.getElementsByClassName('clients_images');

$(document).ready(() => {
    // To highlight the current active webpage.
    $('a').each(function () {
        if ($(this).prop('href') == window.location.href) {
            $(this).addClass('active');
        }
        else{
            $(this).removeClass('active');
        }
    });
    // Populating the client's names
    Array.from(clients_images).forEach((element, index) => {
        $(element).after(`<span class="cnames">${cnames[index]}</span>`);
    });
    
    // Login Popup hide/show
    $('.Sign_In_Link').click(function () {
        $('.Login_Pop_Up').fadeIn(1000);
    });

    $('.close_icon').click(function () {
        $('.Login_Pop_Up').fadeOut(1000);
        $('#sign_in_form')[0].reset();
    });

});

