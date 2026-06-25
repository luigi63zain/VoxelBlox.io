chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.create({
    url: "https://luigi63zain.github.io/VoxelBlox.io/"
  });
});