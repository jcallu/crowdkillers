## Getting Up And Running

### First, install the necessary gems and source code

    $ git clone git@github.com:appstack/metrics.git
    $ gem install bundler
    $ bundle install

### Next, add heroku binstubs

    $ heroku plugins:install https://github.com/tpope/heroku-binstubs.git
    $ heroku binstubs:setup appstack-metrics

### Finally, start the local server with the correct envrionment variables

    $ production config | egrep '(KEEN_READ_KEY|KEEN_MASTER_KEY|KEEN_PROJECT_ID)'
    $ KEEN=production API_URL=http://api.appstack.dev KEEN_MASTER_KEY=<value> KEEN_READ_KEY=<value> KEEN_PROJECT_ID=<value> rails s
