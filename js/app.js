'use strict';


(function () {
    function init() {
        var router = new Router([
            new Route('home', 'home.html', true),            
            new Route('browse', 'browse.html'),
            new Route('watchlist', 'watchlist.html'),
            new Route('friends', 'friends.html'),
            new Route('notifications', 'notifications.html'),
            new Route('tv-shows', 'tv-shows.html'),
            new Route('movies', 'movies.html'),
            new Route('games', 'games.html'),
            new Route('settings', 'settings.html'),
            new Route('log-out', 'log-out.html')
           
        ]);
    }
    init();
}());



