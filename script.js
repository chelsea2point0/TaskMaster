$(document).ready(function() {
    $('#button').click(function() {
        var toAdd = $('input[name=checkListItem]').val()
            $('.list').append('<div class="item">' + toAdd + '</div>');
             $('input[name=checkListItem]').val("");
    });
    
});

$(document).on('click', '.item', function() {
    $(this).remove();
});


var mentalNotes = function() {
  $('.btn').click(function() {
    var post = $('.status-box').val();
    $('<li>').text(post).prependTo('.posts');
    $('.status-box').val('');
    $('.counter').text('140');
    $('.btn').addClass('disabled');
    });
  $('.status-box').keyup(function() {
    var postLength = $(this).val().length;
    var charactersLeft = 140 - postLength;
    $('.counter').text(charactersLeft);
    if (charactersLeft < 0) {
        $('.btn').addClass('disabled')
    } 
    else if (charactersLeft == 140) {
        $('.btn').addClass('disabled')
    } 
    else {
        $('.btn').removeClass('disabled')
    }
  });
  $('.btn').addClass('disabled');
};

$(document).ready(mentalNotes);