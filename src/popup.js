async function initHandler(id, value) {
    document.getElementById(id).checked = value;
    document.getElementById(id).addEventListener("click", function () {

        //Use the right browser object based on the browser
        //Firefox uses the browser object while Chrome uses chrome object
        var browser = (window.browser)? window.browser : window.chrome;
        
        const currentValue = document.getElementById(id).checked;
        console.log(id + " -> " + currentValue);
        browser.storage.sync.set({[id]: currentValue});

        browser.tabs.reload();
    });
    
}

async function init() {
    const options = await getOptions();
    await initHandler(OptionRemoveSidebar, options.removeSidebar);
    await initHandler(OptionFloatingTOC, options.floatingTOC);
}

init();