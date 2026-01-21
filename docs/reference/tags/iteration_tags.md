# Iteration Tags

Iteration Tags are used to run a block of code repeatedly.


## for

Repeatedly executes a block of code. For a full list of parameters available within a `for` loop, see [forloop(object)](/).

`for` loops can output a maximum of 50 results per page. In cases where there are more than 50 results, use the [paginate](/reference/tags/theme_tags/#paginate) tag to split them across multiple pages.

#### Input

~~~ liquid
  {% for amenity in collection.amenities %}
    {{ amenity.title }}
  {% endfor %}
~~~

#### Output

~~~
  gym hoover jacuzzi
~~~

> ### `for` parameters
>
>
> ### *limit*
>
> Exits the for loop at a specific index.
>
> #### Input
> ~~~ liquid
>   <!-- if array = [1,2,3,4,5,6] -->
>     {% for item in array limit:2 %}
>       {{ item }}
>     {% endfor %}
> ~~~
>
> #### Output
>
> ~~~
>   1 2
> ~~~
>
> ### *offset*
>
> Starts the for loop at a specific index.
>
> #### Input
>
> ~~~ liquid
>   <!-- if array = [1,2,3,4,5,6] -->
>     {% for item in array offset:2 %}
>        {{ item }}
>     {% endfor %}
> ~~~
>
> #### Output
>
> ~~~
>   3 4 5 6
> ~~~
>
> ### *range*
>
> Defines a range of numbers to loop through. The range can be defined by both literal and variable numbers.
>
> #### Input
> ~~~ liquid
>   {% assign num = 4 %}
>   {% for i in (1..num) %}
>     {{ i }}
>   {% endfor %}
>
>   {% for i in (3..5) %}
>     {{ i }}
>   {% endfor %}
> ~~~
>
> #### Output
>
> ~~~
>   1 2 3 4
>   3 4 5
> ~~~

## break

Causes the loop to stop iterating when it encounters the `break` tag.

#### Input

~~~ liquid
  {% for i in (1..5) %}
    {% if i == 4 %}
      {% break %}
    {% else %}
      {{ i }}
    {% endif %}
  {% endfor %}
~~~

#### Output

~~~
  1 2 3
~~~

## continue

Causes the loop to skip the current iteration when it encounters the `continue` tag.

#### Input

~~~ liquid
  {% for i in (1..5) %}
    {% if i == 4 %}
      {% continue %}
    {% else %}
      {{ i }}
    {% endif %}
  {% endfor %}
~~~

#### Output

~~~
1 2 3   5
~~~

## cycle

Loops through a group of strings and outputs them in the order that they were passed as parameters. Each time `cycle` is called, the next string that was passed as a parameter is output.

`cycle` must be used within a [for](/reference/tags/iteration_tags#for) loop block.

#### Input

~~~ liquid
  {% cycle 'one', 'two', 'three' %}
  {% cycle 'one', 'two', 'three' %}
  {% cycle 'one', 'two', 'three' %}
  {% cycle 'one', 'two', 'three' %}
~~~

#### Output

~~~
  one
  two
  three
  one
~~~


Uses for `cycle` include:

  * applying odd/even classes to rows in a table
  * applying a unique class to the last rental thumbnail in a row


> ### `cycle` parameters
>
> `cycle` accepts a parameter called **cycle group** in cases where you need multiple `cycle` blocks in one template. If no name is supplied for the cycle group, then it is assumed that multiple calls with the same parameters are one group.
>
>
> The example below shows why cycle groups are necessary when there are multiple instances of the cycle block.
>
> ~~~ liquid
>   <ul>
>   {% for rental in collections.collection-1.rentals %}
>     <li{% cycle ' style="clear:both;"', '', '', ' class="last"' %}>
>       <a href="{{ rental.url | within: collection }}">
>         <img src="{{ rental.featured_image.src | rental_img_url: 'medium' }}" alt="{{ rental.featured_image.alt }}" />
>       </a>
>     </li>
>   {% endfor %}
>   </ul>
>   <ul>
>   {% for rental in collections.collection-2.rentals %}
>     <li{% cycle ' style="clear:both;"', '', '', ' class="last"' %}>
>       <a href="{{ rental.url | within: collection }}">
>         <img src="{{ rental.featured_image.src | rental_img_url: 'medium' }}" alt="{{ rentals.featured_image.alt }}" />
>       </a>
>     </li>
>   {% endfor %}
>   </ul>
> ~~~
>
>
> In the code above, if the first collection only has two rentals, the second collection loop will continue the `cycle` where the first one left off. This will result in this undesired output:
>
> ~~~ html
>   <ul>
>     <li style="clear:both"></li>
>   </ul>
>   <ul>
>     <li></li>
>     <li class="last"></li>
>     <li style="clear:both"></li>
>     <li></li>
>   </ul>
> ~~~
>
>
> To avoid this, cycle groups are used for each cycle block, as shown below.
>
> ~~~ liquid
>
>   <ul>
>   {% for rental in collections.collection-1.rentals %}
>   <li{% cycle 'group1': ' style="clear:both;"', '', '', ' class="last"' %}>
>     <a href="{{ rental.url | within: collection }}">
>       <img src="{{ rental.featured_image.src | rental_img_url: "medium" }}" alt="{{ rental.featured_image.alt }}" />
>     </a>
>   </li>
>   {% endfor %}
>   </ul>
>   <ul>
>   {% for rental in collections.collection-2.rentals %}
>     <li{% cycle 'group2': ' style="clear:both;"', '', '', ' class="last"' %}>
>       <a href="{{ rental.url | within: collection }}">
>         <img src="{{ rental.featured_image.src | rental_img_url: "medium" }}" alt="{{ rental.featured_image.alt }}" />
>       </a>
>     </li>
>   {% endfor %}
>   </ul>
> ~~~
>
>
> With the code above, the two cycle blocks are independent of each other. The result is shown below:
>
> ~~~ html
>   <ul>
>     <li style="clear:both"></li>
>     <li></li>
>   </ul>
>   <!-- new cycle group starts! -->
>   <ul>
>     <li style="clear:both"></li>
>     <li></li>
>     <li></li>
>     <li class="last"></li>
>   </ul>
> ~~~

## tablerow

Generates an HTML `<table>`. Must be wrapped in an opening `<table>` and closing `</table>` HTML tags. For a full list of parameters available within a tablerow loop, see [tablerow (object)](/).

#### Input

~~~ liquid
  <table>
  {% tablerow amenity in collection.amenities %}
    {{ amenity.title }}
  {% endtablerow %}
  </table>
~~~

#### Output

~~~ html
  <table>
      <tr class="row1">
          <td class="col1">
            Air Condition
          </td>
          <td class="col2">
            Balcony
          </td>
          <td class="col3">
            Boat
          </td>
          <td class="col4">
            Car Included
          </td>
          <td class="col5">
            Kids Pool
          </td>
          <td class="col6">
            Washing Machine
          </td>
      </tr>
  </table>
~~~


> ### `tablerow` parameters
>
> ### *cols*
>
> Defines how many columns the table should have.
>
> #### Input
>
> ~~~ liquid
>   {% tablerow amenity in collection.amenities cols:2 %}
>     {{ amenity.title }}
>   {% endtablerow %}
> ~~~
>
> #### Output
>
> ~~~ html
>   <table>
>       <tr class="row1">
>           <td class="col1">
>             Air Condition
>           </td>
>           <td class="col2">
>             Balcony
>           </td>
>       </tr>
>       <tr class="row2">
>           <td class="col1">
>             Boat
>           </td>
>           <td class="col2">
>             Car Included
>           </td>
>       </tr>
>       <tr class="row3">
>           <td class="col1">
>             Kids Pool
>           </td>
>           <td class="col2">
>             Washing Machine
>           </td>
>       </tr>
>   </table>
> ~~~
>
>
> ### *limit*
>
> Exits the tablerow after a specific index.
>
> ~~~ liquid
>   {% tablerow amenity in collection.amenities cols:2 limit:3 %}
>     {{ amenity.title }}
>   {% endtablerow %}
> ~~~
>
> ### *offset*
>
> Starts the tablerow after a specific index.
>
> ~~~ liquid
>   {% tablerow amenity in collection.amenities cols:2 offset:3 %}
>     {{ amenity.title }}
>   {% endtablerow %}
> ~~~
>
> ### *range*
>
> Defines a range of numbers to loop through. The range can be defined by both literal and variable numbers.
>
> ~~~ liquid
>   <!--variable number example-->
>
>   {% assign num = 4 %}
>   <table>
>   {% tablerow i in (1..num) %}
>     {{ i }}
>   {% endtablerow %}
>   </table>
>
>   <!--literal number example-->
>
>   <table>
>   {% tablerow i in (3..5) %}
>     {{ i }}
>   {% endtablerow %}
>   </table>
> ~~~
