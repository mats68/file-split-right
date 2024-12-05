import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    // Register the command
    let disposable = vscode.commands.registerCommand('extension.openInSplitEditor', async () => {
        // Show quick pick for files in the current workspace
        const files = await vscode.workspace.findFiles('**/*', '**/node_modules/**');
        if (!files.length) {
            vscode.window.showInformationMessage('No files found in the current project.');
            return;
        }

        // Create a quick pick menu with file paths relative to the workspace
        const filePaths = files.map(file => vscode.workspace.asRelativePath(file));
        const selectedFile = await vscode.window.showQuickPick(filePaths, {
            placeHolder: 'Select a file to open in split editor',
        });

        if (!selectedFile) {
            vscode.window.showInformationMessage('No file selected.');
            return;
        }

        // Find the URI of the selected file
        const fileUri = files.find(file => vscode.workspace.asRelativePath(file) === selectedFile);

        if (!fileUri) {
            vscode.window.showErrorMessage('Could not resolve file URI.');
            return;
        }

        // Open the selected file in the editor
        try {
            const document = await vscode.workspace.openTextDocument(fileUri);
            await vscode.window.showTextDocument(document, { viewColumn: vscode.ViewColumn.One });

            // Move the editor to the next group
            await vscode.commands.executeCommand('workbench.action.moveEditorToNextGroup');
        } catch (error) {
            vscode.window.showErrorMessage('Error opening the file');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}
