chrome.runtime.onInstalled.addListener(() => {
	chrome.contextMenus.create({
		id: "explainText",
		title: "Explain text",
		contexts: ["selection"]
	});

	chrome.contextMenus.create({
		id: "rephraseText",
		title: "Rephrase text",
		contexts: ["selection"]
	});
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
	if (info.menuItemId === "explainText" || info.menuItemId === "rephraseText") {
		chrome.tabs.sendMessage(tab.id, {
			action: info.menuItemId,
			text: info.selectionText
		});
	}
});
