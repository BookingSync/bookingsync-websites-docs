# Photo Filters

## rental_photo_url

Insterts `img` tag with link to the given size.

#### Input

~~~ html
  <img src='{{ photo | rental_photo_url: 'large' }} 1200w' >
~~~

#### Output

~~~ html
  <img src='.../image/upload/c_fill,fl_progressive,g_center,h_800,q_90,w_1200/v1436964916/uw5bsnqqbkwtxfqocbjd.jpg 1200w' >
~~~

List of sizes:

Name   | Size
-------|------
compact| 384w
medium | 768w
large  | 1200w
grande | 1536w
giant  | 2400w

## category_photo_url

Similiar to `rental_photo_url`.

## destination_photo_url

Similiar to `rental_photo_url`.

## cloudinary_settings

List of available options at:
https://cloudinary.com/documentation/transformation_reference

#### Input

~~~ liquid
  {{ photo | rental_photo_url | cloudinary_settings: 'w_304,ar_3:2,q_65,c_fill' }}
~~~

#### Output

~~~
  /image/upload/f_auto,g_center,w_304,ar_3:2,q_65,c_fill/v1588198127/qip_2528f121-9cce-4bb3-96bd-d26f72c19543.jpg
~~~

To remove the image file extension (useful for `<source>` tags), pass `true` as the third parameter.

#### Input

~~~ liquid
  {{ photo | rental_photo_url | cloudinary_settings: 'w_304,ar_3:2,q_65,c_fill', true }}
~~~

#### Output

~~~
  /image/upload/f_auto,g_center,w_304,ar_3:2,q_65,c_fill/v1588198127/qip_2528f121-9cce-4bb3-96bd-d26f72c19543
~~~
