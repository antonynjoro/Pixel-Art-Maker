// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var chosenColor, rowNumbers, columnNumbers, cell;

chosenColor=$("#colorPicker");
rowNumbers = $("#inputHeight");
columnNumbers =$("#inputWeight");


function makeGrid() {
    for ( var x = 1; rowNumbers.val() >=x ;x++) {
        $("#pixelCanvas").append("<tr class='row'></tr>");
    };
    var y =1;
        while (columnNumbers.val()>=y){
            $(".row").append("<td class='column'></td>");
            y=y+1;
        };
// Your code goes here!

}



$("#sizePicker").submit(function(event){
    $("table").children().remove();
    makeGrid();
    fillColor();
    event.preventDefault();
});


function fillColor(){
    $("td").click(function(){
        $(this).css("background-color", chosenColor.val())
    }
    )
    
}