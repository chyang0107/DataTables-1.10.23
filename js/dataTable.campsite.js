$(document).ready(function() {
    // $('a[data-toggle="tab"]').on( 'shown.bs.tab', function (e) {
    //     $.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
    // });

    $(document).on('shown.bs.tab', 'a[data-toggle="tab"]', function (e) {
        $.fn.dataTable.tables({ visible: true, api: true }).columns.adjust();
    });
    
    $('#example').DataTable({
        language: {
            searchBuilder: {
                title: ' Data Filter'
            }
        },
        buttons: [ 'searchBuilder' ],
        "ajax": {url: "./data/dataCampsiteFeb092021.txt",
                 dataSrc:'data'   
        },
        "deferRender": true,
        "dom": 'Qr<"wrapper"Blipt>',
        buttons: [
            'csv',{
                text: 'PDF',
                extend: 'print',
                title: 'Hello',
                messageTop: 'This print was produced using the Print button for DataTables'
            }
        ],
        "scrollY": 800,
        "scrollX": true
    });
    $('#exampleBuilding').DataTable({
        "ajax": {url: "./data/dataBuildingFeb2021.txt",
                 dataSrc:'data'   
        },
        
    });

});
