var list_across0 = [
'_contents.htm',
'_reference.htm',
'_index.htm',
'_search.htm',
'_external.htm'
];
var list_up0 = [
'cppad_swig.htm',
'whats_new_2018.htm',
'whats_new_2017.htm'
];
var list_down2 = [
'testing.htm',
'swig_xam.i.htm',
'library.htm',
'whats_new_2018.htm'
];
var list_down1 = [
'whats_new_2017.htm'
];
var list_current0 = [
'whats_new_2017.htm#02-16',
'whats_new_2017.htm#02-25',
'whats_new_2017.htm#02-24',
'whats_new_2017.htm#02-23',
'whats_new_2017.htm#02-22',
'whats_new_2017.htm#02-21',
'whats_new_2017.htm#02-20',
'whats_new_2017.htm#01-18',
'whats_new_2017.htm#01-17',
'whats_new_2017.htm#01-16',
'whats_new_2017.htm#01-15',
'whats_new_2017.htm#01-14',
'whats_new_2017.htm#01-13',
'whats_new_2017.htm#01-12',
'whats_new_2017.htm#01-11',
'whats_new_2017.htm#01-10'
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
