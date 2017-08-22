# Search Form

Return attributes for search form.

#### Example

~~~ liquid
<select class="select optional form-control chosen-select" data-placeholder="{% t 'search.form.destination' %}" id="search_destination" multiple="multiple" name="destination[]" placeholder="{% t 'search.form.destination' %}">
  {% for destination in search_form.destinations %}
    <option
      {% if destination.selected %}
        selected="selected"
      {% endif %}
      value="{{ destination.id }}">
      {{ destination.name }} ({{ destination.count }})
    </option>
  {% endfor %}
</select>
~~~

Available attributes:

* absolute_max_price
* absolute_min_price
* amenities
* basic_amenities
* bedrooms_range
* checkin
* checkout
* currency
* destinations
* display_name
* display_type
* guests
* guests_choices
* instantly_bookable?
* length_of_stay
* min_price
* min_price_for_stay
* max_price
* max_price_for_stay
* nightly_min_price
* nightly_max_price
* length_of_stay
* primary_destinations
* rental_types
* rentals
* rentals_tags
* root_destinations
* selected_destinations
* selected_primary_destinations
* selected_rate
* selected_rentals_tags
* selected_root_destinations
* search_url
* sort_by
* sort_choices
* website
