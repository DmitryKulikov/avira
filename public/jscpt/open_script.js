function openImage(urlimg,width,height) {
// var temp=new Image();temp.src=urlimg;
 myWin= open('','displayWindow','width='+width+',height='+height+'');
 myWin.document.open();
 myWin.document.write('<html><head><meta http-equiv="content-type" content="text/html; charset=windows-1251">');
 myWin.document.writeln('<title>Авира / Продукция</title>');
 myWin.document.writeln('</head><body bgcolor="#FFFFCC" leftmargin="0" topmargin="0" marginwidth="0" marginheight="0">');
 myWin.document.writeln('<p align="center"><img src='+urlimg+' alt="Продукция" width='+width+' height='+height+'></p>');
 myWin.document.writeln('</body></html>');
 myWin.document.close();
}


