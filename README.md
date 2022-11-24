# wallpaper-generator-cli
A command line implementation of [roytanck's wallpaper generator](https://github.com/roytanck/wallpaper-generator). 
### Examples:
| SVG                                | PNG                                | JPEG                                 |
|------------------------------------+------------------------------------+--------------------------------------|
| ![svg example](assets/example.svg) | ![png example](assets/example.png) | ![jpeg example](assets/example.jpeg) |

## Installation

## Usage
```
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
```

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- LICENSE -->
## License
Similar to [roytanck's wallpaper generator](https://github.com/roytanck/wallpaper-generator), this project is distributed under the GPL-3.0 licence. See `LICENSE` for more information.
