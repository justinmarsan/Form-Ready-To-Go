$ ->
	#replace select
	$('select').each(  ->
		$(@).css({opacity: '0'}).after('<ul class="form-select" name="'+$(@).attr('name')+'"></ul>')
		$ul = $('ul.form-select[name='+$(@).attr('name')+']')
		$(@).find('option').each( ->
			if $(@).attr('selected')
				$ul.append('<li class="selected">'+$(@).text()+'</li>')
			else
				$ul.append('<li value="'+$(@).attr('value')+'">'+$(@).text()+'</li>')
		)
		
		unless $(@).hasClass('no-absolute')
			offset = $(@).offset()
			$ul.css("position", "absolute")
			$ul.offset(offset)
	)
	
	#events on form-select
	$('.form-select').click( (e) ->
		$(@).toggleClass('form-select-open')
	)
	
	$('.form-select li').live('click', ->
		$(@).parent().find('li').removeClass('selected')
		$(@).addClass('selected')
		$('select[name='+$(@).parent().attr('name')+'] option').removeAttr('selected')
		$('select[name='+$(@).parent().attr('name')+']').val($(@).attr('value'))
	)
	
	"lol"