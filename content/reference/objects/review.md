
# Review

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

Name       | Type    | Description
-----------|---------|------------
comment    | String  | review's comment
created_at | Date    | review's date
id         | Integer | review's id
name       | String  | reviewer's name
rating     | Integer | review's rating. Maximum value is 5.
title      | String  | review's title
{: class="table table-bordered"}
