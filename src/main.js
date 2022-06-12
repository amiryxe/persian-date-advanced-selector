$(document).ready(function () {

    $(".date-field1").pDatepicker({
        format: 'YYYY/MM/DD',
        autoClose: true,
        onSelect: function (unix) {
            $("#custom_date").prop("checked", true);
        }
    });

    $(".date-field2").pDatepicker({
        format: 'YYYY/MM/DD',
        autoClose: true,
        onSelect: function (unix) {
            $("#custom_date").prop("checked", true);
        }
    });
});
