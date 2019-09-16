$(function () {
    
    $('#select-object').selectize({
        maxItems: 1,
        highlight: false,
        valueField: 'name',
        searchField: ['name','price', 'description'],
        options: [
            {name: 'Apple', img: 'http://placehold.it/100x100', price: '2$', description: 'Apple fruit'},
            {name: 'Pear', img: 'http://placehold.it/120x120', price: '5$', description: 'Pear fruit'},
            {name: 'Grape', img: 'http://placehold.it/50x50', price: '10$', description: 'Grape berry'}
        ],
        render: {
            option: function(item, escape) {
                return '<div class="option">' +
                        '<span class="option-object" data-id="' + escape(item.name) + '">' +
                            '<span class="object-img-holder">' +
                                (item.img ? '<img class="object-img" src="' + escape(item.img)  : '') + '" alt="">' +
                            '</span>' +
                            '<span class="object-data">' +
                                '<span class="object-data-description mod-bold">' + escape(item.name) + '</span>' +
                                '<span class="object-data-description">' + escape(item.price) + '</span>' +
                                '<span class="object-data-description">' + escape(item.description) + '</span>' +
                            '</span>' +
                        '</span>' +
                    '</div>';
            },
            item: function(item, escape) {
                return '<span class="option-object-value">' + escape(item.name) + '<i class="fa fa-angle-down"><i/></span>';
            }
        }

    });
});

