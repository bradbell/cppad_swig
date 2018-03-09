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
'hes_sparsity.htm'
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
'sparse_hes_pattern_xam.cpp.htm',
'sparse_hes_pattern_xam.m.htm',
'sparse_hes_pattern_xam.pm.htm',
'sparse_hes_pattern_xam.py.htm'
];
var list_current0 = [
'hes_sparsity.htm#Syntax',
'hes_sparsity.htm#Purpose',
'hes_sparsity.htm#x',
'hes_sparsity.htm#af',
'hes_sparsity.htm#select_domain',
'hes_sparsity.htm#select_range',
'hes_sparsity.htm#pattern_out',
'hes_sparsity.htm#Sparsity for Component Wise Hessian',
'hes_sparsity.htm#Example'
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
