// ------------------------------------------------------------ 
// Copyright (C) Bradley M. Bell 1998-2015, All rights reserved 
// ------------------------------------------------------------ 
Keyword = 
[
'cppad_swig  cppad_swig-20180627: A C++ AD Library with a Swig Interface  ',' purpose getting started function speed supporting packages required optional source directory license contents ',
'testing  Running the Cppad Swig Tests  ',' configuration available binary directory check octave cppad_swig_lib check_swig_xam check_lib ',
'run_cmake.sh  Get Cppad and Configure Cppad Swig for A system  ',' syntax source directory settings cmake_binary_dir cmake_generator cmake_verbose_makefile cmake_build_type swig_cxx_flags cppad_cxx_flags test_cppad ',
'swig_xam.i  Example Using Swig with C++  ',' includes py_swig_xam m_swig_xam pl_swig_xam exception int_class int_array_ptr int_array_class vector_double swig_xam.hpp double_class ',
'swig_xam.hpp  Example C++ Library That is Called by Swig  ',' ',
'swig_xam_function  Swig Example: C++ Function Specifications  ',' prototypes factorial_by_value message_of_void add_by_ptr max_array_by_ptr max_std_vector_double raise_exception ',
'swig_xam_normal_class  Swig Example: C++ Class  ',' prototypes normal_class() normal_class(value) value() addition equality ',
'swig_xam_template_class  Swig Example: C++ Template Class  ',' prototypes template_class(value) value() addition equality ',
'swig_xam_function.cpp  Swig Example: C++ Function Implementation  ',' ',
'swig_xam_normal_class.cpp  Swig Example: C++ Class Implementation  ',' ',
'swig_xam_template_class.hpp  Swig Example: C++ Template Class Implementation  ',' ',
'check_swig_xam.py  Swig Example / Test: Python Script  ',' load the module initialize error count factorial_by_value message_of_void int_class int_array_ptr int_array_class vector_double raise_exception normal_class double_class set exit code ',
'check_swig_xam.m  Swig Example / Test: Octave Script  ',' load the module initialize error count factorial_by_value message_of_void int_class int_array_ptr int_array_class vector_double raise_exception normal_class double_class set exit code ',
'check_swig_xam.pl  Swig Example / Test: Perl Script  ',' add current directory search path load the module initialize error count factorial_by_value message_of_void int_class int_array_ptr int_array_class vector_double raise_exception normal_class double_class set exit code ',
'library  The Cppad Swig Library  ',' ',
'module  Cppad Swig Modules and Languages  ',' name module_ref ',
'a_double  Cppad Swig AD Scalars  ',' ',
'vector  Cppad Swig Vectors  ',' ',
'a_fun  Cppad Swig AD Functions  ',' ',
'sparse  Cppad Swig Sparse Calculation  ',' ',
'error  Cppad Swig Error Messaging  ',' ',
'a_double_ctor  The a_double Constructor  ',' syntax purpose module_ref ad_other example ',
'a_double_unary_op  a_double Unary Plus and Minus  ',' syntax ay octave example ',
'a_double_property  Properties of an a_double Object  ',' syntax ad value parameter variable near_equal example ',
'a_double_ad_binary  ad_double Binary Operators with an AD Result  ',' syntax ay az example ',
'a_double_compare  ad_double Comparison Operators  ',' syntax ay example ',
'a_double_assign  ad_double Assignment Operators  ',' syntax ay example ',
'a_double_unary_fun  Unary Functions with AD Result  ',' syntax ay example ',
'a_double_cond_assign  AD Conditional Assignment  ',' syntax purpose target cop left right if_true if_false example ',
'a_double_unary_op_xam.cpp  C++: a_double Unary Plus and Minus: Example and Test  ',' ',
'a_double_unary_op_xam.m  Octave: a_double Unary Plus and Minus: Example and Test  ',' ',
'a_double_unary_op_xam.pm  Perl: a_double Unary Plus and Minus: Example and Test  ',' ',
'a_double_unary_op_xam.py  Python: a_double Unary Plus and Minus: Example and Test  ',' ',
'a_double_property_xam.cpp  C++: a_double Properties: Example and Test  ',' ',
'a_double_property_xam.m  Octave: a_double Properties: Example and Test  ',' ',
'a_double_property_xam.pm  Perl: a_double Properties: Example and Test  ',' ',
'a_double_property_xam.py  Python: a_double Properties: Example and Test  ',' ',
'a_double_ad_binary_xam.cpp  C++: a_double Binary Operators With AD Result: Example and Test  ',' ',
'a_double_ad_binary_xam.m  Octave: a_double Binary Operators With AD Result: Example and Test  ',' ',
'a_double_ad_binary_xam.pm  Perl: a_double Binary Operators With AD Result: Example and Test  ',' ',
'a_double_ad_binary_xam.py  Python: a_double Binary Operators With AD Result: Example and Test  ',' ',
'a_double_compare_xam.cpp  C++: a_double Comparison Operators: Example and Test  ',' ',
'a_double_compare_xam.m  Octave: a_double Comparison Operators: Example and Test  ',' ',
'a_double_compare_xam.pm  Perl: a_double Comparison Operators: Example and Test  ',' ',
'a_double_compare_xam.py  Python: a_double Comparison Operators: Example and Test  ',' ',
'a_double_assign_xam.cpp  C++: a_double Assignment Operators: Example and Test  ',' ',
'a_double_assign_xam.m  Octave: a_double Assignment Operators: Example and Test  ',' ',
'a_double_assign_xam.pm  Perl: a_double Assignment Operators: Example and Test  ',' ',
'a_double_assign_xam.py  Python: a_double Assignment Operators: Example and Test  ',' ',
'a_double_unary_fun_xam.cpp  C++: a_double Unary Functions with AD Result: Example and Test  ',' ',
'a_double_unary_fun_xam.m  Octave: a_double Unary Functions with AD Result: Example and Test  ',' ',
'a_double_unary_fun_xam.pm  Perl: a_double Unary Functions with AD Result: Example and Test  ',' ',
'a_double_unary_fun_xam.py  Python: a_double Unary Functions with AD Result: Example and Test  ',' ',
'a_double_cond_assign_xam.cpp  C++: a_double Conditional Assignment: Example and Test  ',' ',
'a_double_cond_assign_xam.m  Octave: a_double Conditional Assignment: Example and Test  ',' ',
'a_double_cond_assign_xam.pm  Perl: a_double Conditional Assignment: Example and Test  ',' ',
'a_double_cond_assign_xam.py  Python: a_double Conditional Assignment: Example and Test  ',' ',
'vector_ctor  Cppad Swig Vector Constructors  ',' syntax purpose module_ref vec_bool vec_int vec_double vec_a_double example ',
'vector_size  Size of a Vector  ',' syntax example ',
'vector_set_get  Setting and Getting Vector Elements  ',' syntax element_type u octave perl example ',
'vector_size_xam.cpp  C++: Size of Vectors: Example and Test  ',' ',
'vector_size_xam.m  Octave: Size of Vectors: Example and Test  ',' ',
'vector_size_xam.pm  Perl: Size of Vectors: Example and Test  ',' ',
'vector_size_xam.py  Python: Size of Vectors: Example and Test  ',' ',
'vector_set_get_xam.cpp  C++: Setting and Getting Vector Elements: Example and Test  ',' ',
'vector_set_get_xam.m  Octave: Setting and Getting Vector Elements: Example and Test  ',' ',
'vector_set_get_xam.pm  Perl: Setting and Getting Vector Elements: Example and Test  ',' ',
'vector_set_get_xam.py  Python: Setting and Getting Vector Elements: Example and Test  ',' ',
'independent  Declare Independent Variables and Start Recording  ',' syntax module_ref purpose example ',
'abort_recording  Abort Recording  ',' syntax purpose module_ref example ',
'a_fun_ctor  Stop Current Recording and Store in an a_fun Object  ',' syntax module_ref ay af example ',
'a_fun_jacobian  Jacobian of an AD Function  ',' syntax af f(x) example ',
'a_fun_hessian  Hessian of an AD Function  ',' syntax af f(x) g(x) w example ',
'a_fun_forward  Forward Mode AD  ',' syntax taylor coefficient af f(x) x(t) y(t) p xp yp example ',
'a_fun_reverse  Reverse Mode AD  ',' syntax af notation f(x) x(t) y(t) g(t) q yq xq example ',
'a_fun_optimize  Optimize an AD Function  ',' syntax purpose af example ',
'a_fun_property  Properties of an AD Function  ',' syntax af size_ind size_dep size_var size_op example ',
'a_fun_abort_xam.cpp  C++: Abort Recording a_double Operations: Example and Test  ',' ',
'a_fun_abort_xam.m  Octave: Abort Recording a_double Operations: Example and Test  ',' ',
'a_fun_abort_xam.pm  Perl: Abort Recording a_double Operations: Example and Test  ',' ',
'a_fun_abort_xam.py  Python: Abort Recording a_double Operations: Example and Test  ',' ',
'a_fun_jacobian_xam.cpp  C++: Dense Jacobian Using AD: Example and Test  ',' ',
'a_fun_jacobian_xam.m  Octave: Dense Jacobian Using AD: Example and Test  ',' ',
'a_fun_jacobian_xam.pm  Perl: Dense Jacobian Using AD: Example and Test  ',' ',
'a_fun_jacobian_xam.py  Python: Dense Jacobian Using AD: Example and Test  ',' ',
'a_fun_hessian_xam.cpp  C++: Dense Hessian Using AD: Example and Test  ',' ',
'a_fun_hessian_xam.m  Octave: Dense Hessian Using AD: Example and Test  ',' ',
'a_fun_hessian_xam.pm  Perl: Dense Hessian Using AD: Example and Test  ',' ',
'a_fun_hessian_xam.py  Python: Dense Hessian Using AD: Example and Test  ',' ',
'a_fun_forward_xam.cpp  C++: Forward Mode AD: Example and Test  ',' ',
'a_fun_forward_xam.m  Octave: Forward Mode AD: Example and Test  ',' ',
'a_fun_forward_xam.pm  Perl: Forward Mode AD: Example and Test  ',' ',
'a_fun_forward_xam.py  Python: Forward Mode AD: Example and Test  ',' ',
'a_fun_reverse_xam.cpp  C++: Reverse Mode AD: Example and Test  ',' ',
'a_fun_reverse_xam.m  Octave: Reverse Mode AD: Example and Test  ',' ',
'a_fun_reverse_xam.pm  Perl: Reverse Mode AD: Example and Test  ',' ',
'a_fun_reverse_xam.py  Python: Reverse Mode AD: Example and Test  ',' ',
'a_fun_optimize_xam.cpp  C++: Optimize an a_fun: Example and Test  ',' ',
'a_fun_optimize_xam.m  Octave: Optimize an a_fun: Example and Test  ',' ',
'a_fun_optimize_xam.pm  Perl: Optimize an a_fun: Example and Test  ',' ',
'a_fun_optimize_xam.py  Python: Optimize an a_fun: Example and Test  ',' ',
'a_fun_property_xam.cpp  C++: a_fun Properties: Example and Test  ',' ',
'a_fun_property_xam.m  Octave: a_fun Properties: Example and Test  ',' ',
'a_fun_property_xam.pm  Perl: a_fun Properties: Example and Test  ',' ',
'a_fun_property_xam.py  Python: a_fun Properties: Example and Test  ',' ',
'sparse_rc  Sparsity Patterns  ',' syntax module_ref nr nc nnz resize put k row col row_major col_major example ',
'sparse_rcv  Sparse Matrices  ',' syntax module_ref pattern matrix nr nc nnz put k row col val row_major col_major example ',
'jac_sparsity  Jacobian Sparsity Patterns  ',' syntax purpose for_jac_sparsity rev_jac_sparsity af pattern_in pattern_out entire example ',
'hes_sparsity  Hessian Sparsity Patterns  ',' syntax purpose af select_domain select_range pattern_out component wise example ',
'sparse_jac  Computing Sparse Jacobians  ',' syntax module_ref purpose sparse_jac_for sparse_jac_rev af subset pattern work n_sweep uses forward example ',
'sparse_hes  Computing Sparse Hessians  ',' syntax module_ref purpose af subset pattern work n_sweep uses forward example ',
'sparse_rc_xam.cpp  C++: Sparsity Patterns: Example and Test  ',' ',
'sparse_rc_xam.m  Octave: Sparsity Patterns: Example and Test  ',' ',
'sparse_rc_xam.pm  Perl: Sparsity Patterns: Example and Test  ',' ',
'sparse_rc_xam.py  Python: Sparsity Patterns: Example and Test  ',' ',
'sparse_rcv_xam.cpp  C++: Sparsity Patterns: Example and Test  ',' ',
'sparse_rcv_xam.m  Octave: Sparsity Patterns: Example and Test  ',' ',
'sparse_rcv_xam.pm  Perl: Sparsity Patterns: Example and Test  ',' ',
'sparse_rcv_xam.py  Python: Sparsity Patterns: Example and Test  ',' ',
'sparse_jac_pattern_xam.cpp  C++: Jacobian Sparsity Patterns: Example and Test  ',' ',
'sparse_jac_pattern_xam.m  Octave: Jacobian Sparsity Patterns: Example and Test  ',' ',
'sparse_jac_pattern_xam.pm  Perl: Jacobian Sparsity Patterns: Example and Test  ',' ',
'sparse_jac_pattern_xam.py  Python: Jacobian Sparsity Patterns: Example and Test  ',' ',
'sparse_hes_pattern_xam.cpp  C++: Hessian Sparsity Patterns: Example and Test  ',' ',
'sparse_hes_pattern_xam.m  Octave: Hessian Sparsity Patterns: Example and Test  ',' ',
'sparse_hes_pattern_xam.pm  Perl: Hessian Sparsity Patterns: Example and Test  ',' ',
'sparse_hes_pattern_xam.py  Python: Hessian Sparsity Patterns: Example and Test  ',' ',
'sparse_jac_xam.cpp  C++: Computing Sparse Jacobians: Example and Test  ',' ',
'sparse_jac_xam.m  Octave: Computing Sparse Jacobians: Example and Test  ',' ',
'sparse_jac_xam.pm  Perl: Computing Sparse Jacobians: Example and Test  ',' ',
'sparse_jac_xam.py  Python: Computing Sparse Jacobians: Example and Test  ',' ',
'sparse_hes_xam.cpp  C++: Hessian Sparsity Patterns: Example and Test  ',' ',
'sparse_hes_xam.m  Octave: Hessian Sparsity Patterns: Example and Test  ',' ',
'sparse_hes_xam.pm  Perl: Hessian Sparsity Patterns: Example and Test  ',' ',
'sparse_hes_xam.py  Python: Hessian Sparsity Patterns: Example and Test  ',' ',
'error_message  Exception Handling  ',' syntax try block catch cppad errors not thread safe example ',
'error_message_xam.cpp  C++: Cppad Swig Exception Handling: Example and Test  ',' ',
'error_message_xam.m  Octave: Cppad Swig Exception Handling: Example and Test  ',' ',
'error_message_xam.pm  Perl: Cppad Swig Exception Handling: Example and Test  ',' ',
'error_message_xam.py  Python: Cppad Swig Exception Handling: Example and Test  ',' ',
'xam.m4  Generating Language Specific Example Files Using M4 Macros  ',' syntax command directory xam_file_name includes output ',
'lang_m4  Language Specific M4 Macros  ',' purpose convention no arguments ext_ true_ false_ and_ not_ end_ c_ eos_ try_ catch_ eof_ module_ one constructor with that are statements var_ member_ stringequal_ assignment newvar_ assign_ andassign_ vector operations vecset_ vecget_ function beginboolfun_ return_ control flow for_ if_ ',
'xam_file_name.m4  Function and File Naming  ',' syntax functionname_ lang_file_name assumptions ',
'header.m4  Comment Showing How to Generate This Output  ',' syntax xam_file_name assumptions ',
'lang_name.m4  Language Name  ',' syntax result assumption ',
'omhelp.m4  M4 Macro That Include Omhelp to Display Source Code  ',' syntax functionname_ omhelp_title omhelp_tag assumption lang_m4 lang_file_name formatting ',
'whats_new_2018  Cppad Swig Changes During 2018  ',' previous years 03-08 02-28 ',
'whats_new_2017  Cppad Swig Changes During 2017  ',' 02-16 02-25 02-24 02-23 02-22 02-21 02-20 01-18 01-17 01-16 01-15 01-14 01-13 01-12 01-11 01-10 '
]

