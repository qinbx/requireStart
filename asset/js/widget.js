define(['jquery'],function($){
	function Widget(){
		this.boudingBox = null;
	}
	Widget.prototype={
		on:function(type,handler){
			if (typeof this.handlers[type]=='undefined') {
				this.handlers[type]=[];
			}
			this.handlers[type].push(handler);
			return this;
		},
		fire:function(type,data){
			if (this.handlers[type] instanceof Array) {
				var handlers = this.handlers[type];
				for(var i=0,len=handlers.length;i<len;i++){
					handlers[i](data);
				}
			};
		},
		render:function(container){
			this.renderUI();
			this.handlers={};
			this.bindUI();
			this.syncUI();
			$(container||document.body).append(this.boudingBox);
		},
		destroy:function(){
			this.destructor();
			this.boudingBox.off();
			this.boudingBox.remove();
		},
		renderUI:function(){},
		bindUI:function(){},
		syncUI:function(){},
		destructor:function(){}
	}
	return{
		Widget:Widget
	}
})