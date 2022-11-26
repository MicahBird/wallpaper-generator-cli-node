#!/usr/bin/env node
/**
 * Generate a set of randomized values to create a wallpaper from.
 */
function generateValues( width ){
	// line segments (either few, or fluent lines (200))
	const segments = ( Math.random() < 0.5 ) ? 1 + Math.floor( 9 * Math.random() ) : 200;
	// wavelength
	const wl = width / ( 5 + ( 15 * Math.random() ) );

	// other random values
	return {
		segments,
		wl,
		layers: 3 + Math.floor( 10 * Math.random() ),
		hueStart: 360 * Math.random(),
		hueIncrement: 20 - ( 40 * ( Math.random() ) ),
		ampl: ( 0.1 * wl ) + ( 0.9 * wl ) * Math.random(),
		offset: width * Math.random(),
		offsetIncrement: width / 20 + ( width / 10 ) * Math.random(),
		sat: 15 + ( 35 * Math.random() ),
		light: 15 + ( 45 * Math.random() ),
		lightIncrement: ( Math.random() < 0.5 ) ? ( 2 + ( 4 * Math.random() ) ) : -( 2 + ( 4 * Math.random() ) )
	};
}

function draw(flags){
    const fs = require('fs')
    const { createCanvas } = require('canvas');

    // Parse cli for resolution
    const res = flags.resolution.split("x")
    const width = parseInt(res[0]);
    const height = parseInt(res[1]);

    const canvas = createCanvas(width, height, flags.type)
	const ctx = canvas.getContext( '2d' );

	const values = generateValues( width );
	const {
		segments,
		layers,
		hueStart,
		hueIncrement,
		wl,
		ampl,
		offset,
		offsetIncrement,
		sat,
		light,
		lightIncrement
	} = values;

	// background
	ctx.fillStyle = 'hsl( ' + hueStart + ', ' + sat + '%, ' + light + '% )';
	ctx.fillRect( 0, 0, width, height );
	
	// draw the layers
	for( let l=0; l<layers; l++ ){
		let h = hueStart + ( (l+1) * hueIncrement );
		let s = sat;
		let v = light + ( (l+1) * lightIncrement );
		ctx.fillStyle = 'hsl( ' + h + ', ' + s + '%, ' + v + '% )';
		ctx.beginPath();
		let layerOffset = offset + ( offsetIncrement * l );
		let offsetY = ( (l+0.5) * ( height / layers ) );
		let startY = offsetY + ( ampl * Math.sin( layerOffset / wl ) );
		ctx.moveTo( 0, startY );
		for( let i=0; i<=segments; i++ ){
			let x = i * ( width / segments );
			ctx.lineTo( x , startY + ( ampl * Math.sin( ( layerOffset + x ) / wl ) ) );
		}
		ctx.lineTo( width, height );
		ctx.lineTo( 0, height );
		ctx.lineTo( 0, startY );
		ctx.fill();
	}

    if (flags.embed){
        const { loadImage } = require('canvas')
        loadImage(flags.embed).then((image) => {
          // Check embedPosition
          if (flags.embedPosition == "lowerright") {
              ctx.drawImage(image, (width - image.width), (height - image.height));
          } else if (flags.embedPosition == "upperleft") {
              ctx.drawImage(image, 0, 0);
          } else {
              console.log(flags.embed + ": Is an invalid embed position, please use lowerright or upperleft.")
          }
          // Write image to output location
          fs.writeFileSync(flags.output, canvas.toBuffer());
        }).catch(err => {
          console.log('An error has orrured when embeding the image:', err)
        })
    } else {
        // If no embed spesified, then write image
        fs.writeFileSync(flags.output, canvas.toBuffer())
    }
}

module.exports = { draw };
