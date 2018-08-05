
let colorPick = $('#colorPicker');

let inputHeight = $('#input_height');
let inputWidth = $('#input_width');

/*canvas*/
let pixelCanvas = $('#pixel_canvas');


$('#sizePicker').submit(function(event){
    makeGrid();
    event.preventDefault();
});

function makeGrid() {

/*clear canvas*/

  pixelCanvas.children().remove('tr');

  let height = inputHeight.val();
  let width = inputWidth.val();

/*create rows*/

  for (rows = 1; rows <= height; rows++){
      $('<tr></tr>').appendTo(pixelCanvas);
  }

/*create columns*/

	for (cols = 1; cols <= width; cols++){
    	$('<td></td>').appendTo('tr');
	}
}

/*select color td*/

pixelCanvas.on('click', 'td', function(){
	let color = $('#colorPicker').val();
    $(this).css('background-color', color);
});
