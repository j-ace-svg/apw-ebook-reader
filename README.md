| **<h3>:warning:DISCLAIMER:warning:</h3><br> I no longer use Opera, Opera GX (the original browser I used when I made this), or Windows (I now use GNU/Linux, where Opera GX is not supported without some [very major hacks](https://www.reddit.com/r/operabrowser/comments/kvtyei/comment/h4t17ji/)). I also don't use any chromium-based browsers in general (I use [qutebrowser](https://github.com/qutebrowser/qutebrowser/)) and I haven't had to use an online textbook from BFW Publishers since AP World, so I haven't tested this since I used it. Feel free to try it out and get it working (I may or may not merge pull requests), but I can garuntee nothing about functionality.** |
| --- |
# APWorld Ebook Reader
This is an Opera extension I put together a couple years ago to make the BFW Publishers ebook of the AP World History Strayer textbook actually usable. Theoretically, it should work with any BFW Publishers ebook and any chromium-based browser, but I have not tested it.

## Features

### Fix reading window
As of when I last used the ebook, the reading window was fixed - it was a reasonable size for a school chromebook (using almost the full screen) but was abysmal on desktop. The extension menu allows you to set a custom height (which should be auto-detected by default to maximize screen usage) and should persist between sessions.

### Custom dark mode
Applies a custom dark mode to make reading easier on the eyes (also applies to loading screens for textbook pages, preventing flashes of white). If the dark mode is broken, just comment out everything after `/* Customizations for the reader */` in docHeight.css.

### Reader loading improvements
Improves the loading screen between the chapter select and reader. I don't remember exactly what the improvements were, but they were something along the lines of removing or centering the loading circle/a pop-up. (A PR after someone compared with/without the extension and updating the README would most likely get merged).

## Installing

### Opera
Refer to the [official instructions](https://dev.opera.com/extensions/testing/) for testing extensions in Opera. In summary:

* Use git to clone this repository (`git clone https://github.com/j-ace-svg/apw-ebook-reader.git`) or download the zip file and extract it.
* Go to opera:extensions and enable Developer mode
* Click "Load Unpacked Extension..." and select the extension's folder

### Chrome (Untested)
Refer to the [official instructions](https://developer.chrome.com/docs/extensions/mv3/getstarted/development-basics/#load-unpacked) for loading unpacked extensions in Chrome.

* Use git to clone this repository (`git clone https://github.com/j-ace-svg/apw-ebook-reader.git`) or download the zip file and extract it.
* Go to chrome://extensions and enable Developer mode
* Click "Load unpacked" and select the extension's folder

**Note that this extension uses manifest v2, and Chrome has been replacing that with manifest v3 (at the moment it appears as though they are only blocking v2 apps from the store, without mention of sideloading, so use may still be possible). I have no intentions to upgrade this extension to manifest v3.**

### Brave (Untested)
There doesn't seem to be an official guide that I could find, but it follows the same as Opera and Chrome as per a [community thread](https://community.brave.com/t/debugging-custom-extension-add-ons/169217):

* Use git to clone this repository (`git clone https://github.com/j-ace-svg/apw-ebook-reader.git`) or download the zip file and extract it.
* Go to brave://extensions and enable Developer mode
* Click "Load unpacked" and select the extension's folder

### Firefox (Unsupported)
Firefox uses webextensions but is not chromium-based. See their list of [chrome incompatibilities](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Chrome_incompatibilities) to see what changes would be necessary in a firefox fork of this. If you make one, create an issue tagging me and I can list it here.

## License
The [GNU General Public License 3](https://www.gnu.org/licenses/gpl-3.0.en.html) (GPL 3) 2023 - [John Montgomery](https://github.com/j-ace-svg). Please have a look at [LICENSE](LICENSE) for more details.
