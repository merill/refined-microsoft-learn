async function initHandler(id, value) {
    document.getElementById(id).checked = value;
    document.getElementById(id).addEventListener("click", function () {
        const currentValue = document.getElementById(id).checked;
        console.log(id + " -> " + currentValue);
        chrome.storage.sync.set({[id]: currentValue});
    });
}


async function init() {
    const options = await getOptions();
    await initHandler(OptionRemoveSidebar, options.removeSidebar);
    await initHandler(OptionFloatingTOC, options.floatingTOC);
}

init();

// add "refresh" button to popup
document.getElementById("refresh").addEventListener("click", function () {
    chrome.tabs.reload();
});