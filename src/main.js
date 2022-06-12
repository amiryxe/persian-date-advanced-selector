$(document).ready(function () {
    const config = {
        observer: true,
        format: 'YYYY/MM/DD',
        autoClose: true,
        onSelect: function () {
            $("#custom_date").prop("checked", true);
        }
    }

    $(".date-field1").pDatepicker(config);
    $(".date-field2").pDatepicker(config);
});
