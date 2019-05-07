function doGet(e) {
  const content = UrlFetchApp
    .fetch('https://www.google.com/')
  Logger.log(content)
  return ContentService.createTextOutput(content);
}
