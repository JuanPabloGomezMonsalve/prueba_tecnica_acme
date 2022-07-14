function fn() {
    karate.configure('connectTimeout', 10000);
    karate.configure('readTimeout', 10000);

    var baseUrl = karate.properties['baseUrl'] || 'http://api.geonames.org/'
    var user = karate.properties['user'] || 'karate'

 return {
        api: {
           baseUrl: baseUrl
        },
        user: {
            name: user
        }
    };
}