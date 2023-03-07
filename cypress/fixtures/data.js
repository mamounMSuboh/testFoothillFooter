const selectors = require("./selectors.json");
module.exports.navigators = [
    {
        xpath: selectors.navigate_Home,
        name: 'Home',
        destinationXpath: selectors.home_page
    },
    {
        xpath: selectors.navigate_about_us,
        name: 'About Us',
        destinationXpath: selectors.who_we_are
    },
    {
        xpath: selectors.career,
        name: 'Careers',
        destinationXpath: selectors.career_shadow
    },
    {
        xpath: selectors.contact_us,
        name: 'Contact Us',
        destinationXpath: selectors.contact_us_page
    }
]
module.exports.home = [
    {
        xpath: selectors.our_client,
        name: 'Our Clients',
        destinationXpath: selectors.our_clients_Container
    },
    {
        xpath: selectors.our_testimonials,
        name: 'Our Testimonials',
        destinationXpath: selectors.our_test_container
    },
]
module.exports.aboutUS = [
    {
        xpath: selectors.how_we_are,
        name: 'Who we are',
        destinationXpath: selectors.who_we_are
    },
    {
        xpath: selectors.meet_team,
        name: 'Meet the Team',
        destinationXpath: selectors.meet_the_team
    },
    {
        xpath: selectors.our_advantages,
        name: 'Our Advantages',
        destinationXpath: selectors.advantages_container
    },
]