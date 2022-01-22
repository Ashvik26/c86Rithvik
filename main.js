var canvas=new fabric.Canvas("myCanvas");
player_x=10;
player_y=10;
block_img_width=30;
block_img_height=30;
var player_object="";
var block_object="";
function player_update() {
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(150);
        player_object.set({
            top:player_y,
left:player_x
        });
        canvas.add(player_object);
    });
}
function block_update(get_Image) {
    fabric.Image.fromURL(get_Image,function(Img){
        block_object=Img;
        block_object.scaleToWidth(150);
        block_object.scaleToHeight(150);
        block_object.set({
            top:player_y,
left:player_x
        });
        canvas.add(block_object);
    });
}