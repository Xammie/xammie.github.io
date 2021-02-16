---
title:   "Eager loading hasMany relationship in Laravel"
slug:    "/blog/eager-loading-hasmany-relationship-laravel"
date:    "2021-02-01"
tags:    ["Laravel", "Eloquent"]
image:   "assets/eager-loading.png"
publish: true
---

[Eager loading](https://laravel.com/docs/8.x/eloquent-relationships#eager-loading) relationships in Laravel makes it
really easy to avoid N+1 query problems. This occurs when you run an additional query for each result in a previous
query. Take for example a model `Post` that has a `hasOne` relationship with `User`.

```php
$posts = Post::all();

foreach ($posts as $post) {
    // Retrieve the post author
    echo $post->user->name;
}
```

This would run an additional query for each post author. To avoid this we use eager loading. This essentially lazy loads
the relationship into one extra query.

```php
$posts = Post::with('user')->get();
```

Now imagine the reverse of that example. You want to query all users and get their latest post. Easy we use eager
loading to lazy load the `posts` relationship.

```php
$users = User::with('posts')->get();
```

In this case eager loading causes to load all posts for every user. This is bad because we only need the latest post.

Because the user model has a `hasMany` relationship with posts, all posts are eager loaded for every user. To solve this
you might think a simple `->limit(1)` would do the
trick. [But that does not work](https://laravel.com/docs/8.x/eloquent-relationships#constraining-eager-loads).

The solution is actually pretty simple. In order to load the latest post you can simply create a new `hasOne`
relationship on the `User` model.

```php
public function latestPost()
{
    return $this->hasOne(Post::class)->latest();
}
```

When you use this relationship with eager loading only one post will be queried per user.

```php
$users = User::with('latestPost')->get();

foreach ($users as $user) {
    // Retrieve the latest post
    echo $user->latestPost->title;
}
```

If you're wondering how you can easily keep track of how many queries are run I highly recommend you
install [barryvdh/laravel-debugbar](https://github.com/barryvdh/laravel-debugbar).
