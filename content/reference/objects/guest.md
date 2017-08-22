# Guest

Returns attributes for selected `Guests` number.

#### Example

~~~ liquid
<option
  {% if guest.selected %}
    selected="selected"
  {% endif %}
  value="{{ guest.count }}">
  {{guest.count}}+ {% t 'search.form.guest' %}
</option>
~~~

Available attributes:

Name     | Type    | Description
---------|---------|------------
count    | Integer | guest's count
selected | Boolean | check if guest is selected or not
{: class="table table-bordered"}
