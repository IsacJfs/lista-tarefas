$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();

        const entradaTask = $('#input-text').val();
        $(`<li>${entradaTask}</li>`).appendTo('ul');
        $('#input-text').val('');

        
    })
    $('ul').on('click', 'li', function() {
        $(this).toggleClass('line-through');
    });
})    

