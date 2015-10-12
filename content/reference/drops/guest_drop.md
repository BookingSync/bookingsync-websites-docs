# Guest Drop

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

* count
* selected
