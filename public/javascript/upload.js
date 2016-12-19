var fileInput = $('#fileInput');
var config;

fileInput.on('change', function() {
    if (!window.FileReader) {
        alert('Your browser is not supported')
    }

    var input = fileInput.get(0);
    
    // Create a reader object
    var reader = new FileReader();
    if (input.files.length) {
        var file = input.files[0];
        reader.readAsText(file);
        $(reader).on('load', processConfig);
    } else {
        alert('Please upload a file before continuing')
    } 
});

function processConfig(e) {
    var file = JSON.parse(e.target.result);
    if (file.colorSchemes.qualitativeScales[0].scale !== undefined) {
        config = file;
        $('#config-status').text('Config successfully uploaded!')
        if($('#colors').val() === null) {
            pasteColors = config.palette.slice(3,9);
            $('#colors').tokenize2().placeholder.hide();
            $.each(pasteColors, function(i, value) {
                $('#colors').tokenize2().tokenAdd(value, value, false)
            });
        }
    }
}