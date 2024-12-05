# Open in Split Editor Extension

A Visual Studio Code extension that allows you to quickly open a file from your project and move it to the next editor group for efficient multitasking.

## Features

- **Project-Scoped File Picker**: Select files only within your current project (excluding `node_modules` and other ignored files).
- **Split Editor Integration**: Automatically move the selected file to the next editor group using `workbench.action.moveEditorToNextGroup`.
- **Quick Command Access**: Easily access the functionality through the command palette.

---

## How to Use

1. Open the **Command Palette** (`Ctrl+Shift+P` or `Cmd+Shift+P`).
2. Search for and select **"Open in Split Editor"**.
3. A list of files in your project will appear (excluding `node_modules` and ignored files).
4. Select a file from the list.
5. The file will open in the editor and automatically move to the next editor group.

---

## Requirements

- Visual Studio Code version `^1.80.0` or higher.

---

## Installation

1. **From the Marketplace**:
   - (Add this once your extension is published)

2. **Manual Installation**:
   - Download the `.vsix` file from the release page or build it yourself using `vsce package`.
   - Open VS Code, go to the Extensions view (`Ctrl+Shift+X`).
   - Click the menu button (three dots in the top-right corner) and select **Install from VSIX...**.
   - Select the downloaded `.vsix` file.

---

## Known Issues

- Files outside the workspace cannot be accessed (intended behavior).
- No filtering for specific file types (future enhancement).

---

## Release Notes

### 1.0.0

- Initial release of **Open in Split Editor**:
  - Added file selection limited to the project.
  - Implemented split editor functionality.

---

## Contributing

If you'd like to contribute, feel free to open a pull request or issue in the GitHub repository.

## License

This extension is licensed under the [MIT License](LICENSE).
