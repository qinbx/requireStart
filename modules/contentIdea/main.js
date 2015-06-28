/**
 * Created by krisPro on 15/6/27.
 */
require.config({
    baseUrl: 'asset/js',
    paths : {
        "jquery" :  "jquery",
        'w1':'../../modules/contentIdea/w1',
        'dataTable':'jquery.dataTables.min',
        'd_colReorder':"dataTables.colReorder.min",
        'd_colVis':"dataTables.colVis.min",
        'd_fixedHeader':"dataTables.fixedHeader.min"
    },
    map:{
        '*':{
            text:'text',
            css: 'css'
        }
    },

    shim:{
        'dataTable':{
            deps:['css!http://cdn.bootcss.com/bootstrap/3.3.5/css/bootstrap.min.css','css!../style/jquery.dataTables.min.css']
        },
        'd_colReorder':['dataTable','css!../style/dataTables.colReorder.min.css'],
        'd_colVis':['dataTable','css!../style/dataTables.colVis.min.css'],
        'd_fixedHeader':['dataTable','css!../style/dataTables.fixedHeader.min.css'],
        'w1':['d_colReorder','d_colVis','d_fixedHeader'],

    }
})
require(["jquery",'w1'],function($,w1){
    var args={};
    new w1.tableWidget().update({
        width:'100%',
        table:null,
        url:"",
        args:"",
        updateBtn:function(){
            this.table=$('#example').DataTable({
                "bDestroy":true,
                "dom": 'C<"clear">Rlrtip'
            });
            new $.fn.dataTable.FixedHeader( this.table );
        },
        autoRun:true
    })

})
