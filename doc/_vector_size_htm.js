var list_across0 = [
'_contents.htm',
'_reference.htm',
'_index.htm',
'_search.htm',
'_external.htm'
];
var list_up0 = [
'cppad_swig.htm',
'library.htm',
'vector.htm',
'vector_size.htm'
];
var list_down3 = [
'testing.htm',
'swig_xam.i.htm',
'library.htm',
'whats_new_2018.htm'
];
var list_down2 = [
'module.htm',
'a_double.htm',
'vector.htm',
'a_fun.htm',
'sparse.htm',
'error.htm',
'xam.m4.htm'
];
var list_down1 = [
'vector_ctor.htm',
'vector_size.htm',
'vector_set_get.htm'
];
var list_down0 = [
'vector_size_xam.cpp.htm',
'vector_size_xam.m.htm',
'vector_size_xam.pm.htm',
'vector_size_xam.py.htm'
];
var list_current0 = [
'vector_size.htm#Syntax',
'vector_size.htm#v',
'vector_size.htm#n',
'vector_size.htm#Example'
];
function choose_across0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_across0[index-1];
}
function choose_up0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_up0[index-1];
}
function choose_down3(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down3[index-1];
}
function choose_down2(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down2[index-1];
}
function choose_down1(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down1[index-1];
}
function choose_down0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_down0[index-1];
}
function choose_current0(item)
{	var index          = item.selectedIndex;
	item.selectedIndex = 0;
	if(index > 0)
		document.location = list_current0[index-1];
}
