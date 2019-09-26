/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

define([
    'jquery',
    'mage/smart-keyboard-handler',
    'mage/mage',
    'mage/ie-class-fixer',
    'owlcarousel',
    'domReady!'
], function ($, keyboardHandler) {
    'use strict';

    if ($('body').hasClass('checkout-cart-index')) {
        if ($('#co-shipping-method-form .fieldset.rates').length > 0 &&
            $('#co-shipping-method-form .fieldset.rates :checked').length === 0
        ) {
            $('#block-shipping').on('collapsiblecreate', function () {
                $('#block-shipping').collapsible('forceActivate');
            });
        }
    }

    $('.cart-summary').mage('sticky', {
        container: '#maincontent'
    });

    $('.panel.header > .header.links').clone().appendTo('#store\\.links');

    $(".wrap__slider").owlCarousel(
        {
            nav: true, // Show next and prev buttons
            navText: ["<i class='fa fa-chevron-circle-left' aria-hidden='true'></i>","<i class='fa fa-chevron-circle-right' aria-hidden='true'></i>"], //show prev next
            dots: true,
            loop: true,
            autoplay: true, //Set AutoPlay
            autoplayHoverPause: true, //stop when mouse on carousel
            items: 1
        });

    keyboardHandler.apply();
});