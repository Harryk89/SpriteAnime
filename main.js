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

	this.ticker = new PIXI.ticker.Ticker();

	this.container = new PIXI.Container();
	this.app.stage.addChild(this.container);
	this.app.renderer.resize(this.width, this.height);

	PIXI.loader
    .add([
		'sniper_death/sniper_death_00000.png',
		'sniper_death/sniper_death_00001.png',
		'sniper_death/sniper_death_00002.png',
		'sniper_death/sniper_death_00003.png',
		'sniper_death/sniper_death_00004.png',
		'sniper_death/sniper_death_00005.png',
		'sniper_death/sniper_death_00006.png',
		'sniper_death/sniper_death_00007.png',
		'sniper_death/sniper_death_00008.png',
		'sniper_death/sniper_death_00009.png',
		'sniper_death/sniper_death_00010.png',
		'sniper_death/sniper_death_00011.png',
		'sniper_death/sniper_death_00012.png',
		'sniper_death/sniper_death_00013.png',
		'sniper_death/sniper_death_00014.png',
		'sniper_death/sniper_death_00015.png',
		'sniper_death/sniper_death_00016.png',
		'sniper_death/sniper_death_00017.png',
		'sniper_death/sniper_death_00018.png',
		'sniper_death/sniper_death_00019.png',
		'sniper_death/sniper_death_00020.png'
	])
	.add([
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
	])
	.add([
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
	])
    .load(onAssetsLoaded);

function onAssetsLoaded() {

    var frames = [];

    for (var i = 0; i < 25; i++) {
        var val = i < 10 ? '0' + i : i;

        frames.push(PIXI.Texture.fromFrame('sniper_move_cam_180/sniper_move_cam_180_000' + val + '.png'));
    }

	var frames2 = [];

    for (var i = 0; i < 25; i++) {
        var val = i < 10 ? '0' + i : i;

        frames2.push(PIXI.Texture.fromFrame('sniper_move_cam_270/sniper_move_cam_270_000' + val + '.png'));
    }

    var frames3 = [];

    for (var i = 0; i < 20; i++) {
        var val = i < 10 ? '0' + i : i;

        frames3.push(PIXI.Texture.fromFrame('sniper_death/sniper_death_000' + val + '.png'));
    }


    var anim = new PIXI.extras.AnimatedSprite(frames);

    anim.x = self.app.screen.width / 2;
    anim.y = self.app.screen.height / 2;
    anim.anchor.set(0.5);
    anim.animationSpeed = 0.5;
    anim.play();

    self.app.stage.addChild(anim);

    this.down = function() {
    	
        if (anim.y > 500) {
        	anim.y += 0;
        	anim.x += 1;
        	anim.textures = frames2;
        	
        	if (anim.x > 400) {
        		anim.textures = frames3;
        		anim.loop = false;
        		self.ticker.stop();
        	} 
        } else anim.y += 1;
    } 
    self.ticker.add(this.down);
    self.ticker.start();    
}




	// this.warrior = new PIXI.extras.AnimatedSprite(this.textureArrayDown);
	// this.container.addChild(this.warrior);
	// this.warrior.animationSpeed = 0.4;
	// this.warrior.play();
	
	// this.draw = function() {

	// 	self.warrior.y += 1.5;
	// 	if (self.warrior.y===210) {
	// 		self.warrior.y = 210;
	// 		self.warrior.stop();
	// 		self.warrior.destroy();
	// 		self.draw1();
	// 		return;
	// 	}
	// 	requestAnimationFrame(self.draw);
	// }

	// this.draw1 = function() {

	// 	self.warrior1 = new PIXI.extras.AnimatedSprite(this.textureArrayRight);
	// 	self.container.addChild(self.warrior1);
	// 	self.warrior1.animationSpeed = 0.4;
	// 	self.warrior1.play();

	// 	function step() {
	// 		self.warrior1.x += 1.5;
	// 		self.warrior1.y = 210;
	// 		if (self.warrior1.x===210) {			
	// 			self.warrior1.destroy();			
	// 			self.draw2();
	// 			return;
	// 		}
	// 		requestAnimationFrame(step);
	// 	}
	// 	step();		
	// }

	// this.draw2 = function() {
	// 	this.warrior2 = new PIXI.extras.AnimatedSprite(this.textureArrayDeath);
	// 	this.container.addChild(this.warrior2);
	// 	this.warrior2.y = 210;
	// 	this.warrior2.x = 210;
	// 	this.warrior2.animationSpeed = 0.4;
	// 	this.warrior2.play();
	// 	this.warrior2.loop = false;
	// }

	// this.draw();
};

