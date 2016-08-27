# Social

Return attributes for social media inputs.

#### Example

~~~ liquid
  {% if site.social.facebook %}
  <li class="facebook">
    <a class="external" href="https://www.facebook.com/{{ site.social.facebook }}">
      <span class="fa-stack">
      <i class="fa fa-circle fa-stack-2x"></i>
      <i class="fa fa-facebook fa-inverse fa-stack-1x"></i></span> Facebook
    </a>
  </li>
  {% endif %}
~~~

Available attributes:

Name         | Type | Description
-------------|------|------------
facebook     | String | Facebook profile's link
facebook_app | String | Facebook App's link
googleplus   | String | Google+ profile's link (lol)
instagram    | String | Instagram profile's link
linkedin     | String | Linkedin profile's link
pinterest    | String | Pinterest profile's link
skype        | String | Skype username
twitter      | String | Twitter profile's link
vimeo        | String | Vimeo profile's link
youtube      | String | Youtube profile's link
{: class="table table-bordered"}
