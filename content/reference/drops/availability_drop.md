# Availability Drop

Allows you to show rental availability map.

#### Example

~~~ liquid
  <input autocomplete="off" class="date form-control" data-datepicker=""
            id="bs_booknow_start_at" name="start_at"
            placeholder="{% t 'rentals.booknow.checkin.placeholder' %}"
            data-min="{{ time.today | date: '%Y-%m-%d' }}"
            data-availability-map="{{ rental.availability.map }}"
            data-tentatives-as-available="{{ site.tentatives_as_available }}"
            data-availability-start-date="{{ rental.availability.start_date | date: '%Y-%m-%d' }}"
            data-value="{{ search_form.checkin | date: '%Y-%m-%d'  }}"
            type="text" value="{{ search_form.checkin | date: '%b %d, %Y' }}">
~~~

Available attribute:

* map
* start_date
