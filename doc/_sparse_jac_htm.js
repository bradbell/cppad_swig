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
'sparse_jac.htm'
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
'sparse_jac_xam.cpp.htm',
'sparse_jac_xam.m.htm',
'sparse_jac_xam.pm.htm',
'sparse_jac_xam.py.htm'
];
var list_current0 = [
'sparse_jac.htm#Syntax',
'sparse_jac.htm#module_ref',
'sparse_jac.htm#Purpose',
'sparse_jac.htm#sparse_jac_for',
'sparse_jac.htm#sparse_jac_rev',
'sparse_jac.htm#af',
'sparse_jac.htm#subset',
'sparse_jac.htm#x',
'sparse_jac.htm#pattern',
'sparse_jac.htm#work',
'sparse_jac.htm#n_sweep',
'sparse_jac.htm#Uses Forward',
'sparse_jac.htm#Example'
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
