
// chrome.history.search({text: '', maxResults: 10}, function(data) {
//    data.forEach(function(page) {
//        console.log(page.url);
//    });
//});

function onAnchorClick(event) {
  chrome.tabs.create({ url: event.srcElement.href });
  return false;
}

// Given an array of URLs, build a DOM list of these URLs in the
// browser action popup.
function buildPopupDom(mostVisitedURLs) {
  var popupDiv = document.getElementById('mostVisited_div');
  var ol = popupDiv.appendChild(document.createElement('ol'));

  for (var i = 0; i < mostVisitedURLs.length; i++) {
    var li = ol.appendChild(document.createElement('li'));
    li.href = mostVisitedURLs[i].url;
    li.appendChild(document.createTextNode(mostVisitedURLs[i].title));
    li.addEventListener('click', onAnchorClick);
  }
}

chrome.topSites.get(buildPopupDom);

//chrome.history.addUrl(object details, function callback)
chrome.history.addUrl("historique", function {
  
})