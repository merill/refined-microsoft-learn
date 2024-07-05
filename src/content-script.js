async function applyStyles() {
    const options = await getOptions();
    //console.log(options);

    if (options.removeSidebar) {
        // console.log("Removing sidebar");
        const mainColumn = document.querySelector(MainColumnSelector);
        const sidebar = document.querySelector(SidebarColumnSelector);

        if (sidebar) {
            sidebar.remove();
        }

        if (mainColumn) {
            mainColumn.classList.add(MainColumnCssClass);
        }
    }

    if (options.floatingTOC) {
        // console.log("Applying floating TOC");
        const toc = document.querySelector(DocOutlineSelector);
        if (toc) {
            toc.classList.add(FloatingTOCCssClass);
        }
    }

    const surveyPopOver = document.querySelector("#survey-popover");
    if (surveyPopOver) {
        surveyPopOver.remove();
    }
}

applyStyles();
