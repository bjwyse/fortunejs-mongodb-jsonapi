# JSON API back-end using Fortune.js with MongoDB

An example of a [JSON API](http://jsonapi.org/) using [Fortune.js](http://fortune.js.org/) with [MongoDB](https://www.mongodb.com/).

Adapted from https://github.com/redoPop/fortunejs-example

## Installation

* `git clone git@github.com:bjwyse/fortunejs-mongodb-jsonapi.git`
* `cd fortunejs-mongodb-jsonapi`
* `npm install`

## Building

```
npm run build
```

## Running the server

```
npm run start
```

The JSON API is now available on port 1337 of your localhost.

## Running the server and watch for changes

Useful if using WebStorm's file watcher to rebuild when files change.

```
npm run watch
```


## Example requests


### Create a user

```
curl -X "POST" "http://localhost:1337/users" \
       -H "Content-Type: application/vnd.api+json" \
       -d $'{
              "data": {
                "type": "users",
                "attributes": {
                  "name": "Daniel"
                }
              }
            }'
```


### Create a post

```
curl -X "POST" "http://localhost:1337/posts" \
       -H "Content-Type: application/vnd.api+json" \
       -d $'{
              "data": {
                "type": "posts",
                "attributes": {
                  "message": "A test post!"
                },
                "relationships": {
                  "author": {
                    "data": {"id": "P/6Mo++KLB2zFypa9bcR", "type": "users"}
                  }
                }
              }
            }'
```

### Retrieve all posts

```
curl -X "GET" "http://localhost:1337/posts"
```
