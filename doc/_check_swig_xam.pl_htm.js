var list_across0 = [
'_contents.htm',
'_reference.htm',
'_index.htm',
'_search.htm',
'_external.htm'
];
var list_up0 = [
'cppad_swig.htm',
'swig_xam.i.htm',
'check_swig_xam.pl.htm'
];
var list_down2 = [
'testing.htm',
'swig_xam.i.htm',
'library.htm',
'whats_new_2018.htm'
];
var list_down1 = [
'swig_xam.hpp.htm',
'check_swig_xam.py.htm',
'check_swig_xam.m.htm',
'check_swig_xam.pl.htm'
];
var list_current0 = [
'check_swig_xam.pl.htm#Load the Module',
'check_swig_xam.pl.htm#Initialize Error Count',
'check_swig_xam.pl.htm#factorial_by_value',
'check_swig_xam.pl.htm#message_of_void',
'check_swig_xam.pl.htm#int_class',
'check_swig_xam.pl.htm#int_array_ptr',
'check_swig_xam.pl.htm#int_array_class',
'check_swig_xam.pl.htm#vector_double',
'check_swig_xam.pl.htm#raise_exception',
'check_swig_xam.pl.htm#normal_class',
'check_swig_xam.pl.htm#double_class',
'check_swig_xam.pl.htm#Set Exit Code'
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
