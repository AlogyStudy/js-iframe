define(function(e){var o=(_.extend({},Backbone.Events),e("view/layer/layer.view")),n=e("view/list/list.view"),t=e("modules/collections/img.collection"),i=new t,r=new o({collection:i,el:$("#layer")}),l=(new n({collection:i,el:$("#photo-wrap")}),Backbone.Router.extend({routes:{"layer/:id":"showLayer","*other":"showList"},showLayer:function(e){r.render(e),$("#photo-wrap").hide(),$("#layer").show()},showList:function(){$("#photo-wrap").show(),$("#layer").hide()}}));return{showApp:function(){new l,Backbone.history.start()}}});