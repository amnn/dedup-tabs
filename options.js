browser.storage.sync
  .get("patterns")
  .then((kvps) => {
    patterns = kvps["patterns"] || [];
    patterns.push("example\\.com");
    return browser.storage.sync.set({patterns: patterns});
  });
