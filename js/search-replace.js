    function changeLinkBaidu()

    {

    document.getElementById('search').action="https://www.baidu.com/baidu"
	
	document.getElementById('bar').name="word"

    document.getElementById('search').target="_blank"

    }
	
	function changeLinkSougou()
	
	{
		document.getElementById('search').action="https://www.sogou.com/sogou"
		
		document.getElementById('bar').name="word"
		
		document.getElementById('search').target="_blank"
	}
	
	function changeLinkGoogle()
	
	{
		document.getElementById('search').action="http://www.google.com/search?q=%s"
		
		document.getElementById('bar').name="q"
		
		document.getElementById('search').target="_blank"
	}
	
	function changeLinkBing()
	
	{
		document.getElementById('search').action="https://www.bing.com/search?q=%s"
		
		document.getElementById('bar').name="q"
		
		document.getElementById('search').target="_blank"
	}