function seerToMon(seer) {
	if (seer < 0) {
		return "Please give a positve value";
	}
	var mon = seer / 40;
	return mon;
	}

	var weight = seerToMon(80);

	console.log(weight);
