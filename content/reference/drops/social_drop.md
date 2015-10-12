# Social Drop

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

* facebook
* facebook_app
* googleplus
* pinterest
* skype
* twitter
* vimeo
* youtube
