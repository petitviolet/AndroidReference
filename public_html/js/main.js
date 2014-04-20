$(document).ready(function(){
	$('#try-copy').keydown(function(e) {
		if (e.shiftKey === true && 37 <= e.which && e.which <= 40 ) { // Shift + 矢印 を押せば
			$('#ok-select').removeClass('hidden');
		} else if ((e.ctrlKey === true || e.metaKey === true) && e.which === 67) { // Ctrl + C を押せば
			$('#ok-copy').removeClass('hidden');
		}
	});
	$('#try-paste').keydown(function(e) {
		if ((e.ctrlKey === true || e.metaKey === true) && e.which === 86) { // Ctrl + V を押せば
			$('#ok-paste').removeClass('hidden');
		}
	});
	$('#try-redo').keydown(function(e) {
		if ((e.ctrlKey === true || e.metaKey === true) && e.which === 90) { // Ctrl + Z を押せば
			$('#ok-redo').removeClass('hidden');
		}
	});
	$('#try-select-all').keydown(function(e) {
		if ((e.ctrlKey === true || e.metaKey === true) && e.which === 65) { // Ctrl + A を押せば
			$('#ok-select-all').removeClass('hidden');
		}
	});
});