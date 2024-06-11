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