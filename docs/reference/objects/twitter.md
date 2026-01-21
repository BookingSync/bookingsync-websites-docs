# Twitter

Return attributes for Twitter account.

#### Example

~~~ liquid
<a href="https://twitter.com/{{ site.social.twitter.user }}" class="external">
  <cite title="{{ site.name }}">@{{ site.social.twitter.user }}</cite>
</a>
~~~

Available attributes:

Name       | Type       | Description
-----------|------------|------------
last_tweet | String     | last tweet
tweets     | Collection | all tweets
user       | String     | user
