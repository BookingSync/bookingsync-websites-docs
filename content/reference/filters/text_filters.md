# Text Filters

Text filters are used to manipulate text sections.

1. TOC
{:toc}

## html_format

Import text from Rental Description section formated with HTML tags.

#### Input

~~~ liquid
  {{ rental.description | html_format }}
~~~

#### Output

~~~ html
  <p> Initial description </p>
~~~

## autolink

Auto link to source social media.

#### Example

~~~ liquid
  {{ site.social.twitter.last_tweet.text | autolink }}
~~~

## trim_whitespaces

Trim whitespaces from input text.

#### Input

~~~ liquid
  {{ ' Example String ' | trim_whitespace }}
~~~

#### Output

~~~
  'ExampleString'
~~~

## parameterize

Parameterize input text.

#### Input

~~~ liquid
  {{ 'rental 094 page' | parameterize }}
~~~


#### Output

~~~
  rental-094-page
~~~
