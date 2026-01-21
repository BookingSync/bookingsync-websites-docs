# Media Filters

## find_medium_by_id

Find a medium from a media collection by id.

#### Input

~~~ html
{% assign medium = media | find_medium_by_id: 42 %}
~~~

## find_medium_by_filename

Find a medium from a media collection by filename.

#### Input

~~~ html
{% assign filename = 'home-slider.jpg' %}
{% assign medium = media | find_medium_by_filename: filename %}
~~~

## medium_url

Return the URL of a medium.

#### Input

~~~ html
{% assign medium_url = medium | medium_url %}
~~~

## medium_file

Return the file object of a medium.

#### Input

~~~ html
{% assign medium_file = medium | medium_file %}
~~~
