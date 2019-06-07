(function() {
  'use strict';

  window._ = {};

  _.identity = function(val) {
    return val;
  };

  _.first = function(array, n) {
    return n === undefined ? array[0] : array.slice(0, n);
  };

  _.last = function(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else if (n <= array.length) {
      return array.slice(array.length - n, array.length);
    } else if (n > array.length) {
      return array;
    }
  };

  _.each = function(collection, iterator) {
    if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
        iterator(collection[i], i, collection);
      }
    } else {
      for (var key in collection) {
        iterator(collection[key], key, collection);
      }
    }
  };

  _.indexOf = function(array, target){
    var result = -1;

    _.each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });

    return result;
  };

  _.filter = function(collection, test) {
    var passed = [];

    _.each(collection, function(item) {
      if (test(item)) {
        passed.push(item)
      }
    });

    return passed;
  };

  _.reject = function(collection, test) {
    return _.filter(collection, function(item) {
      if (!test(item)) {
        return item;
      }
    });
  };

  _.uniq = function(array, isSorted, iterator) {
    var output = [];
    var changed = [];

    if (isSorted) {
      _.each(array, function(item) {
        if (!changed.includes(iterator(item))) {
          changed.push(iterator(item));
          output.push(item);
        }
      });
    } else {
      _.each(array, function(item) {
        if (!output.includes(item)) {
          output.push(item);
        }
      });
    }

    return output;
  };

  _.map = function(collection, iterator) {
    var output = [];

    _.each(collection, function(item) {
      output.push(iterator(item));
    });

    return output;
  };

  _.pluck = function(collection, key) {
    return _.map(collection, function(item){
      return item[key];
    });
  };

  _.reduce = function(collection, iterator, accumulator) {
    var noAccumulator = arguments.length < 3;

    _.each(collection, function(item) {
      if (noAccumulator) {
        accumulator = item;
        noAccumulator = false;
      } else {
        accumulator = iterator(accumulator, item);
      }
    });

    return accumulator;
  };

  _.contains = function(collection, target) {
    return _.reduce(collection, function(wasFound, item) {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };


  _.every = function(collection, iterator) {
    var iterator = iterator || _.identity;

    return _.reduce(collection, function(a, b) {
      if (!iterator(b)) {
        return false;
      }
      return a;
    }, true);
  };

  _.some = function(collection, iterator) {
    var iterator = iterator || _.identity;

    return _.reduce(collection, function(a, b) {
      if (iterator(b)) {
        return true;
      }
      return a;
    }, false);
  };

  _.extend = function(obj) {
    _.each(arguments, function(innerObj) {
      _.each(innerObj, function(prop, key) {
        obj[key] = prop;
      });
    });

    return obj;
  };

  _.defaults = function(obj) {
    _.each(arguments, function(innerObj) {
      _.each(innerObj, function(prop, key) {
        if (obj[key] === undefined) {
          obj[key] = prop;
        }
      });
    });

    return obj;
  };

  _.once = function(func) {
    var alreadyCalled = false;
    var result;

    return function() {
      if (!alreadyCalled) {
        result = func.apply(this, arguments);
        alreadyCalled = true;
      }
      return result;
    };
  };

  _.memoize = function(func) {
    var output = {};

    return function() {
      var parameter = JSON.stringify(arguments);
      if(!output.hasOwnProperty(parameter)) {
        output[parameter] = func.apply(this, arguments)
      }
      return output[parameter];
    }
  };

  _.delay = function(func, wait, a, b) {
    return setTimeout(function() {
      func(a, b);
    }, wait)
  };

  _.shuffle = function(array) {
    var shuffledArray = array.slice();

    for (var i = array.length - 1; i >= 0; i--) {
      var randomIndex = Math.floor(Math.random() * (i + 1));
      var randomItem = shuffledArray[randomIndex];

      shuffledArray[randomIndex] = shuffledArray[i];
      shuffledArray[i] = randomItem;
    }

    return shuffledArray;
  };


  /**
   * ADVANCED
   * =================
   *
   * Note: This is the end of the pre-course curriculum. Feel free to continue,
   * but nothing beyond here is required.
   */

  // Calls the method named by functionOrKey on each value in the list.
  // Note: You will need to learn a bit about .apply to complete this.
  _.invoke = function(collection, functionOrKey, args) {
  };

  // Sort the object's values by a criterion produced by an iterator.
  // If iterator is a string, sort objects by that property with the name
  // of that string. For example, _.sortBy(people, 'name') should sort
  // an array of people by their name.
  _.sortBy = function(collection, iterator) {
  };

  // Zip together two or more arrays with elements of the same index
  // going together.
  //
  // Example:
  // _.zip(['a','b','c','d'], [1,2,3]) returns [['a',1], ['b',2], ['c',3], ['d',undefined]]
  _.zip = function() {
  };

  // Takes a multidimensional array and converts it to a one-dimensional array.
  // The new array should contain all elements of the multidimensional array.
  //
  // Hint: Use Array.isArray to check if something is an array
  _.flatten = function(nestedArray, result) {
  };

  // Takes an arbitrary number of arrays and produces an array that contains
  // every item shared between all the passed-in arrays.
  _.intersection = function() {
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
  };

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time.  See the Underbar readme for extra details
  // on this function.
  //
  // Note: This is difficult! It may take a while to implement.
  _.throttle = function(func, wait) {
  };
}());
