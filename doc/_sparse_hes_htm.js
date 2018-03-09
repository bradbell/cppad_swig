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
'sparse.htm',
'sparse_hes.htm'
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
'sparse_rc.htm',
'sparse_rcv.htm',
'jac_sparsity.htm',
'hes_sparsity.htm',
'sparse_jac.htm',
'sparse_hes.htm'
];
var list_down0 = [
'sparse_hes_xam.cpp.htm',
'sparse_hes_xam.m.htm',
'sparse_hes_xam.pm.htm',
'sparse_hes_xam.py.htm'
];
var list_current0 = [
'sparse_hes.htm#Syntax',
'sparse_hes.htm#module_ref',
'sparse_hes.htm#Purpose',
'sparse_hes.htm#af',
'sparse_hes.htm#subset',
'sparse_hes.htm#x',
'sparse_hes.htm#r',
'sparse_hes.htm#pattern',
'sparse_hes.htm#work',
'sparse_hes.htm#n_sweep',
'sparse_hes.htm#Uses Forward',
'sparse_hes.htm#Example'
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
