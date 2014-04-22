
(
        function() {
            var datastorekey = {};

            $(
                    function() {
                        $('.square').click(gallery);
                    }
            );

            // ===================================

            var gallery = function(ev) {
                ev.preventDefault();
                $('.gallery-pop').imageloader(
                        {
                            background: true,
                            callback: function(elm) {
                                $(elm).fadeIn();
                            }
                        }
                );
            };

        }
)();