//Create una referencia para el lienzo

canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d")

//Establece una altura y ancho específico para la imagen del auto.
greencar_width=75;
greencar_height=100;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

//establece la posición x e y donde aparecerá la imagen.
greencar_x=5;
greencar_y=225;


function add() {
	//para subir la imagen del auto y las imágenes de fondo al lienzo.
	background_imgTag = new Image(); 				//define la variable de tipo imagen
	background_imgTag.onload = uploadBackground; 	// configura la función al cargar la imagen
	background_imgTag.src = background_image;   	// carga la imagen

	greencar_imgTag = new Image(); 				//define la variable de tipo imagen
	greencar_imgTag.onload = uploadgreencar; 	//  configura la función al cargar la imagen
	greencar_imgTag.src = greencar_image;  		 //carga la imagen
}

function uploadBackground() {
	//Define function ‘uploadBackground’
	ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawImage(greencar_imgTag, greencar_x,greencar_y, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("ARRIBA");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("ABAJO");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("IZQUIERDA");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("DERECHA");
		}
		
		
}

function up()
{
	//Define function to move the car upward
	if(greencar_y >=0)
	{
		greencar_y = greencar_y - 10;
		console.log("cuando tecla arriba es presionada,  x = " + greencar_x + " | y = " +greencar_y);
		 uploadBackground();
		 uploadgreencar();
		
	}
}

function down()
{
	//Define function to move the car downward
	if(greencar_y <=350)
	{
		greencar_y =greencar_y+ 10;
		console.log("Cuando tecla abajo es presionada,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadgreencar();
		
	}
}

function left()
{
	//Define function to move the car left side
	if(greencar_x >= 0)
	{
		greencar_x =greencar_x - 10;
		console.log("Cuando tecla izquierda es presionada,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		 uploadgreencar();
		
	}
}

function right()
{
	//Define function to move the car right side
	
	if(greencar_x <= 750)
	{
		greencar_x =greencar_x + 10;
		console.log("Cuando tecla derecha es presionada,  x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadgreencar();
		
   }
}
