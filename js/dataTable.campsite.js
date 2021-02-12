$(document).ready(function() {
    $('a[data-toggle="tab"]').on( 'shown.bs.tab', function (e) {
        $.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
    });
    
    var ajaxOKParkData = {
        campsite :{ajax: "./data/dataCampsiteFeb092021.txt"},
        building: {ajax: "./data/dataBuildingFeb2021.txt"}
    }


    var commonSettings = {
        language: {
            searchBuilder: {
                title: ' Data Filter'
            }
        },
        buttons: [ 'searchBuilder' ],
        "deferRender": true,
        "dom": 'Qr<"wrapper"Blipt>',
        buttons: [
            'csv',{
                text: 'PDF',
                extend: 'print',
                title: 'Hello',
                messageTop: 'The print button is to print the query by your browser'
            }
        ],
        "scrollY": 800,
        "scrollX": true
    };
    
    var dataCampsite = Object.assign(commonSettings, ajaxOKParkData['campsite'])
    $('#example').DataTable(dataCampsite)
    var dataBuilding = Object.assign(commonSettings,ajaxOKParkData['building'])
    $('#exampleBuilding').DataTable(dataBuilding)

    // $('#example').DataTable({
    //     language: {
    //         searchBuilder: {
    //             title: ' Data Filter'
    //         }
    //     },
    //     buttons: [ 'searchBuilder' ],
    //     "ajax": {url: "./data/dataCampsiteFeb092021.txt",
    //              dataSrc:'data'   
    //     },
    //     "deferRender": true,
    //     "dom": 'Qr<"wrapper"Blipt>',
    //     buttons: [
    //         'csv',{
    //             text: 'PDF',
    //             extend: 'print',
    //             title: 'Hello',
    //             messageTop: 'This print was produced using the Print button for DataTables'
    //         }
    //     ],
    //     "scrollY": 800,
    //     "scrollX": true
    // });
    // $('#exampleBuilding').DataTable({
    //     "ajax": {url: "./data/dataBuildingFeb2021.txt",
    //              dataSrc:'data'   
    //     },
        
    // });

});
