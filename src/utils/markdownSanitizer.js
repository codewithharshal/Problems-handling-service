const marked = require("marked");
const sanitizeHtmlLibrary = require("sanitize-html");
const TurndownService = require("turndown");

function sanitizeMarkdownContent(markdownContent) {
  const turnDownService = new TurndownService();

  // 1. Convert markdown to html
  const convertedHTML = marked.parse(markdownContent);

  // 2. Sanitize html
  const sanitizeHTML = sanitizeHtmlLibrary(convertedHTML, {
    allowedTags: sanitizeHtmlLibrary.defaults.allowedTags,
  });

  //   3. convert the sanitized html back to markdown
  const sanitizedMarkdown = turnDownService.turndown(sanitizeHTML);

  return sanitizedMarkdown;
}

module.exports = sanitizeMarkdownContent;
