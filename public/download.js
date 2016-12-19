$('#download').on('click', function(){
	// Return if no file has been uploaded
	if(config === undefined){ return; }

	config.palette = palette;
	config.extendedPalette = ["none", ...extended_palette];
	config.colorSchemes.qualitativeScales[0].scale = twelve_scale;
	config.colorSchemes.ordinalScales[1].scale = [null, ...sequential_scale];
	config.colorSchemes.ordinalScales[3].scale = [null, ...diverging_scale];

	var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(config, null, 4));
	var dlAnchorElem = document.getElementById('fileDownload');
	dlAnchorElem.setAttribute("href",     dataStr     );
	dlAnchorElem.setAttribute("download", "theme.json");
	dlAnchorElem.click()
});