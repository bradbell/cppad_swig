var list_across0 = [
'_contents.htm',
'_reference.htm',
'_index.htm',
'_search.htm',
'_external.htm'
];
var list_up0 = [
'cppad_swig.htm'
];
var list_down0 = [
'testing.htm',
'swig_xam.i.htm',
'library.htm',
'whats_new_2018.htm'
];
var list_current0 = [
'cppad_swig.htm#Purpose',
'cppad_swig.htm#Getting Started',
'cppad_swig.htm#C++ Function Speed',
'cppad_swig.htm#Supporting Packages',
'cppad_swig.htm#Supporting Packages.Required',
'cppad_swig.htm#Supporting Packages.Optional',
'cppad_swig.htm#Source Directory',
'cppad_swig.htm#Support',
'cppad_swig.htm#License',
'cppad_swig.htm#Contents'
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
