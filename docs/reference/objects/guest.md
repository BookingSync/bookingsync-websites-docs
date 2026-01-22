# Guest

Returns attributes for selected `Guests` number.

#### Example

~~~ html
<option
  {% if guest.selected %}
    selected="selected"
  {% endif %}
  value="{{ guest.count }}">
  {{ guest.count }}+ {{ 'search.form.guest' | t }}
</option>
~~~

Available attributes:

Name     | Type    | Description
---------|---------|------------
count    | Integer | guest's count
selected | Boolean | check if guest is selected or not
