$(document).foundation()

// ===== Scroll to Top ==== 
$(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function () {      // When arrow is clicked
    $('body,html').animate({
        scrollTop: 0                       // Scroll to top of body
    }, 500);
});


    // Define slideIndex globally
    var slideIndex = {};

    // Function to open the modal and start the slideshow for a given modal ID
    function openAndShowModal(modalId) {
        // Open the modal
        $('#' + modalId).foundation('open');

        // Start slideshow for the given modal ID
        showSlides(1, modalId);

        // Bind a listener to the modal close event
        $('#' + modalId).on('closed.zf.reveal', function() {
            // Reset slideIndex for the modal
            slideIndex[modalId] = 1;
        });
    }

    // Function to close the modal and reset slideIndex for the modal
    function closeModalAndReset(modalId) {
        // Close the modal
        $('#' + modalId).foundation('close');

        // Reset slideIndex for the modal
        slideIndex[modalId] = 1;
    }

    // Next/previous controls for slideshow
    function plusSlides(n, modalId) {
        showSlides(slideIndex[modalId] += n, modalId);
    }

    // Display the slides for a given modal ID
    function showSlides(n, modalId) {
        var i;
        var slides = document.querySelectorAll('#' + modalId + ' .slideshow-img');
        if (!slideIndex[modalId]) {
            slideIndex[modalId] = 1;
        }
        if (n > slides.length) { slideIndex[modalId] = 1; }
        if (n < 1) { slideIndex[modalId] = slides.length; }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex[modalId] - 1].style.display = "block";
    }
