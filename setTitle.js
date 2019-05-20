getCurrentPage();
getPageTitleFromHeading();
setDocumentTitle();

function getCurrentPage() {
    var sPath = window.location.pathname;
    var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
    return sPage;
}

function getPageTitleFromHeading() {
    var headings = ['h1', 'h2', 'h3'];
    var firstHeading;
    var titleText = '';

    for (i = 0; i < headings.length; i++) {
        heading = headings[i];
        firstHeading = document.getElementsByTagName(heading)[0];
        if (firstHeading != undefined) {
            titleText = firstHeading.innerHTML;
            return titleText;
        }
    }
}

function setDocumentTitle() {
    var currentTitle = document.title;
    var assumedTitle = getPageTitleFromHeading();
    if (currentTitle == assumedTitle) {
        document.title += ' | Home'
    } else {
        if (getCurrentPage != undefined) {
            document.title += ' | '+assumedTitle;
        }
    }
}
