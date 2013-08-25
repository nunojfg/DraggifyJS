$(document).ready(function($) {
	
	$(document).on('dragover',false).on('drop','#dropzone', sendDragAndDropFile);
	
	//Detects if browser is capable of drag and drop
	if ( window.FileReader )
	{
		$('#dropzone').show();
	}
	
	// Send drag and drop file
	function sendDragAndDropFile(e)
	{
		if ( ! (e.originalEvent.dataTransfer && e.originalEvent.dataTransfer.files.length))
			return false;
		
		e.preventDefault();
		e.stopPropagation();
		
		// Detect single file selection
		if (e.originalEvent.dataTransfer.files.length > 1)
		{
			// Here add your javascript framework message
			alert('Please drag and drop only one attachment at a time');
			return false;
		}
		
		var update_element	= $('.dropzoneUpdateElement');
		var url				= $('.dropzoneSubmitUrl').text();
		var data			= new FormData();
		var file			= e.originalEvent.dataTransfer.files[0]; //Single file selection
		data.append('file', file);
		
		// Sends file in ajax in multipart form, using FormData API
		$.ajax({
			url: url,
			data: data,
			cache: false,
			contentType: false,
			processData: false,
			type: 'POST',
			success: function(result) {
				if (result)
				{
					//Here you can use update_element to update dynamically the files uploaded
					//Since this is a demo we are using alert to simplify the output
					//when you have a good understanding please use the update_element and
					//replace its html - ex: update_element.replaceWith(result.output);
					alert('File uploaded');
				}
			}
		});
		
		return false;
	}
})
