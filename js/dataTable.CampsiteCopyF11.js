$(document).ready(function() {
    
    $('#example').DataTable({
        // initComplete: function () {
        //     this.api().columns().every( function () {
        //         var column = this;
        //         var select = $('<select><option value=""></option></select>')
        //             .appendTo( $(column.header()))
        //             .on( 'change', function () {
        //                 var val = $.fn.dataTable.util.escapeRegex(
        //                     $(this).val()
        //                 );
 
        //                 column
        //                     .search( val ? '^'+val+'$' : '', true, false )
        //                     .draw();
        //             });
                
        //         $( select ).click( function(e) {
        //                 e.stopPropagation();
        //           });
        //         column.data().unique().sort().each( function ( d, j ) {
        //             select.append( '<option value="'+d+'">'+d.substr(0,30)+'</option>' )
        //         } );
        //     } );
        // },
        language: {
            searchBuilder: {
                title: ' Data Filter'
            }
        },
        buttons: [ 'searchBuilder' ],
        "ajax": {url: "/data/dataCampsiteFeb092021.txt",
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
});

// '<"wrapper"flipt>'