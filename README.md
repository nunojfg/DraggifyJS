DraggifyJS
====================

Drags and drop and uploads files in ajax using FormData, works on modern browsers - ie10, Chrome, Firefox, Safari and Opera
.
Requires JQuery.

How to use
----------

Add this to your view:
`````html
<div class="dropzoneSubmitUrl" style="display:none;">
<!-- for example http://localhost/fileHandler.php --> http://localhost/fileHandler.php</div>
<div id="dropzone">Drag Files Here</div>
<!-- here you can use a progress bar -->
<div class="dropzoneProgress">Files Still not Uploaded</div>
`````
You can use whatever backend controller you like with this frontend code, I will provide a PHP example later on.
