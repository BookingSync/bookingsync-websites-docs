# Locale

Returns attributes for active locale.

#### Example

~~~ liquid
<li><a href="{{ locale.url }}">{{ locale.name }}</a></li>
~~~

Available attributes:

Name    | Type    | Description
--------|-------- |------------
code    | String  | locale's code
name    | String  | locale's name
url     | String  | locale's url
current | Boolean | check if locale is current or not
