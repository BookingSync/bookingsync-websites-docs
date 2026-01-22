# String Filters

String filters are used to modify the output of strings.


## append

Appends characters to a string.

#### Input

~~~ html
  {{ 'sales' | append: '.jpg' }}
~~~

#### Output

~~~
  sales.jpg
~~~

## capitalize

Capitalizes the first word in a string.

#### Input

~~~ html
  {{ 'capitalize me' | capitalize }}
~~~

#### Output

~~~
  Capitalize me
~~~

## downcase

Converts a string into lowercase.


#### Input

~~~ html
  {{ 'UPPERCASE' | downcase }}
~~~

#### Output

~~~
  uppercase
~~~

## escape

Escapes a string.

#### Input

~~~ html
  {{ "<p>test</p>" | escape }}
~~~

#### Output

~~~ html
  <!-- The <p> tags are not rendered -->
    <p>test</p>
~~~

## newline_to_br

Inserts a `<br>` linebreak HTML tag in front of each line break in a string.

#### Input

~~~ html
  {% capture var %}
  One
  Two
  Three
  {% endcapture %}
  {{ var | newline_to_br }}
~~~

#### Output

~~~ html
  One <br>
  Two <br>
  Three <br>
~~~

## prepend

Prepends characters to a string.

#### Input

~~~ html
  {{ 'sale' | prepend: 'Made a great ' }}
~~~

#### Output

~~~
  Made a great sale
~~~

## remove

Removes all occurrences of a substring from a string.

#### Input

~~~ html
  {{ "Hello, world. Goodbye, world." | remove: "world" }}
~~~

#### Output

~~~
  Hello, . Goodbye, .
~~~

## remove_first

Removes only the first occurrence of a substring from a string.

#### Input

~~~ html
  {{ "Hello, world. Goodbye, world." | remove_first: "world" }}
~~~

#### Output

~~~
  Hello, . Goodbye, world.
~~~

## replace

Replaces all occurrences of a string with a substring.

#### Input

~~~ html
  <!-- amenity.title = "Awesome Swimming Pool" -->
    {{ amenity.title | replace: 'Awesome', 'Huge' }}
~~~

#### Output

~~~
  Huge Swimming Pool
~~~

## replace_first

Replaces the first occurrence of a string with a substring.

### Input

~~~ html
  <!-- product.title = "Awesome Awesome Swimming Pool" -->
    {{ product.title | replace_first: 'Awesome', 'Huge' }}
~~~

#### Output

~~~
  Huge Awesome Swimming Pool
~~~

## split

The `split` filter takes on a substring as a parameter. The substring is used as a delimiter to divide a string into an array. You can output different parts of an array using [array filters](/reference/filters/array_filters).

#### Input

~~~ html
  {% assign words = "Hi, how are you today?" | split: ' ' %}

  {% for word in words %}
  {{ word }}
  {% endfor %}
~~~

#### Output

~~~
  Hi,
  how
  are
  you
  today?
~~~

## active

Returns `active` when the request URL matches the given source.

#### Input

~~~ html
  <a class="{{ '/rentals' | active: current_page.url }}">Rentals</a>
~~~

## page

Adds or replaces the `page` query parameter.

#### Input

~~~ html
  {{ 'https://example.com/fr/rentals/search' | page: 3 }}
~~~

#### Output

~~~
  https://example.com/fr/rentals/search?page=3
~~~

## t

Translates a key using the current locale.

#### Input

~~~ html
  {{ 'buttons.book_now' | t }}
~~~

## url_encode

Encodes string as an url.

#### Input

~~~ html
  <!-- Rental Headline = "Super Headline" -->
  {{ rental.headline | url_encode }}
~~~

#### Output

~~~
  Super%20Headline
~~~

## url_params

Adds or replace a parameter in a url. When only `key` is provided, it returns the parameter value. When no key is provided, it returns all parameters as a hash.

#### Input

~~~ html
  {{ current_page.url | url_params: 'page', '2' }}
~~~

#### Output

~~~
  example.com/fr/rentals/search?page=2
~~~

#### Input

~~~ html
  {{ 'https://example.com/fr/rentals/search?page=2&per_page=20' | url_params: 'page' }}
~~~

#### Output

~~~
  2
~~~

#### Input

~~~ html
  {{ 'https://example.com/fr/rentals/search?page=2&per_page=20' | url_params }}
~~~

#### Output

~~~
  { "page": "2", "per_page": "20" }
~~~

## strip_html

Strips all HTML tags from a string.

#### Input

~~~ html
  {{ "<h1>Hello</h1> World" | strip_html }}
~~~

#### Output

~~~
  Hello World
~~~

## strip_newlines

Removes any line breaks/newlines from a string.

~~~ html
  {{ rental.description | strip_newlines }}
~~~

## truncate

Truncates a string down to **'x'** characters, where **x** is the number passed as a parameter. An ellipsis (...) is appended to the string and is included in the character count.

#### Input

~~~ html
  {{ "The cat came back the very next day" | truncate: 10 }}
~~~

#### Output

~~~
  The cat...
~~~

## truncatewords

Truncates a string down to **'x'** words, where **x** is the number passed as a parameter. An ellipsis (...) is appended to the truncated string.

#### Input

~~~ html
  {{ "The cat came back the very next day" | truncatewords: 4 }}
~~~

#### Output

~~~
  The cat came back...
~~~

## upcase

Converts a string into uppercase.

#### Input

~~~ html
  {{ 'i want this to be uppercase' | upcase }}
~~~

#### Output

~~~
  I WANT THIS TO BE UPPERCASE
~~~
