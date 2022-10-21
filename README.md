# Searchable UFO Sightings Webpage

## Overview of Project

### Purpose

The analyst created a webpage to track UFO sightings, which is filterable by several criteria: date of sighting, city, state, country, and shape of object. This webpage allows users to easily find UFO data by entering in their search parameters. The functionality is built in JavaScript, found [here](https://github.com/cbeckler/UFOs/blob/main/static/js/app.js) and formatted in HTML, found [here](https://github.com/cbeckler/UFOs/blob/main/index.html).

### Results

To perform a search, users enter text into the search parameter boxes, seen here with unfiltered data:

![unfiltered data](https://github.com/cbeckler/UFOs/blob/main/static/images/presearch.png)

For an example of a search, a user might enter "la mesa" into city and "triangle" into shape, returning these results:

![filtered data](https://github.com/cbeckler/UFOs/blob/main/static/images/search.png)

As demonstrated in the example, this search functionality can work with multiple parameters at once, though it is possible to have no results that fit all given parameters.

## Summary

### Drawbacks

One drawback of this search function is that it is case sensitive. Searching with the city properly capitalized, such as "La Mesa", will return no results:

![case sensitive search](https://github.com/cbeckler/UFOs/blob/main/static/images/la%20mesa%20search.png)

Another drawback is that because the search parameters are based on exact match and the method of search is filling in a blank box, some familiarity with the data is required to be able to search it effectively. For such a small dataset this is not a big problem, but for a larger dataset it would be problematic to not know what cities/shapes/etc might be included in returnable results.

### Recommendations for Further Development

There are ways to address these drawbacks, and also additional recommendations for enhanced functionality:

1. Remove case sensitivity from search parameters.
2. Add autofill for suggested search results based on user input and data that is present in the table (ex: suggesting "triangle" when "tri" has been entered into shape box).
3. Change the date selection filter to a date range rather than just one specific date.
4. Add a numeric range selection filter for Duration.

As it currently stands, the UFO search page is a useful resource, and with further development, could become a dynamic and helpful webpage.
