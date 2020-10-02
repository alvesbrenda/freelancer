/*!
 * Start Bootstrap - Freelancer v6.0.0 (https://startbootstrap.com/themes/freelancer)
 * Copyright 2013-2020 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-freelancer/blob/master/LICENSE)
 */
(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 71)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Scroll to top button appear
    $(document).scroll(function() {
        var scrollDistance = $(this).scrollTop();
        if (scrollDistance > 100) {
            $('.scroll-to-top').fadeIn();
        } else {
            $('.scroll-to-top').fadeOut();
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
        target: '#mainNav',
        offset: 80
    });

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Floating label headings for the contact form
    $(function() {
        $("body").on("input propertychange", ".floating-label-form-group", function(e) {
            $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
        }).on("focus", ".floating-label-form-group", function() {
            $(this).addClass("floating-label-form-group-with-focus");
        }).on("blur", ".floating-label-form-group", function() {
            $(this).removeClass("floating-label-form-group-with-focus");
        });
    });

})(jQuery); // End of use strict

//abre popup
function abrePopUp() {
    var popup = document.getElementById("popup");
    popup.classList.toggle("show");
}
//fecha popup
function fechaPopUp() {
    var popup = document.getElementById("popup");
    popup.classList.toggle("hide");
}
//Mensagem enviada
document.getElementById('mensagemEnviada').onclick = function() {
    swal('Obrigada!', 'Formulário enviado com sucesso!', 'success')
};
$("#success").click(function() {
    $("div.success").fadeIn(300).delay(1500).fadeOut(400);
});
$("#success2").click(function() {
    swal({
        title: "Teste 7",
        text: "Formulário enviado com sucesso!",
        timer: 1200,
        showConfirmButton: false
    });
});

//limpa campos popup
function limpaCampos() {
    document.getElementById('nome').value = "";
    document.getElementById('email').value = "";
    document.getElementById('tipoContato').value = "";
    document.getElementById('campoMensagem').value = "";
}
/*$('#meuModal').on('shown.bs.modal', function() {
    $('#meuInput').trigger('focus')
})*/

//voltar ao topo
var btn = $('#backToTop');
$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});

//exibe/esconde section
function mostrar_abas(obj) {
    document.getElementById('aluno1').style.display = "none";
    document.getElementById('aluno2').style.display = "none";


    document.getElementById('alunoMenu1').style.display = "none";
    document.getElementById('alunoMenu2').style.display = "none";


    document.getElementById('portfolio1').style.display = "none";
    document.getElementById('portfolio2').style.display = "none";

    switch (obj.id) {
        case 'idAluno1':
            document.getElementById('aluno1').style.display = "block";
            document.getElementById('alunoMenu1').style.display = "block";
            document.getElementById('portfolio1').style.display = "block";

            break
        case 'idAluno2':
            document.getElementById('aluno2').style.display = "block";
            document.getElementById('alunoMenu2').style.display = "block";
            document.getElementById('portfolio2').style.display = "block";

            break
    }
}