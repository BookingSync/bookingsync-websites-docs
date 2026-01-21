# Contact Request

Allows to check and show Contact Form errors.

#### Example

~~~ html
{% if contact_request.errors.size > 0 %}
  <div class="alert alert-danger">
    <p>{% t "errors.template.body" %}</p>
    <ul>
      {% for message in contact_request.full_messages %}
        <li>{{ message }}.</li>
      {% endfor %}
    </ul>
  </div>
{% endif %}
~~~

Available attributes:

* contact_request_url
* country
* country_errors
* country_full_messages
* email
* email_errors
* email_full_messages
* errors
* errors_keys
* full_messages
* message
* message_errors
* message_full_messages
* name
* name_errors
* name_full_messages
* phone
* phone_errors
* phone_full_messages
