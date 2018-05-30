window.onload = function() {
	var main = new Main();
}

function Main() { 	
	var self = this;
	this.webGL=true;
	this.width = document.documentElement.clientWidth;
	this.height = document.documentElement.clientHeight;
	this.app = new PIXI.Application(this.width, this.height);	
	document.body.appendChild(this.app.view);
	this.app.renderer.autoResize = true;

	this.container = new PIXI.Container();
	this.app.stage.addChild(this.container);
	this.app.renderer.resize(this.width, this.height);

	this.runDown = [
		'sniper_move_cam_180/sniper_move_cam_180_00000.png',
		'sniper_move_cam_180/sniper_move_cam_180_00001.png',
		'sniper_move_cam_180/sniper_move_cam_180_00002.png',
		'sniper_move_cam_180/sniper_move_cam_180_00003.png',
		'sniper_move_cam_180/sniper_move_cam_180_00004.png',
		'sniper_move_cam_180/sniper_move_cam_180_00005.png',
		'sniper_move_cam_180/sniper_move_cam_180_00006.png',
		'sniper_move_cam_180/sniper_move_cam_180_00007.png',
		'sniper_move_cam_180/sniper_move_cam_180_00008.png',
		'sniper_move_cam_180/sniper_move_cam_180_00009.png',
		'sniper_move_cam_180/sniper_move_cam_180_00010.png',
		'sniper_move_cam_180/sniper_move_cam_180_00011.png',
		'sniper_move_cam_180/sniper_move_cam_180_00012.png',
		'sniper_move_cam_180/sniper_move_cam_180_00013.png',
		'sniper_move_cam_180/sniper_move_cam_180_00014.png',
		'sniper_move_cam_180/sniper_move_cam_180_00015.png',
		'sniper_move_cam_180/sniper_move_cam_180_00016.png',
		'sniper_move_cam_180/sniper_move_cam_180_00017.png',
		'sniper_move_cam_180/sniper_move_cam_180_00018.png',
		'sniper_move_cam_180/sniper_move_cam_180_00019.png',
		'sniper_move_cam_180/sniper_move_cam_180_00020.png',
		'sniper_move_cam_180/sniper_move_cam_180_00021.png',
		'sniper_move_cam_180/sniper_move_cam_180_00022.png',
		'sniper_move_cam_180/sniper_move_cam_180_00023.png',
		'sniper_move_cam_180/sniper_move_cam_180_00024.png',
		'sniper_move_cam_180/sniper_move_cam_180_00025.png'
	]

	this.textureArrayDown = [];

	for (var i=0; i < 20; i++)
	{
	     this.textureRunDown = PIXI.Texture.fromImage(this.runDown[i]);
	     this.textureArrayDown.push(this.textureRunDown);
	};

	this.runRight = [
		'sniper_move_cam_270/sniper_move_cam_270_00000.png',
		'sniper_move_cam_270/sniper_move_cam_270_00001.png',
		'sniper_move_cam_270/sniper_move_cam_270_00002.png',
		'sniper_move_cam_270/sniper_move_cam_270_00003.png',
		'sniper_move_cam_270/sniper_move_cam_270_00004.png',
		'sniper_move_cam_270/sniper_move_cam_270_00005.png',
		'sniper_move_cam_270/sniper_move_cam_270_00006.png',
		'sniper_move_cam_270/sniper_move_cam_270_00007.png',
		'sniper_move_cam_270/sniper_move_cam_270_00008.png',
		'sniper_move_cam_270/sniper_move_cam_270_00009.png',
		'sniper_move_cam_270/sniper_move_cam_270_00010.png',
		'sniper_move_cam_270/sniper_move_cam_270_00011.png',
		'sniper_move_cam_270/sniper_move_cam_270_00012.png',
		'sniper_move_cam_270/sniper_move_cam_270_00013.png',
		'sniper_move_cam_270/sniper_move_cam_270_00014.png',
		'sniper_move_cam_270/sniper_move_cam_270_00015.png',
		'sniper_move_cam_270/sniper_move_cam_270_00016.png',
		'sniper_move_cam_270/sniper_move_cam_270_00017.png',
		'sniper_move_cam_270/sniper_move_cam_270_00018.png',
		'sniper_move_cam_270/sniper_move_cam_270_00019.png',
		'sniper_move_cam_270/sniper_move_cam_270_00020.png',
		'sniper_move_cam_270/sniper_move_cam_270_00021.png',
		'sniper_move_cam_270/sniper_move_cam_270_00022.png',
		'sniper_move_cam_270/sniper_move_cam_270_00023.png',
		'sniper_move_cam_270/sniper_move_cam_270_00024.png',
		'sniper_move_cam_270/sniper_move_cam_270_00025.png'
	];

	this.textureArrayRight = [];

	for (var i=0; i < 20; i++)
	{
	     this.textureRunRight = PIXI.Texture.fromImage(this.runRight[i]);
	     this.textureArrayRight.push(this.textureRunRight);
	};	

	this.warrior = new PIXI.extras.AnimatedSprite(this.textureArrayDown);
	this.container.addChild(this.warrior);
	this.warrior.animationSpeed = 0.4;

	this.warrior2 = new PIXI.extras.AnimatedSprite(this.textureArrayRight);
	this.container.addChild(this.warrior2);
	this.warrior2.animationSpeed = 0.4;
	this.warrior2.visible = false;
	var rightPressed,
		downPressed,
		upPressed,
		leftPressed;

	document.onkeydown = function(e) {

	    if(e.keyCode === 39) {
	        rightPressed = true;
	        self.warrior.visible = false;
	        self.warrior2.visible = true;
	        self.warrior2.play();
	    }
	    else if(e.keyCode === 40) {
	        downPressed = true;
	        self.warrior2.visible = false;
	        self.warrior.visible = true;
	        self.warrior.play();
	    }
	    else if(e.keyCode === 38) {
	        upPressed = true;
	        self.warrior2.visible = false;
	        self.warrior.visible = true;
	        self.warrior.play();
	    }
	    else if(e.keyCode === 37) {
	        leftPressed = true;
	        self.warrior.visible = false;
	        self.warrior2.visible = true;
	        self.warrior2.play();
	    }
	}

	document.onkeyup = function(e) {
	    if(e.keyCode === 39 ) {
	        rightPressed = false;
	        self.warrior2.stop();	        
	    }
	    else if(e.keyCode === 40) {
	        downPressed = false;
	        self.warrior.stop();
	    }
	    else if(e.keyCode === 38) {
	        upPressed = false;
	        self.warrior.stop();
	    }
	    else if(e.keyCode === 37) {
	        leftPressed = false;
	        self.warrior2.stop();
	    }
	}

	this.draw = function() {
		if(rightPressed) {
    		self.warrior2.y = self.warrior.y;
    		self.warrior2.x = self.warrior.x += 1;		
		}
		else if(downPressed) {
		    self.warrior.x = self.warrior2.x;
		    self.warrior.y  = self.warrior2.y += 1;
		}
		else if(upPressed) {
			self.warrior.x = self.warrior2.x;
			self.warrior.y  = self.warrior2.y -= 1;
		}
		else if(leftPressed) {
			self.warrior2.y = self.warrior.y;
    		self.warrior2.x = self.warrior.x -= 1;
		}

		requestAnimationFrame(self.draw);
	}	

	this.draw();

};

