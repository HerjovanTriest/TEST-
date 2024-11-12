module.exports = {
    hooks: {
        "page:before": function(page) {
            // Adds a simple message at the top of each page
            page.content = "# Welcome to My GitBook\n" + page.content;
            return page;
        }
    }
};
