"use strict";
function describe_city(city, country = "Default Country") {
    console.log(` ${city} is in ${country}`);
}
describe_city("Karachi", "Pakistan");
describe_city("Riyadh", "Saudia Arabia");
describe_city("Washington dc");
