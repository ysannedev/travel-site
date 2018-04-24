import $ from 'jquery';
import waypoints from '../../../node_modules/waypoints/lib/noframework.waypoints.min';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
    constructor() {
        this.lazyImages = $('.lazyload');
        this.siteHeader = $('.site-header');
        this.siteHeaderLinks = $('.primary-nav a');
        this.pageSections = $('.page-section');
        this.waypointTrigger = $('.large-hero__title')[0];
        this.createHeaderWaypoint();
        this.highlightHeaderLinks();
        this.addSmoothScroll();
        this.refreshWaypoints();
    }

    refreshWaypoints() {
        this.lazyImages.on('load', function() {
            Waypoint.refreshAll();
        });
    }

    addSmoothScroll() {
        this.siteHeaderLinks.smoothScroll();
    }

    createHeaderWaypoint() {
        var that = this;
        new Waypoint({
            element: that.waypointTrigger,
            handler: function(direction) {
                if (direction === 'down') {
                    that.siteHeader.addClass('site-header--dark');
                } else {
                    that.siteHeader.removeClass('site-header--dark');
                }
            }
        })
    }

    highlightHeaderLinks() {
        var that = this;
        this.pageSections.each(function() {
            var currentSection = this;

            new Waypoint({
                element: currentSection,
                handler: function(direction) {
                    if (direction === 'down') {
                        var currentLink = $(currentSection).attr('data-matching-link');
                        that.siteHeaderLinks.removeClass('is-current-link');
                        $(currentLink).addClass('is-current-link');
                    }
                },
                offset: '18%'
            });

            new Waypoint({
                element: currentSection.nextElementSibling,
                handler: function(direction) {
                    if (direction === 'up') {
                        // console.log('current:');
                        // console.log(currentSection);
                        // console.log('previous:');
                        // console.log(currentSection.previousElementSibling);
                        // console.log('next:');
                        // console.log(currentSection.nextElementSibling);
                        // console.log(' ');
                        var currentLink = $(currentSection).attr('data-matching-link');
                        that.siteHeaderLinks.removeClass('is-current-link');
                        $(currentLink).addClass('is-current-link');
                    }
                },
                offset: '60%'
            });
        });
    }
}

export default StickyHeader;