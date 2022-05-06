import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "super-test" is now active!');

	let disposable = vscode.commands.registerCommand('super-test.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from super-test!');
	});

	let count: number = 0;

	let plus = vscode.commands.registerCommand('super-test.plus', () => {
		vscode.window.showInformationMessage('counter: ' + count);
		count++;
	});

	let minus = vscode.commands.registerCommand('super-test.minus', () => {
		vscode.window.showInformationMessage('counter: ' + count);
		count--;
	});

	context.subscriptions.push(disposable);
	context.subscriptions.push(plus)
	context.subscriptions.push(minus)
}

export function deactivate() {}
