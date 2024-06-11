// declare constants
const OptionRemoveSidebar = "removeSidebar";
const OptionFloatingTOC = "floatingTOC";

const MainColumnSelector = ".column.is-8-desktop";
const MainColumnCssClass = "rf-ms-learn-main-column";

const SidebarColumnSelector = "div#ms--additional-resources";

const DocOutlineSelector = "#center-doc-outline";
const FloatingTOCCssClass = "rf-ms-learn-floating-toc";

async function getOptions() {
    const current = await chrome.storage.sync.get();
    return {
        removeSidebar: current[OptionRemoveSidebar] ?? true,
        floatingTOC: current[OptionFloatingTOC] ?? false,
    };
}

// async function loadConfig(id, defaultValue) {
//     return await chrome.storage.sync.get([id]) || defaultValue;
// }
//
// async function shouldRemoveSidebar() {
//     return await loadConfig(RemoveSidebar, true);
// }
//
// async function shouldFloatTOC() {
//     return await loadConfig(FloatingTOC, false);
// }