# Text Filters

Text filters are used to manipulate text sections.


## html_format

Import text from Rental Description section formated with HTML tags.

#### Input

~~~ html
  {{ rental.description | html_format }}
~~~

#### Output

~~~ html
  <p> Initial description </p>
~~~

## autolink

Auto link to source social media.

#### Example

~~~ html
  {{ site.social.twitter.last_tweet.text | autolink }}
~~~

## trim_whitespaces

Trim whitespaces from input text.

#### Input

~~~ html
  {{ ' Example String ' | trim_whitespaces }}
~~~

#### Output

~~~
  ExampleString
~~~

## parameterize

Parameterize input text.

#### Input

~~~ html
  {{ 'rental 094 page' | parameterize }}
~~~


#### Output

~~~
  rental-094-page
~~~
