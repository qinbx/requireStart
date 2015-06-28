/**
 * Created by krisPro on 15/6/28.
 */
define(['text!../../modules/contentIdea/index.html','widget'],
    function(template,widget){
        function tableWidget(){
            this.cfg = {
                width:"100%",
                updateBtn:null,
                autoRun:false
            };
        }
        tableWidget.prototype=$.extend({},new widget.Widget(),{
            renderUI:function(){
                this.boudingBox = $(template);
            },
            bindUI:function(){
                var that = this;
                if (this.cfg.updateBtn) {
                    this.on('update',this.cfg.updateBtn);
                };
                this.boudingBox.delegate(".updateBtn","click",function(){
                    that.fire('update');
                    //that.destroy();
                })
            },
            syncUI:function(){
                this.boudingBox.css({
                    width:this.cfg.width
                });
            },
            destructor:function(){

            },

            update:function(cfg){
                $.extend(this.cfg,cfg);
                this.render();
                if(this.cfg.autoRun){
                    this.fire('update')
                }
                return this;
            }

        });
        return{
            tableWidget : tableWidget
        }
});