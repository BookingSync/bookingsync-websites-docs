# Page

Returns attributes of page.

## Example

For a page with the title `About us`:

### Input
~~~ html
{{ page.handle }}
~~~

### Output
~~~ html
about-us
~~~

## Available attributes

Name             | Type       | Description
-----------------|------------|------------
children         | Collection | visible child pages
content          | String     | page's content
featured_image   | Medium     | page's featured image (if set)
featured_image_description | String | featured image alt/description (falls back to page title)
featured_image_url | String  | URL of the featured image (compact size)
handle           | String     | page's handle. This is the page's title in lowercase with any spaces and special characters replaced by hyphens (-).
id               | Integer    | page's id
parent           | Page       | parent page (if any)
page_title       | String     | used inside title
page_description | String     | used inside meta description
title            | String     | page's title

## Featured image example

~~~ html
{% if page.featured_image_url %}
  <picture>
    <source
      srcset="
        {{ page.featured_image_url | cloudinary_settings: 'w_579,ar_16:9,q_75,c_fill', true | replace: 'f_auto', 'f_avif' }} 576w,
        {{ page.featured_image_url | cloudinary_settings: 'w_768,ar_16:9,q_75,c_fill', true | replace: 'f_auto', 'f_avif' }} 768w,
        {{ page.featured_image_url | cloudinary_settings: 'w_1280,ar_16:9,q_75,c_fill', true | replace: 'f_auto', 'f_avif' }} 1280w,
        {{ page.featured_image_url | cloudinary_settings: 'w_1920,ar_16:9,q_75,c_fill', true | replace: 'f_auto', 'f_avif' }} 1920w
      "
      sizes="100vw"
      type="image/avif"
    >
    <source
      srcset="
        {{ page.featured_image_url | cloudinary_settings: 'w_579,ar_16:9,q_75,c_fill', true | replace: 'f_auto', 'f_webp' }} 576w,
        {{ page.featured_image_url | cloudinary_settings: 'w_768,ar_16:9,q_75,c_fill', true | replace: 'f_auto', 'f_webp' }} 768w,
        {{ page.featured_image_url | cloudinary_settings: 'w_1280,ar_16:9,q_75,c_fill', true | replace: 'f_auto', 'f_webp' }} 1280w,
        {{ page.featured_image_url | cloudinary_settings: 'w_1920,ar_16:9,q_75,c_fill', true | replace: 'f_auto', 'f_webp' }} 1920w
      "
      sizes="100vw"
      type="image/webp"
    >
    <img
      src="{{ page.featured_image_url | cloudinary_settings: 'w_1920,ar_16:9,q_75,c_fill', true | replace: 'f_auto', 'f_jpg' }}"
      srcset="
        {{ page.featured_image_url | cloudinary_settings: 'w_579,ar_16:9,q_75,c_fill', true | replace: 'f_auto', 'f_jpg' }} 576w,
        {{ page.featured_image_url | cloudinary_settings: 'w_768,ar_16:9,q_75,c_fill', true | replace: 'f_auto', 'f_jpg' }} 768w,
        {{ page.featured_image_url | cloudinary_settings: 'w_1280,ar_16:9,q_75,c_fill', true | replace: 'f_auto', 'f_jpg' }} 1280w,
        {{ page.featured_image_url | cloudinary_settings: 'w_1920,ar_16:9,q_75,c_fill', true | replace: 'f_auto', 'f_jpg' }} 1920w
      "
      sizes="100vw"
      alt="{{ page.featured_image_description }}"
      class="position-absolute top-0 start-0 w-100 h-100 img-object-fit-cover"
    >
  </picture>
{% endif %}
~~~


## Page Locale

Returns url with locale of page.

#### Example

~~~ html
<a href="{{ page.url }}">Rental</a>
~~~

Available attributes:

* url

## Page Locales

Generate locales for page based on website locales.

#### Example

~~~ html
{% for locale in locales.available %}
~~~

Available attributes:

* available
* default
