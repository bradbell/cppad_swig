var list_across0 = [
'_contents.htm',
'_reference.htm',
'_index.htm',
'_search.htm',
'_external.htm'
];
var list_up0 = [
'cppad_swig.htm',
'testing.htm',
'run_cmake.sh.htm'
];
var list_down2 = [
'testing.htm',
'swig_xam.i.htm',
'library.htm',
'whats_new_2018.htm'
];
var list_down1 = [
'run_cmake.sh.htm'
];
var list_current0 = [
'run_cmake.sh.htm#Syntax',
'run_cmake.sh.htm#Source Directory',
'run_cmake.sh.htm#System Settings',
'run_cmake.sh.htm#cmake_binary_dir',
'run_cmake.sh.htm#cmake_generator',
'run_cmake.sh.htm#cmake_verbose_makefile',
'run_cmake.sh.htm#cmake_build_type',
'run_cmake.sh.htm#swig_cxx_flags',
'run_cmake.sh.htm#cppad_cxx_flags',
'run_cmake.sh.htm#test_cppad'
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
