const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "Land Use Land Cover in GEE",
				weight: 12.3
			}, {
				text: "Crop acerage estimation in GEE",
				weight: 8
			}, {
				text: "Soil Erosion Estimation using RUSLE",
				weight: 14
			}, {
				text: "Mapping of Irrigated crop area",
				weight: 3
			}, {
				text: "Flood mapping and damage assessment in GEE",
				weight: 7
			}, {
				text: "Coral reefs mapping",
				weight: 10
			}, {
				text: "Wasteland Change Analysis",
				weight: 9
			}, {
				text: "Training to Agricultural departments in MPAE",
				weight: 15
			}, 
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}

	function typeAnimation() {
		Typed.new("#writing-text", {
			strings: [
				"am a Post Graduate in Remote Sensing and GIS.", "love to work on satellite image processing.", "also taught basics on Remote Sensing and GIS.", "Currently working on Google Earth Engine"
			],
			// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
			stringsElement: null,
			// typing speed
			typeSpeed: 1,
			contentType: 'text',
			callback: function() {
				$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
			},
			preStringTyped: function() {},
			onStringTyped: function() {}
		});
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();
