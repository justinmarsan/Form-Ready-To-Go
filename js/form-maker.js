(function() {
  $(function() {
    $('select').each(function() {
      var $ul, offset;
      $(this).css({
        opacity: '0'
      }).after('<ul class="form-select" name="' + $(this).attr('name') + '"></ul>');
      $ul = $('ul.form-select[name=' + $(this).attr('name') + ']');
      $(this).find('option').each(function() {
        if ($(this).attr('selected')) {
          return $ul.append('<li class="selected">' + $(this).text() + '</li>');
        } else {
          return $ul.append('<li value="' + $(this).attr('value') + '">' + $(this).text() + '</li>');
        }
      });
      if (!$(this).hasClass('no-absolute')) {
        offset = $(this).offset();
        $ul.css("position", "absolute");
        return $ul.offset(offset);
      }
    });
    $('.form-select').click(function(e) {
      return $(this).toggleClass('form-select-open');
    });
    $('.form-select li').live('click', function() {
      $(this).parent().find('li').removeClass('selected');
      $(this).addClass('selected');
      $('select[name=' + $(this).parent().attr('name') + '] option').removeAttr('selected');
      return $('select[name=' + $(this).parent().attr('name') + ']').val($(this).attr('value'));
    });
    return "lol";
  });
}).call(this);
