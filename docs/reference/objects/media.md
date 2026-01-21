# Media

Media items from the Media Gallery are available through the `media` collection.

Available attributes:

Name | Description
-----|-------------
description | Text description from the Media Gallery.
filename | Original file name.

#### Example

~~~ liquid
{% assign filename = 'home-slider.jpg' %}
{% assign medium = media | find_medium_by_filename: filename %}
{% assign medium_url = medium | medium_url %}
<img
  src="{{ medium_url }}"
  alt="{{ medium.description }}"
>
~~~

#### Example with Cloudinary settings and srcset

~~~ liquid
{% assign filename = 'home-slider.jpg' %}
{% assign medium = media | find_medium_by_filename: filename %}
{% assign base_url = medium | medium_url %}
<img
  src="{{ base_url | cloudinary_settings: 'w_1200,q_80,c_fill' }}"
  srcset="{{ base_url | cloudinary_settings: 'w_768,q_80,c_fill' }} 768w, {{ base_url | cloudinary_settings: 'w_1200,q_80,c_fill' }} 1200w, {{ base_url | cloudinary_settings: 'w_1600,q_80,c_fill' }} 1600w"
  sizes="(max-width: 768px) 768px, 1200px"
  alt="{{ medium.description }}"
>
~~~
