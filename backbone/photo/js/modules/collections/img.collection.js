
define(function ( require ) {
	
	var ListModel = require('modules/model/list.model');
	
	var ListCollection = Backbone.Collection.extend({
		
		model: ListModel,
		
		feachData: function ( cb ) {
			
			var _this = this;
			
			$.get('data/imageList.json',function ( res ) {
				
				if ( res.errno === 0 ) {
					
					//随机排序
					res.data.sort(function () {
						
						return Math.random() > .5 ? 1 : -1;
						
					});
					
					//数据 添加到 collection中
					_this.add(res.data);
					
					//添加成功执行
					cb && cb();
					
				}
				
			});
			
		}
		
	});
	
	
	//test
//	var list = new ListCollection();
//	
//	list.feachData(function () {
//		
//	});
	
	return ListCollection;
	
});