#!/usr/bin/env node
import meow from 'meow';
import pkg from './lib/wallpaper-generator-cli.cjs';
const { draw } = pkg;

const cli = meow(`
	Usage
	  $ wallpaper-generator-cli -o PATH -t TYPE

	Options
	  --output, -o The path of the file output (Ex: ./my-epic-wallpaper.png)
	  --type, -t  Type of image to generate (jpeg|svg|png)
	  --resolution, -r The resolution of the image in the format WIDTHxHEIGHT (Default: 1920x1080)

	Examples
    # Generates a 1920x1080 wallpaper as a jpeg in ~/Pictures
	  $ wallpaper-generator-cli -t jpeg -o ~/Pictures/my-epic-wallpaper.jpeg

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
