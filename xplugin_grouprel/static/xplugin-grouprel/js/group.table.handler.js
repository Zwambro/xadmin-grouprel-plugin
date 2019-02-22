(function ($) {
    var csrftoken = $.getCookie('csrftoken');
    var static_url = window.__admin_media_prefix__.replace(/xadmin\/$/i, "xplugin-grouprel/");
    var table = $('#ajax-table').DataTable({
        dom: 'Blfrtip',
        ajax: {
            url: datatable_config.ajax.url,
            type: "POST",
            beforeSend: function (xhr, settings) {
                xhr.setRequestHeader("X-CSRFToken", csrftoken);
            }
        },
        language: {
            url: static_url + window.__admin_language_code__ + ".json"
        },
        scrollX: true,
        processing: true,
        serverSide: true,
        select: {
            style: 'multi'
        },
        columnDefs: datatable_config.columns_defs,
        buttons: datatable_config.buttons,
        initComplete: function () {
            if (datatable_config.hasOwnProperty("initComplete")) {
                datatable_config.initComplete()
            }
        },
    });
})(jQuery);