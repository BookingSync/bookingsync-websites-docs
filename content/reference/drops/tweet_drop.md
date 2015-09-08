# Tweet Drop

Return attributes for Twitter tweets.

#### Example

~~~ liquid
  <time datetime="{{ site.social.twitter.last_tweet.created_at | date: '%Y-%m-%dT%M:%sz' }}">
    {{ site.social.twitter.last_tweet.created_at | date: "%B %d, %Y" }}
  </time>
  <p>{{ site.social.twitter.last_tweet.text | autolink }}</p>
~~~

Available attributes:

* text
* created_at
