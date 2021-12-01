# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @erick_nuque/lotide`

**Require it:**

`const _ = require('@erick_nuque/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual(actual, expected)`: Compare the two values it takes in and print the message if they match or not
* `assertArraysEqual(arr1, arr2)`: Compare the length of two arrays - prints out true if the arrays are of the same length or not
* `countLetters(string)`: Return a count of each of the letters in the string - used  to assertEqual function to test
* `counOnly(allItems, itemsToCount)`: Loop thru the 'allItems' and return number of count for the that specific items (itemsToCount) - return if true if match or not using the assertEqual function - used  to assertEqual function to test
* `eqArrays(arr1, arr2)`: Compare the two given arrays - return true if they are of the same length property otherwise returns false - used  to assertEqual function to test
* `findKey(object, callbackFunc)`: Iterate in an object and return the first key the callback function returns a truthy value - used  to assertEqual function to test
* `head(firstItem)`: Return the first item in a given array - used  to assertEqual function to test
* `index`: List of all the function
* `map(arr, callback)`: Return a new array based on the results of the callback function - used eqArrays functions
* `middle(array)`: Return the element in a given array, if the length of the array is even, the middle element will the average of the two middle element - used  to assertEqual function to test - used eqArrays functions and assertEqual funstions
* `tail(array)`:Returns the tail of an array - everything except for the head of the array - used assertEqual funstions
* `takeUntil(array, callback)`: Returns the slice of the array with elemets taken from the beginning - it should keep going until the callback returns a truthy value
* `without(source, itemsToRemove)`: Returns a subset of a given array - removing unwanted elements - used eqArrays functions and assertEqual funstions







