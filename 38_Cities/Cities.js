"use strict";
function describe_city(city, country = 'Default_Country.') {
    console.log(`${city} is in ${country}`);
}
describe_city('karachi', 'pakistan');
describe_city('tokyo', 'japan');
describe_city('paris');
