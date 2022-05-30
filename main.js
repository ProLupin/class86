var canvas=new fabric.Canvas("canvas1")
block_width=30
block_height=30
playerx=10
playery=10
var player_obj=""
var block_obj=""
function player_up(){
    fabric.Image.fromURL("player.png", function(img){
        player_obj=img;
        player_obj.scaleToWidth(150)
        player_obj.scaleToHeight(140)
        player_obj.set({
            top:playery, left:playerx
        });
        canvas.add(player_obj)
    });

    
}
function block_up(getimage){
    fabric.Image.fromURL(getimage, function(img){
        block_obj=img;
        block_obj.scaleToWidth(block_width)
        block_obj.scaleToHeight(block_height)
        block_obj.set({
            top:playery, left:playerx
        });
        canvas.add(block_obj)
    });

    
}
player_up()
block_up("cloud.jpg")