var MaxList = 100;
var Nstring = -1;
var Nkeyword = Keyword.length / 2;
Initialize();

function Initialize()
{
	UpdateList();
	document.search.keywords.focus();
}
function UpdateList(event)
{
	key = 0;
	if( window.event )
		key = window.event.keyCode;
	else if( event )
		key = event.which;
	if( key == 13 )
	{	Goto();
		return;
	}
	var string  = document.search.keywords.value;
	if( Nstring == string.length )
		return;
	Nstring     = string.length;

	var word    = string.match(/\S+/g);
	var nword   = 0;
	if(word != null )
		nword   = word.length;

	var pattern = new Array(nword);
	for(var j = 0; j < nword; j++)
		pattern[j] = new RegExp(word[j], 'i');

	var nlist = 0;
	var list  = '';
	for(i = 0; (i < Nkeyword) && (nlist < MaxList) ; i++)
	{
		var match = true;
		for(j = 0; j < nword; j++)
		{	var flag = pattern[j].test(Keyword[2*i]);
			flag     = flag || pattern[j].test(Keyword[2*i+1]);
			match    = match && flag;
		}

		if( match )
		{
			line  = Keyword[2*i].split(/\s+/);
			line  = line.join(' ');
			list  = list + line + '\n';
			nlist = nlist + 1;
		}
	}
	document.search.list.value    = list;
}
function Choose(textarea)
{	var start_select = textarea.value.substring(0, textarea.selectionStart);
	var start_pos    = Math.max(0, start_select.lastIndexOf('\n') );
	var length       = textarea.value.length;
	var end_select   = 
		textarea.value.substring(textarea.selectionEnd, length);
	var end_pos      = end_select.indexOf('\n');
	if( end_pos >= 0 ) 
	{	end_pos = textarea.selectionEnd + end_pos;
	} else 
	{	end_pos = length;
	}
	// highlight the selected line
	textarea.selectionStart = start_pos;
	textarea.selectionEnd   = end_pos;
	// get the choice from the beginning of the line
	var line = textarea.value.substring(start_pos, length);
	var end_choice = line.indexOf(' ');
	if( end_choice >= 0 )
	{	var choice = line.substring(0, end_choice);
		document.search.choice.value = choice.toLowerCase();
	}
	
	return true;
}
function Goto()
{
parent.location = document.search.choice.value + '.htm';
}
