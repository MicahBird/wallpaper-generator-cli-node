#!/usr/bin/env node
import meow from 'meow';
import pkg from './lib/wallpaper-generator-cli.cjs';
const { draw } = pkg;

const cli = meow(`
	Usage
	  $ wallpaper-generator-cli -o PATH -t TYPE

	Options
	  --output, -o Path of output file (Ex: ./my-epic-wallpaper.png)
	  --type, -t  Type of image to generate (jpeg|svg|png)
	  --resolution, -r The resolution of the image in the format WIDTHxHEIGHT (Default: 1920x1080)
	  --embed, -e URL or Path of embed image (Ex: ./my-embed-image.jpeg|https://placekitten.com/g/500/500)
	  --embedPosition, -p Position of image in wallpaper (Default: lowerright; lowerright|upperleft)

	Examples
    # Generates a 1920x1080 wallpaper as a jpeg in ~/Pictures
	  $ wallpaper-generator-cli -t jpeg -o ~/Pictures/my-epic-wallpaper.jpeg

    # Generates a 1920x1080 wallpaper with a placeholder kitten embeded in the upper left
	  $ wallpaper-generator-cli -e https://placekitten.com/g/500/500 -p upperleft -t jpeg -o ~/Pictures/my-epic-embeded-wallpaper.jpeg

    # Generates a 4K wallpaper svg in the current directory 
	  $ wallpaper-generator-cli -s 3840x2160 -t svg -o ./my-epic-wallpaper.svg
`, {
	importMeta: import.meta,
	flags: {
		output: {
			type: 'string',
			alias: 'o',
			isRequired: 'true',
		},
		embed: {
			type: 'string',
			alias: 'e',
		},
		embedPosition: {
			type: 'string',
			alias: 'p',
            default: 'lowerright',
		},
		type: {
			type: 'string',
			alias: 't',
			isRequired: 'true',
		},
		resolution: {
			type: 'string',
			alias: 'r',
            default: '1920x1080',
		}
	}
});
draw(cli.flags);
