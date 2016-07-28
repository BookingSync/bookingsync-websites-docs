# Search Form Drop

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

* amenities
* basic_amenities
* checkin
* checkout
* currency
* destinations
* root_destinations
* primary_destinations
* selected_destinations
* selected_root_destinations
* selected_primary_destinations
* display_name
* dislay_type
* guests
* guests_choices
* length_of_stay
* min_price
* min_price_for_stay
* max_price
* max_price_for_stay
* nightly_min_price
* nightly_max_price
* length_of_stay
* rentals_tags
* rental_types
* search_url
* selected_rentals_tags
* sort_by
* sort_choices
