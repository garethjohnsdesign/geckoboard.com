(function () {
  function Service(attr) {
    _.extend(this, attr);
  }

  Service.prototype.startsWith = function (letter) {
    return this.name.charAt(0).toLowerCase() === letter.toLowerCase();
  };

  Service.prototype.nameContains = function (text) {
    return _.contains(this.name.toLowerCase(), text.toLowerCase());
  };

  Service.prototype.hasCategory = function (slug) {
    return _.any(this.categories, function (category) {
      return category.slug === slug;
    });
  };

  function ServiceCollection(allServices) {
    var nameFilter = null,
        categoryFilter = null,
        alphabetFilter = null,
        filtered = null; // Holds a cached copy of the filtered results

    this.resultSet = function () {
      return filtered ? filtered : allServices;
    };

    this.resetFilter = function () {
      nameFilter = categoryFilter = alphabetFilter = null;
    };

    this.filterByName = function (name) {
      nameFilter = _.isEmpty(name) ? null : name;
      filterResultSet();
    };

    this.filterByAlphabet = function (letter) {
      alphabetFilter = _.isEmpty(letter) ? null : letter;
      filterResultSet();
    };

    this.filterByCategory = function (slug) {
      categoryFilter = _.isEmpty(slug) ? null : slug;
      filterResultSet();
    };

    function filterResultSet() {
      if (nameFilter === null && categoryFilter === null && alphabetFilter === null) {
        filtered = null;
      } else {
        filtered = _.filter(allServices, matchesFilters);
      }
    }

    function matchesFilters(service) {
      if (nameFilter !== null && !service.nameContains(nameFilter)) {
        return false;
      }

      if (alphabetFilter !== null && !service.startsWith(alphabetFilter)) {
        return false;
      }

      if (categoryFilter !== null && !service.hasCategory(categoryFilter)) {
        return false;
      }

      return true;
    }
  }

  function ServiceDirectory(selector, collection) {
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split(''),
        widgetRowTemplate = _.template($('#widget-row-template').text()),
        serviceTemplate   = _.template($('#service-template').text()),
        maxWidth = 640,
        that = this;

    this.$el = $(selector);
    this.collection = collection;

    this.render = function () {
      var results = this.collection.resultSet(),
          i = 0,
          rows;

      if (results.length === 0) {
        this.$el.html("<h1>Nothing Found</h1>");
        return;
      }

      rows = _.map(alphabet, function (letter) {
        var $row = $(widgetRowTemplate({ letter: letter })),
            $widgetList = $row.find('.widget-list'),
            start = i;

        while (i < results.length) {
          var service = results[i];

          // NOTE: This assumes all services are sorted alphabetically
          if (!service.startsWith(letter)) {
            break;
          }

          $widgetList.append(serviceTemplate(service));
          i++;
        }

        // Only return a fully-fledged row if it contains any services that start with that letter,
        // otherwise return an anchor link so the quick navigation bar at the top still works
        if (i - start > 0) {
          return $row;
        } else {
          return $('<span>', { id: letter });
        }
      }, this);

      this.$el.html(rows);
      $('html, body').scrollTop(
        $('.page-head').outerHeight() + $('.hero-container').outerHeight() 
      );
    };

    // fixedsticky is buggy on iPhone - don't use it for small (mobile) window widths
    if ($(window).width() > maxWidth) {
      $('.widget-nav-bar').fixedsticky();
    }

    // prevent submission of widget search form - we are using search-as-you-type with keyup
    $('.widget-search').on('submit', function (e) {
      e.preventDefault();
    }).on('keyup', 'input[name="search"]', function (e) {
      var query = $(e.target).val();
      resetElements(false);
      that.collection.resetFilter();
      that.collection.filterByName(query);
      that.render();
    });

    $('.alphabet-search a').on('click', function (e) {
      var $target = $(e.target),
          letter = $target.data('letter');
      e.preventDefault();
      resetElements(true);
      $target.addClass('selected');
      that.collection.resetFilter();
      that.collection.filterByAlphabet(letter);
      that.render();
    });

    $('.widget-filter a').on('click', function (e) {
      var $menu = $('.widget-filter'),
          $target = $(e.target);

      e.preventDefault();
      e.stopPropagation();

      $menu.toggleClass('open');

      if ($menu.hasClass('open')) {
        $(document.body).one('click', function (e) {
          $menu.removeClass('open');
        });
      } else {
        resetElements(true);
        $('.widget-filter li').removeClass('selected');
        $target.parent('li').addClass('selected');
        $('.widget-search input[name="search"]').val('');
        that.collection.resetFilter();
        that.collection.filterByCategory($target.data('slug'));
        that.render();
      }
    });

    function resetElements(resetSearch) {
      if (resetSearch) {
        $('.widget-search input[name="search"]').val('');
      }
      $('.alphabet-search a').removeClass('selected');
      $('.widget-filter li')
        .removeClass('selected')
        .first()
        .addClass('selected');
    }
  }

  function findAllServices() {
    var elems = $('.service');

    return _.map(elems, function (elem) {
      var $elem = $(elem),
          $categories = $elem.find('.categories > li');

      return new Service({
        categories: extractCategories($categories),
        name: $elem.data('serviceName'),
        logo: $elem.find('img').attr('src'),
        url:  $elem.find('a').attr('href')
      });
    });
  }

  function extractCategories(categories) {
    return _.map(categories, function (li) {
      var $li = $(li);
      return {
        value: $li.text(),
        slug:  $li.data('slug')
      };
    });
  }

  $(function () {
    var services  = new ServiceCollection(findAllServices()),
        directory = new ServiceDirectory('#service-directory', services);
  });
})();
