# -----------------------------------------------------------------------------
#         cppad_swig: A C++ Object Library and Swig Interface to Cppad
#          Copyright (C) 2017-18 Bradley M. Bell (bradbell@seanet.com)
#              This program is distributed under the terms of the
#              GNU General Public License version 3.0 or later see
#                    https://www.gnu.org/licenses/gpl-3.0.txt
# -----------------------------------------------------------------------------
# The script uses the $ in its perl syntax
# $OMhelpKeyCharacter=&
#
# &begin check_swig_xam.pl&& &newlinech #&&
# &spell
#	xam
#	std
#	pl
#	ptr
#	Perl
# &&
#
# &section Swig Example / Test: Perl Script&&
#
# &head Add Current Directory To Search Path&&
# &srccode%pl%
use lib "$ENV{PWD}";
# %&&
#
# &head Load the Module&&
# &srccode%pl%
use pl_swig_xam;
# %&&
#
# &head Initialize Error Count&&
# &srccode%pl%
$error_count = 0;
# %&&
#
# &head factorial_by_value&&
# &srccode%pl%
if( pl_swig_xam::factorial_by_value(4) == 24 )
{	print "pl_swig_xam::factorial_by_value: OK\n"; }
else
{	print "pl_swig_xam::factorial_by_value: Error\n";
	$error_count = $error_count + 1;
}
# %&&
# see C++ &cref/factorial_by_value/swig_xam_function/factorial_by_value/&&.
#
# &head message_of_void&&
# &srccode%pl%
if( pl_swig_xam::message_of_void() == "OK" )
{	print "pl_swig_xam::message_of_void: OK\n"; }
else
{	print "pl_swig_xam::message_of_void: Error\n";
	$error_count = $error_count + 1;
}
# %&&
# see C++ &cref/message_of_void/swig_xam_function/message_of_void/&&.
#
# &head int_class&&
# &srccode%pl%
$obj = new pl_swig_xam::int_class();
pl_swig_xam::add_by_ptr(3, 4, $obj);
if( $obj->value() == 7 )
{	print "pl_swig_xam::add_by_ptr: OK\n"; }
else
{	print "pl_swig_xam::add_by_ptr: Error\n";
	$error_count = $error_count + 1;
}
# %&&
# see Swig &cref/int_class/swig_xam.i/int_class/&& and
# C++ &cref/add_by_ptr/swig_xam_function/add_by_ptr/&&.
#
# &head int_array_ptr&&
# &srccode%pl%
$n = 10;
$array_ptr = pl_swig_xam::new_int_array_ptr($n);
for($i = 0; $i < $n; $i++)
{	pl_swig_xam::int_array_ptr_setitem($array_ptr, $i, 2 * $i); }
#
if( pl_swig_xam::max_array_by_ptr($n, $array_ptr) == 18 )
{	print "pl_swig_xam::max_array_by_ptr: pointer: OK\n"; }
else
{	print "pl_swig_xam::max_array_by_ptr: pointer: Error\n";
	$error_count = $error_count + 1;
}
pl_swig_xam::delete_int_array_ptr($array_ptr);
# %&&
# see Swig &cref/int_array_ptr/swig_xam.i/int_array_ptr/&& and
# C++ &cref/max_array_by_ptr/swig_xam_function/max_array_by_ptr/&&.
#
# &head int_array_class&&
# &srccode%pl%
$n         = 10;
$array_obj = new pl_swig_xam::int_array_class($n);
for($i = 0; $i < $n; $i++)
{	pl_swig_xam::int_array_ptr_setitem($array_obj, $i, 2 * $i); }
if( pl_swig_xam::max_array_by_ptr($n, $array_obj) == 18 )
{	print "pl_swig_xam::max_array_by_ptr: class: OK\n"; }
else
{	print "pl_swig_xam::max_array_by_ptr: class: Error\n";
	$error_count = $error_count + 1;
}
# %&&
# see Swig &cref/int_array_class/swig_xam.i/int_array_class/&& and
# C++ &cref/max_array_by_ptr/swig_xam_function/max_array_by_ptr/&&.
#
# &head vector_double&&
# &srccode%pl%
$n   = 10;
$vec = new pl_swig_xam::vector_double($n);
for($i = 0; $i < $n; $i++)
{	$vec->set($i, 2.0 * $i); }
#
if( pl_swig_xam::max_std_vector_double($vec) == 18.0 )
{	print "pl_swig_xam::max_std_vector_double: class: OK\n"; }
else
{	print "pl_swig_xam::max_std_vector_double: class: Error\n";
	$error_count = $error_count + 1;
}
# %&&
# see Swig &cref/vector_double/swig_xam.i/vector_double/&& and
# C++ &cref/max_std_vector_double/swig_xam_function/max_std_vector_double/&&.
#
# &head raise_exception&&
# &srccode%pl%
$message = "";
eval { # acts like 'try {' in other languages
	pl_swig_xam::raise_exception("test message\n");
}
; if( $@ ) { # acts like 'catch {' in other languages
	$message = pl_swig_xam::raise_exception("");
}
if( $message == "test message" )
{	print "pl_swig_xam::raise_exception: OK\n"; }
else
{	print "pl_swig_xam::raise_exception: Error\n";
	$error_count = $error_count + 1;
}
# %&&
# see C++ &cref/raise_exception/swig_xam_function/raise_exception/&&.
#
# &head normal_class&&
# &srccode%pl%
$two   = new pl_swig_xam::normal_class(2);
$three = new pl_swig_xam::normal_class(3);
$five  = $two + $three;
$check = new pl_swig_xam::normal_class(5);
$ok    = $five == $check;
$ok    = $ok and 4 < $five->value()  and $five->value() < 6;
if( ok )
{	print "pl_swig_xam::normal_class: OK\n"; }
else
{	print "pl_swig_xam::normal_class: Error\n";
	$error_count = $error_count + 1;
}
# %&&
# see C++ &cref swig_xam_normal_class&&.
#
# &head double_class&&
# &srccode%pl%
$two   = new pl_swig_xam::double_class(2.0);
$three = new pl_swig_xam::double_class(3.0);
$five  = $two + $three;
$check = new pl_swig_xam::double_class(5.0);
$ok    = $five == $check;
$ok    = $ok and 4.5 < $five->value()  and $five->value() < 5.5;
if( ok )
{	print "pl_swig_xam::double_class: OK\n"; }
else
{	print "pl_swig_xam::double_class: Error\n";
	$error_count = $error_count + 1;
}
# %&&
# see Swig &cref/double_class/swig_xam.i/double_class/&&.
#
# &head Set Exit Code&&
# &srccode%pl%
if( $error_count == 0 )
{	exit 0; }
exit 1;
# %&&
#
# &end
