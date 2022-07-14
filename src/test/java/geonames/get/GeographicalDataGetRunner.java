package geonames.get;

import com.intuit.karate.junit5.Karate;

public class GeographicalDataGetRunner{
    @Karate.Test
    Karate geographicalDataGet(){
        return Karate.run().relativeTo(getClass());
    }
}