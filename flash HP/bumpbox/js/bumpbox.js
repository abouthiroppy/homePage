/* <![CDATA[ */
window.addEvent('domready',function(){
$$('.bumpbox').addEvent('click',function(e){
	e = new Event(e).stop();

	if($('grow') != null){
		$('grow').dispose();
	}

	var content = this.get('href');
	
	maxw = 0;
	maxh = 0;
	var title = "";
	
	if(this.get('rel')!= null){
		var tmp = this.get('rel').split(",");	
		maxw = tmp[0];
		maxh = tmp[1];
	}
	
	if(this.get('title') != null){
		title = this.get('title');
	}
	
	if(maxw == 0){	maxw = 640;	}
	if(maxh == 0){	maxh = 480;	}

	w = window.getSize().x.toInt();
	h = window.getSize().y.toInt();
	s = window.getScrollTop();
	var middleH = (w) / 2;
	var middleV = (h) / 2;
	var endleft = (w-maxw) / 2;
	var endtop = ((h - maxh) / 2) + s;
	

	var el = new Element('div', {
		 'styles':{
			 width: '1px',
			 height: '1px',
			 position:'absolute',
			 border:'10px solid #303132',
			 background:'#222',
			 left:middleH +"px",
			 top:middleV + "px",
			 cursor:'pointer',
			 display:'block',
			 'z-index':100000
			 
			
		},
		'id': 'grow'
	})


	bg = new Element('div',{
	'styles':{
		background:'#000',
		width:'100%',
		height:'100%',
		opacity:'0.9',
		position:'absolute',
		top: window.getScrollTop(),
		left: 0
	},
	'id':'bg'
	})
	
	bg.inject(document.body);
	el.injectInside(document.body);
	
	window.addEvent('scroll',function(){
		$(bg).setStyle('top',window.getScrollTop());
	})

	var cl = new Element('img',{
		'styles':{
			width:'24px',
			height:'24px',
			position:'absolute',
			top:'-20px',
			right:'-20px',
			'z-index':'100000'
		},
		'src':'closed.png',
		'id':'closer'
	})	
	
	cl.injectInside(el);
	
	
	var eff3 = new Fx.Morph('grow', { transition: Fx.Transitions.linear, duration: 1200, wait:'link',onComplete:function(){
		
		el.dispose();
  }
							});
	
	
	var eff2 = new Fx.Morph('grow', { transition: Fx.Transitions.Bounce.easeOut, duration: 1200, wait:'link', onComplete:function(){
		
		el.dispose();
	}
	 });
	
	
	cl.addEvent('click',function(e){
			e = new Event(e).stop();
		
			bg.dispose();
			$(el).getChildren().dispose();
			eff2.start({
			  'width':[maxw,1],
			  'height':[maxh,1],
			  'left': [endleft,middleH],
			  'top':  [endtop, middleV+s]
			 })
		})
	
	/*	$(el).addEvent('click',function(e){
			e = new Event(e).stop();
			bg.dispose();
			this.getChildren().dispose();
			eff2.start({
			  'width':[maxw,1],
			  'height':[maxh,1],
			  'left': [endleft,middleH],
			  'top':  [endtop, middleV+s]
			 })
		})
	*/	

	
	var eff = new Fx.Morph('grow', { transition: Fx.Transitions.Bounce.easeOut, duration: 1200, wait:'link', onComplete:function(){
	
		if(content.indexOf(".jpg") != -1 || content.indexOf(".gif") != -1 || content.indexOf(".png") != -1){
			var img = new Element('img',{				
				'styles': {
					width: maxw,
					height: maxh
				},
				'src': content
			})
			
			img.inject(el);
		}
		
		if(content.indexOf("http") != -1  && content.indexOf('.flv') == -1 && content.indexOf(".pdf") == -1 && content.indexOf(".swf") == -1 
		    && content.indexOf(".jpg") == -1 && content.indexOf(".gif") == -1 && content.indexOf(".png") == -1){
			
				var p = new Element('div');
				p.setStyle('display','block');
				p.setStyle('overflow','auto');
				p.setStyle('padding','20px');
				p.setStyle('height',maxh-40);
				p.setStyle('width',maxw-40);
				
				p.inject(el);
				
				var x = new IFrame();
				x.setStyle('overflow','auto');
				x.set('frameborder','0');
				x.setStyle('width',maxw-40);
				x.setStyle('height',maxh-40);
				x.src = content;
				x.inject(p);
				
				
			
		}
		
		if(content.indexOf(".pdf") != -1){
		
		var div = new Element('div',{
				'styles':{
					padding:'20px',
					height: maxh-40,
					width:maxw-40
				}
			})
			
			div.inject(el);
			
			var x = new IFrame();
			x.src = content;
			x.setStyle('width','100%');
			x.setStyle('height','100%');
			x.inject(div);
		}
		
		if(content.indexOf(".swf") != -1){
		
			var div = new Element('div',{
				'styles':{
					padding:'20px',
					height: maxh-40,
					width:maxw-40
				}
			})
			
			div.inject(el);
			
			var obj = new Swiff(content, {
				id: 'video',
				width: maxw-40,
				height: maxh-40,
				container: div
			})	
		}
		
		if(content.indexOf(".flv") != -1){x
			
			var div = new Element('div',{
				'styles':{
					padding:'20px',
					height: maxh-40,
					width:maxw-40
				}
			})
			
			div.inject(el);
		
			var f =flowplayer(div, "flowplayer.swf", { 
   			 buffering : true,      
			 autoplay: true,
			 clip: content,
			 wmode: 'transparent'
    		});
		}
		
		if(title != ""){
			var t = new Element('div',{
			'styles':{
				'height':'30px',
				'width': maxw-20,
				'background':'#000',
				'padding':'10px',
				'position':'absolute',
				'bottom':'-50px',
				'left':'-10px',
				'color':'#eee',
				'border-bottom':'10px solid #303132',
				'border-right':'10px solid #303132',
				'border-left':'10px solid #303132'
			}
		})
			t.set('html',title);
			t.inject(el);
		}
		
	}});
	
	eff.start({
		  'width':[1,maxw],
		  'height':[1,maxh],
		  'left': [middleH,endleft],
		  'top':  [middleV+s, endtop]
		 });
 	});
})
/* ]]> */
