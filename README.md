# wallpaper-generator-cli
A command line implementation of [roytanck's wallpaper generator](https://github.com/roytanck/wallpaper-generator). _[Generate a new wallpaper every time you login to your computer!](#generating-a-new-wallpaper-on-login)_
### Examples:
| SVG                                | PNG                                | JPEG                                 |
|------------------------------------|------------------------------------|--------------------------------------|
| ![svg example](assets/example.svg) | ![png example](assets/example.png) | ![jpeg example](assets/example.jpeg) |

## Installation
To install `wallpaper-generator-cli` with npm, run the following command from any directory:
```bash
npx wallpaper-generator-cli
```

## Usage
Similar to other node cli tools, you must prefix the following commands with `npx`, so a full command would look like:
`$ npx wallpaper-generator-cli -s 3840x2160 -t svg -o ./my-epic-wallpaper.svg`
```
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
```
## Generating a New Wallpaper on Login 
### Linux
`wallpaper-generator-cli` is also useful to generate a new wallpaper when you login to your computer! Simply add the following .desktop entry to `~/.config/autostart`
```
[Desktop Entry]
Exec=sh -c "npx wallpaper-generator-cli -t svg -o ~/.local/share/wallpapers/generated-wallpaper.svg"
Icon=dialog-scripts
Name=login-wallpaper-gen
Path=
Type=Application
```
Then, simply add this .desktop entry to your startup applications (this depends on your desktop environment), and set the wallpaper to be generated-wallpaper.svg, and profit!

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Credits

**HUGE** thanks to [roytanck](https://github.com/roytanck) for the original program, this project would not have been possible without it!
Thanks to [Automattic](https://github.com/Automattic/node-canvas) for a local JS canvas!

## License
Similar to [roytanck's wallpaper generator](https://github.com/roytanck/wallpaper-generator), this project is distributed under the GPL-3.0 licence. See `LICENSE` for more information.
