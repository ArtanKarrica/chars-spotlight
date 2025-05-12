# CharSpotlight

**Hidden Characters Viewer for Edge & Chrome**

CharSpotlight helps you visualize, remove, and copy hidden or non-printable characters in any text. Easily spot tabs, spaces, line feeds, carriage returns, and more.

---

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)

   * [Load as Unpacked Extension](#load-as-unpacked-extension)
3. [Usage](#usage)
4. [Development](#development)
5. [Contributing](#contributing)
6. [License](#license)

---

## Features

* **Show hidden characters**: Highlights spaces, tabs (→), LF, CR, and non-printable codepoints with distinct colors and tooltips.
* **Remove non-printable**: Strip out all control or extended characters, leaving only printable ASCII.
* **Copy to clipboard**: Copy your cleaned or original text in one click.
* **Clear input/output**: Reset the form quickly.
* **Cross-browser**: Works in Microsoft Edge and Chrome (Manifest V3).

---

## Installation

### Prerequisites

* Microsoft Edge or Google Chrome (version supporting Manifest V3)

### Load as Unpacked Extension

1. Clone or download this repository.
2. Open your browser’s extensions page:

   * **Edge**: `edge://extensions`
   * **Chrome**: `chrome://extensions`
3. Enable **Developer mode** (toggle in top right).
4. Click **Load unpacked** and select the folder containing:

   * `manifest.json`
   * `popup.html`
   * `popup.js`
   * `icons/` (with `icon16.png`, `icon48.png`, `icon128.png`)

The CharSpotlight icon should now appear in your toolbar.

---

## Usage

1. Click the CharSpotlight icon to open the popup.
2. Paste or type your text into the textarea.
3. Use the buttons:

   * **Show**: Highlight hidden characters inline.
   * **Remove**: Strip all non-printable characters from the text.
   * **Copy**: Copy the current textarea content to clipboard.
   * **Clear**: Reset both input and output.
4. Hover over any highlighted character to see its Unicode codepoint and description.

---

## Development

1. **Edit files** in the root directory:

   * `manifest.json` (metadata & permissions)
   * `popup.html`  (UI markup & styles)
   * `popup.js`    (logic & event wiring)
2. **Reload** the extension in Developer mode to see changes immediately.
3. Optional: Extract CSS to `popup.css` or add background scripts for context-menu integration.

---

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests:

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature/YourIdea`).
3. Commit your changes (`git commit -m "Add some feature"`).
4. Push to the branch (`git push origin feature/YourIdea`).
5. Open a pull request.

Please ensure code is clean and commented. Thanks for improving CharSpotlight!

---

## License

This project is licensed under the [MIT License](LICENSE).
