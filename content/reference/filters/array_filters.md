# Array Filters

Array filters are used to modify the output of arrays.

1. TOC
{:toc}

## join

Joins the elements of an array with the character passed as the parameter. The result is a single string.

#### Input

~~~ liquid
  {{ amenity.tags | join: ', ' }}
~~~

#### Output

~~~
tag1, tag2, tag3
~~~

## first

Returns the first element of an array.

#### Input

~~~ liquid
  <!-- amenity.tags = 'swimming pool', 'tv', 'boat', 'cellar' -->
    {{ amenity.tags | first }}
~~~

#### Output

~~~
  swimming pool
~~~

<br>

`first` can be used in dot notation, in cases where it needs to be used inside a [tag](/tags/).

~~~ liquid
  {% if amenity.tags.first == 'swimming pool' %}
      This apartment is with a swimming pool!
  {% endif %}
~~~

## last

Gets the last element passed in an array.

#### Input

~~~ liquid
  <!-- amenity.tags = 'swimming pool', 'tv', 'boat', 'cellar' -->
    {{ amenity.tags | last }}
~~~

#### Output

~~~
cellar
~~~

<br>

`last` can be used in dot notation, in cases where it needs to be used inside a [tag](/tags/).

~~~ liquid
  {% if amenity.tags.last == 'swimming pool'%}
      This apartment is with a swimming pool!
  {% endif %}
~~~

<br>

Using `last` on a string returns the last character in the string.

#### Input

~~~ liquid
  <!-- amenity.title = 'swimming pool' -->
  {{ amenity.title | last }}
~~~

#### Output

~~~
  l
~~~

## index

Returns the item at the specified index location in an array. Note that array numbering starts from zero, so the first item in an array is referenced with `[0]`.

#### Input

~~~ liquid
  <!-- amenity.tags = 'swimming pool', 'tv', 'boat', 'cellar' -->
    {{ amenity.tags[2] }}
~~~

#### Output

~~~
  boat
~~~

## map

Accepts an array element's attribute as a parameter and creates a string out of each array element's value.

#### Input

~~~ liquid
  <!-- collection.title = 'Spring', 'Summer', 'Fall', 'Winter' -->
    {% assign collection_titles = collections | map: 'title' %}
    {{ collection_titles }}
~~~

#### Output

~~~
  SpringSummerFallWinter
~~~


## size

Returns the size of a string or an array.

#### Input

~~~ liquid
  {{ '"Spring", "Summer", "Fall", "Winter"' | size }}
~~~

#### Output

~~~
  4
~~~

<br>

`size` can be used in dot notation, in cases where it needs to be used inside a [tag](/tags/).

~~~ liquid
  {% if collections.frontpage.amienities.size > 10 %}
      There are more than 10 amienities in this collection!
  {% endif %}
~~~

## sort

Sorts the elements of an array by a given attribute of an element in the array.

~~~ liquid
  {% assign amenities = collection.amenities | sort: 'title' %}
  {% for amenity in amenities %}
      <h4>{{ amenity.title }}</h4>
  {% endfor %}
~~~

<br>

The order of the sorted array is case-sensitive.

#### Input

~~~ liquid
  <!-- amenities = 'a', 'b', 'A', 'B' -->
    {% assign amenities = collection.amenities | sort: 'title' %}
    {% for amenity in amenities %}
       {{ amenity.title }}
    {% endfor %}
~~~

#### Output

~~~
  A B a b
~~~
