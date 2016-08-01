# Rental Photo

Returns attributes for photo from rental photos.

#### Example

~~~ liquid
  {% for photo in rental.photos %}
  ...
    {% if photo.description %}
      <span class="description">{{ photo.description }}</span>
    {% endif %}
  {% endif %}
~~~

Available attributes:

* description
* kind
* to_s
* sizes

Available sizes:

* micro
* thumb
* small
* compact
* medium
* large
* grande
* giant
