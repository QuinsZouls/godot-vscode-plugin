import { ExtensionContext } from "vscode";
import { GodotTools } from "./godot-tools";
import * as vscode from "vscode";
import debuggerContext = require("./debugger/debugger_context");

let tools: GodotTools = null;

export function activate(context: ExtensionContext) {
	tools = new GodotTools(context);
	tools.activate();
	debuggerContext.register_debugger(context);
}

export function deactivate(): Thenable<void> {
	return new Promise<void>((resolve, reject) => {
		tools.deactivate();
		resolve();
	});
}
