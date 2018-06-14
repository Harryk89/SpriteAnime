window.onload = function() {

	let webGL=true;
	let width = document.documentElement.clientWidth;
	let height = document.documentElement.clientHeight;
	let app = new PIXI.Application(width, height);	
	document.body.appendChild(app.view);
	app.renderer.autoResize = true;

	app.renderer.resize(width, height);

	let frames;
	let frames2;
	let frames3;
	let anim;

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

	    frames = [];
	    for (let i = 0; i < 25; i++) {
	        let val = i < 10 ? '0' + i : i;
	        frames.push(PIXI.Texture.fromFrame('sniper_move_cam_180/sniper_move_cam_180_000' + val + '.png'));
	    }

		frames2 = [];
	    for (let i = 0; i < 25; i++) {
	        let val = i < 10 ? '0' + i : i;
	        frames2.push(PIXI.Texture.fromFrame('sniper_move_cam_270/sniper_move_cam_270_000' + val + '.png'));
	    }

	    frames3 = [];
	    for (let i = 0; i < 20; i++) {
	        let val = i < 10 ? '0' + i : i;
	        frames3.push(PIXI.Texture.fromFrame('sniper_death/sniper_death_000' + val + '.png'));
	    }

	    anim = new PIXI.extras.AnimatedSprite(frames);
	    anim.animationSpeed = 0.5;

	    app.stage.addChild(anim);
 	}


	let rightPressed,
		downPressed,
		upPressed,
		leftPressed;

	document.onkeydown = function(e) {

	    if(e.keyCode === 39) {
	        rightPressed = true;
	        anim.textures = frames2;
	        anim.play();
	    }
	    else if(e.keyCode === 40) {
	        downPressed = true;
	        anim.textures = frames;
	        anim.play();
	    }
	    else if(e.keyCode === 38) {
	        upPressed = true;
	        anim.textures = frames;
	        anim.play();
	    }
	    else if(e.keyCode === 37) {
	        leftPressed = true;
	        anim.textures = frames2;
	        anim.play();
	    }
	}

	document.onkeyup = function(e) {
	    if(e.keyCode === 39 ) {
	        rightPressed = false;
	        anim.stop();        
	    }
	    else if(e.keyCode === 40) {
	        downPressed = false;
	        anim.stop();
	    }
	    else if(e.keyCode === 38) {
	        upPressed = false;
	        anim.stop();
	    }
	    else if(e.keyCode === 37) {
	        leftPressed = false;
	        anim.stop();
	    }
	    else if(e.keyCode === 32) {
	        anim.textures = frames3;
	        anim.gotoAndPlay(0);
	        anim.loop = false;
	    }
	}

	let draw = () => {
		if(rightPressed) {
    		anim.x += 1;		
		}
		else if(downPressed) {
		    anim.y += 1;
		}
		else if(upPressed) {
			anim.y -= 1;
		}
		else if(leftPressed) {
    		anim.x -= 1;
		}

		requestAnimationFrame(draw);
	}	

	draw();

};

