$(document).ready(function() {
    $('#example').DataTable({
        initComplete: function () {
            this.api().columns().every( function () {
                var column = this;
                var select = $('<select><option value=""></option></select>')
                    .appendTo( $(column.header()))
                    .on( 'change', function () {
                        var val = $.fn.dataTable.util.escapeRegex(
                            $(this).val()
                        );
 
                        column
                            .search( val ? '^'+val+'$' : '', true, false )
                            .draw();
                    });
                
                $( select ).click( function(e) {
                        e.stopPropagation();
                  });
                column.data().unique().sort().each( function ( d, j ) {
                    select.append( '<option value="'+d+'">'+d.substr(0,30)+'</option>' )
                } );
            } );
        },
        "ajax": {url: "/data/dataCampsiteFeb092021.txt",
                 dataSrc:'dataCampsite'   
        },
        "deferRender": true,
        "dom": 'Qr<"wrapper"lipt>',
        "scrollY": 400,
        "scrollX": true
    });
});

// '<"wrapper"flipt>'