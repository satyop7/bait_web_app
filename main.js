$(document).ready(function() {
    $('.nav-link').click(function() {
        // Remove active class from all items
        $('.nav-link').removeClass('active');
        
        // Add active class to the clicked item
        $(this).addClass('active');
    });
});