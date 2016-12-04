# Destination

Returns attributes for selected `Destination`, for example in search bar.

## Example

~~~ liquid
<option
  {% if destination.selected %}
    selected="selected"
  {% endif %}
  value="{{ destination.id }}">
  {{ destination.title }} ({{ destination.count }})
</option>
~~~

## Available attributes

Name             | Type        | Description
-----------------|-------------|------------
ancestors        | Collection  | destination's ancestors
children         | Collection  | destination's children destination
content          | String      | destination's content
count            | Interger    | number of rentals within this destination
handle           | String      | destination's handle. This is the destination's title in lowercase with any spaces and special characters replaced by hyphens (-).
id               | Integer     | destination's uniq identifier
parent           | Destination | destination's parent destination
photos           | Collection  | collection of all destination's photos
selected         | Boolean     | defined if a destination is currently selected or not
title            | String      | destination's title
url              | String      | destination's URL
{: class="table table-bordered"}
