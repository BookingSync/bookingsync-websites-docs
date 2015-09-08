# Review Drop

Returns review attributes.

#### Example

~~~ liquid
  {% for review in rental.reviews %}
    <li>
      {% assign rating = review.rating %}
      {% include 'snippets/rating' %}
      {% t 'rentals.show.by' %}
      <strong>{{ review.name }}</strong>
    </li>
  {% endfor %}
~~~

Available attributes:

* name
* rating
* comment
* created_at
