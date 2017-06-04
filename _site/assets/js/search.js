// Depends on Swiftype jQuery plugin
// https://github.com/swiftype/swiftype-search-jquery

var swiftypeSearch = function(config) {

  var customRenderFunction = function(document_type, item) {
    var body = item.highlight['body'] || item['body'].substring(0, 300);
    var title = item['title'].substring(0, 300);

    var result = $('<div>', {'class': "result-item"});
    result.append($('<h3>', {'class': 'title'}).append($('<a>', {'href': item['url'], 'target': '_blank'}).html(title)));
    result.append($('<p>', {'class': 'body'}).html(body));
    return result;
  };

  var customPostRenderFunction = function(data) {
    var totalResultCount = 0;
    var $resultContainer = this.getContext().resultContainer;
    var $resultCount = $(".results-count");
    var info = data.info && data.info.page;

    if (info) {
      totalResultCount = info.total_result_count;
    }

    if (totalResultCount === 0) {
      $resultContainer.html("<div id='st-no-results' class='st-no-results'>No results found.</div>");
    }else{
      var resultFrom = Math.min(totalResultCount, (info.current_page -1) * info.per_page + 1);
      var resultTo = Math.min(totalResultCount, resultFrom + info.per_page);

      $resultCount.html("Results " + resultFrom + "-" + resultTo + " of " + totalResultCount);
    }
  };

  var customLoadingFunction = function(query, $resultContainer) {
    $('.search-query').text(query);
    $(".results-count").html('');
    $resultContainer.html('<p class="st-loading-message">Loading...</p>');
  };

  var customRenderResultsFunction = function (ctx, data) {
    var $items = $('<div>', {'class': 'items'});

    var $resultContainer = ctx.resultContainer,
      config = ctx.config;

    $resultContainer.html('');

    $.each(data.records, function (documentType, items) {
      $.each(items, function (idx, item) {
        ctx.registerResult($(config.renderFunction(documentType, item)).appendTo($items), item);
      });
    });

    $resultContainer.append($items);
    renderPagination(ctx, data.info);
  };

  var renderPagination = function (ctx, resultInfo) {
    var maxPagesType, maxPages = -1;
    $.each(resultInfo, function(documentType, typeInfo) {
      if (typeInfo.num_pages > maxPages) {
        maxPagesType = documentType;
        maxPages = typeInfo.num_pages;
      }
    });
    var currentPage = resultInfo[maxPagesType].current_page,
      totalPages = resultInfo[maxPagesType].num_pages;
      if (totalPages > 1) {
        $(renderPaginationForType(maxPagesType, currentPage, totalPages)).appendTo(ctx.resultContainer);
      }
  };

  var renderPaginationForType = function (type, currentPage, totalPages) {
    var previousPage = currentPage - 1;
    var nextPage = currentPage + 1;
    var pager = $('<ul>', {'class': 'pager'});

    $(pager).pagination({
        items: totalPages,
        currentPage: currentPage,
        displayedPages: 6,
        prevText: 'Prev',
        nextText: 'Next',
        cssStyle: ''
    });

    return pager;
  };

  $(config.searchHolder).swiftypeSearch({
    resultContainingElement: config.resultsHolder,
    engineKey: config.apiKey,
    renderFunction: customRenderFunction,
    postRenderFunction: customPostRenderFunction,
    renderResultsFunction: customRenderResultsFunction,
    loadingFunction: customLoadingFunction,
  });
};
