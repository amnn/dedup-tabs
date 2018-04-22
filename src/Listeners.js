function deduplicateTab(tab) {
  return browser.storage.sync
    .get("patterns")
    .then((kvps) => {
      for (pattern of kvps["patterns"]) {
        if (tab.url.search(pattern) !== -1) {
          return browser.tabs
            .query({windowId: tab.windowId, url: tab.url})
            .then((similarTabs) => browser.tabs.remove(
              similarTabs.map((t) => t.id).filter((id) => id !== tab.id)));
        }
      }

      return Promise.resolve();
    });

}

browser.tabs.onAttached.addListener((id, attachInfo) => {
  browser.tabs.query({
    windowId: attachInfo.newWindowId,
    index: attachInfo.newPosition
  }).then((attached) => {
    return deduplicateTab(attached[0]);
  })
});

browser.tabs.onUpdated.addListener((tabid, changeInfo, tab) => {
  if (changeInfo.url) {
    deduplicateTab(tab);
  }
});
