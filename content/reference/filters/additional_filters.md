# Additional Filters

## json

Converts a string, or object, into JSON format.

> When using the JSON output in JavaScript, you don't need to wrap it in quotes because the `json` filter includes them. The `json` filter also escapes any quotes inside the output.

#### Input

~~~ liquid
  <script>
    console.log({{ rental.photos | json }});
  </script>
~~~

#### Output

~~~ json
  [
    "https://res-3.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1588198127/qip_2528f121-9cce-4bb3-96bd-d26f72c19543.jpg",
    "https://res-4.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1588197588/qip_fc3e593b-4f97-4101-8991-eaa57c334158.jpg",
    "https://res-4.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1523640153/home_qip_qagssw.jpg",
    "https://res-5.cloudinary.com/bookingsync/image/upload/c_fit,f_auto,fl_progressive,h_800,q_auto,w_1200/v1503932905/Image_qip_lczrgv.jpg",
    "https://res-1.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1517504669/104_bd_croisette_06-min_qip_ke8efj.jpg",
    "https://res-2.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1498585772/bookingsync_sample_rental_photo_6_qip_ymrfjt.jpg",
    "https://res-2.cloudinary.com/bookingsync/image/upload/c_fit,f_auto,fl_progressive,h_800,q_auto,w_1200/v1498585773/bookingsync_sample_rental_photo_8_qip_ukq58h.jpg",
    "https://res-5.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1498585774/bookingsync_sample_rental_photo_3_qip_qwggxg.jpg",
    "https://res-2.cloudinary.com/bookingsync/image/upload/c_fit,f_auto,fl_progressive,h_800,q_auto,w_1200/v1498585775/bookingsync_sample_rental_photo_10_qip_oaufvq.jpg",
    "https://res-2.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1498585776/bookingsync_sample_rental_photo_1_qip_tx4qv9.jpg",
    "https://res-2.cloudinary.com/bookingsync/image/upload/c_fill,f_auto,fl_progressive,g_center,h_800,q_auto,w_1200/v1498585777/bookingsync_sample_rental_photo_4_qip_rtc9ri.jpg"
  ]
~~~

## url_encode

Encodes string as an url.

#### Input

~~~ liquid
  <!-- Rental Headline = "Super Headline" -->
  {{ rental.headline | url_encode }}
~~~

#### Output

~~~
  Super%20Headline
~~~

## convert_stars

Converts rental rating to be used as star rating.

#### Input

~~~ html
  <!-- Rating = 4.8 -->
    <span class='star-rating rating-{{ rating | convert_stars }}'><span class='sr-only'>{{ rating }}/5</span></span>
~~~

#### Output

~~~ html
  <span class='star-rating rating-100'><span class='sr-only'>4.8/5</span></span>
~~~

## iso8601

Sets date or time in iso8601 format.

#### Input

~~~ html
  <meta property='og:updated_time' content='{{ rental.updated_at | iso8601 }}'>
~~~

#### Output

~~~ html
  <meta property='og:updated_time' content='2015-08-16T12:42:55Z'>
~~~

## date

Converts a time/date into another format.

#### Input

~~~ liquid
  {{ article.published_at | date: '%a, %b %d, %y' }}
~~~

#### Output

~~~
  Tue, Apr 22, 14
~~~

> ### `date` parameters
>
> <br>
>
>  <div class='tab-content' markdown='1'>
>    <div class='tab-pane active' id='public' markdown='1'>
>  Paramater   | Description                   | Output
>  :----------:|--------------------------------------------------------------------------------------------------|:-----------:
>  %a          | Abbreviated weekday.          | Sat
>  ------------|-------------------------------|----------------------------------------------------
>  %A          | Full weekday name.            | Tuesday
>  ------------|-------------------------------|----------------------------------------------------
>  %b          | Abbreviated month name.       | Jan
>  ------------|-------------------------------|----------------------------------------------------
>  %B          | Full month name               | January
>  ------------|-------------------------------|----------------------------------------------------
>  %c          | Preferred local date and time representation      | Tue Apr 22 11:16:09 2014
>  ------------|-------------------------------|----------------------------------------------------
>  %d          | Day of the month, zero-padded (01, 02, 03, etc.). | 04
>  ------------|-------------------------------|----------------------------------------------------
>  %-d         | Day of the month, not zero-padded (1,2,3, etc.).  | 4
>  ------------|-------------------------------|----------------------------------------------------
>  %D          | Formats the date (dd/mm/yy).  | 04/22/14
>  ------------|-------------------------------|----------------------------------------------------
>  %e          | Day of the month, blank-padded ( 1, 2, 3, etc.).  | 3
>  ------------|-------------------------------|----------------------------------------------------
>  %F          | Returns the date in ISO 8601 format (yyyy-mm-dd). | 2014-04-22
>  ------------|-------------------------------|----------------------------------------------------
>  %H          | Hour of the day, 24-hour clock (00 - 23).         | 15
>  ------------|-------------------------------|----------------------------------------------------
>  %I          | Hour of the day, 12-hour clock (1 - 12).          | 7
>  ------------|-------------------------------|----------------------------------------------------
>  %j          | Day of the year (001 - 366).  | 245
>  ------------|-------------------------------|----------------------------------------------------
>  %k          | Hour of the day, 24-hour clock (1 - 24).          | 14
>  ------------|-------------------------------|----------------------------------------------------
>  %m          | Month of the year (01 - 12).  | 04
>  ------------|-------------------------------|----------------------------------------------------
>  %M          | Minute of the hour (00 - 59). | 53
>  ------------|-------------------------------|----------------------------------------------------
>  %p          | Meridian indicator (AM/PM).   | PM
>  ------------|-------------------------------|----------------------------------------------------
>  %r          | 12-hour time (%I:%M:%S %p)    | 03:20:07 PM
>  ------------|-------------------------------|----------------------------------------------------
>  %R          | 24-hour time (%H:%M)          | 15:21
>  ------------|-------------------------------|----------------------------------------------------
>  %T          | 24-hour time (%H:%M:%S)       | 15:22:13
>  ------------|-------------------------------|----------------------------------------------------------------------------------------
>  %U          | The number of the week in the current year, starting with the first Sunday as the first day of the first week. | 16
>  ------------|-------------------------------|----------------------------------------------------------------------------------------
>  %W          | The number of the week in the current year, starting with the first Monday as the first day of the first week. | 16
>  ------------|-------------------------------|----------------------------------------------------------------------------------------
>  %w          | Day of the week (0 - 6, with Sunday being 0).     | 2
>  ------------|-------------------------------|----------------------------------------------------
>  %x          | Preferred representation for the date alone, no time. (mm/dd/yy). | 04/22/14
>  ------------|-------------------------------|----------------------------------------------------
>  %X          | Preferred representation for the time. (hh:mm:ss).| 13:17:24
>  ------------|-------------------------------|----------------------------------------------------
>  %y          | Year without a century (00.99).                   | 14
>  ------------|-------------------------------|----------------------------------------------------
>  %Y          | Year with a century. | 2014
>  ------------|-------------------------------|----------------------------------------------------
>  %Z          | Time zone name.               | EDT
>  ------------|-------------------------------|----------------------------------------------------
>  {: class='table table-bordered'}
>    </div>
>  </div>
