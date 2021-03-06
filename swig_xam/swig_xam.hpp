# ifndef CPPAD_SWIG_EXAMPLE_EXAMPLE_HPP
# define CPPAD_SWIG_EXAMPLE_EXAMPLE_HPP
/* -----------------------------------------------------------------------------
           cppad_swig: A C++ Object Library and Swig Interface to Cppad
            Copyright (C) 2017-17 Bradley M. Bell (bradbell@seanet.com)
                This program is distributed under the terms of the
                GNU General Public License version 3.0 or later see
                      https://www.gnu.org/licenses/gpl-3.0.txt
----------------------------------------------------------------------------- */
# include <vector>
// BEGIN function prototypes
int         factorial_by_value(int n);
const char* message_of_void();
void        add_by_ptr(int x, int y, int* result);
int         max_array_by_ptr(int n, const int* x);
double      max_std_vector_double(const std::vector<double>& x);
const char* raise_exception(const char* message);
// END function prototypes
/*
$begin swig_xam_function$$
$spell
	ptr
	std
	runtime
$$

$section Swig Example: C++ Function Specifications$$

$head Prototypes$$
$srcfile%swig_xam/swig_xam.hpp%0
	%// BEGIN function prototypes%// END function prototypes%$$

$head factorial_by_value$$
The return value is the factorial of the argument $icode n$$.

$head message_of_void$$
The return value is the text $code OK$$.

$head add_by_ptr$$
The input value of $icode result$$ does not matter.
Upon return $icode%result% = %x% + %y%$$.

$head max_array_by_ptr$$
The array $icode x$$ has length $icode n$$ and the return value
is the maximum of the elements of $icode x$$.

$head max_std_vector_double$$
The return value is the maximum of the elements of $icode x$$.

$head raise_exception$$
It $icode message$$ is the empty C string,
the return value is the string corresponding to the previous
call to $code raise_exception$$ when $icode message$$ was non-empty.
If $icode message$$ is non-empty,
the message is store, so it can be retrieved later,
and the following exception is thrown:
$codei%
	std::runtime_error( std::string( %message% ) );
%$$
The message storage is done using a static variable and hence is
not thread safe.

$childtable%swig_xam/function.cpp%$$

$end
------------------------------------------------------------------------------
*/

// BEGIN normal_class prototype
class normal_class
{	private:
		int value_;
	public:
		// normal_class()
		normal_class(void);
		// normal_class(value)
		normal_class(int value);
		// destructor
		~normal_class(void);
		// value()
		int value(void) const;
		// additon
		normal_class operator+(const normal_class& right) const;
		// equality
		bool operator==(const normal_class& right) const;
};
// END normal_class prototype
/*
$begin swig_xam_normal_class$$


$section Swig Example: C++ Class$$


$head Prototypes$$
$srcfile%swig_xam/swig_xam.hpp%0
	%// BEGIN normal_class prototype%// END normal_class prototype%$$

$head normal_class()$$
This creates a $code normal_class$$ object with no further specifications.

$head normal_class(value)$$
This creates a $code normal_class$$ object that has the
specified $icode value$$.

$head value()$$
Returns the value corresponding to this object.

$head addition$$
The return value is the sum of the this object and the object to its right.

$head equality$$
True is returned, if the value for
this object is equal to the value for the object to its right.
Otherwise false is returned.

$childtable%swig_xam/normal_class.cpp%$$

$end
------------------------------------------------------------------------------
*/

// BEGIN template_class prototype
template <class Type> class template_class
{	private:
		Type value_;
	public:
		// ctor
		template_class(const Type& value);
		// value
		Type value(void) const;
		// addition
		template_class operator+(const template_class& right) const;
		// equality
		bool operator==(const template_class& right) const;
};
// END template_class prototype
/*
$begin swig_xam_template_class$$


$section Swig Example: C++ Template Class$$


$head Prototypes$$
$srcfile%swig_xam/swig_xam.hpp%0
	%// BEGIN template_class prototype%// END template_class prototype%$$

$head Type$$
Is the type of the value in each object.

$head template_class(value)$$
This creates a $code template_class$$ object that has the
specified $icode value$$.

$head value()$$
Returns the value corresponding to this object.

$head addition$$
The return value is the sum of the this object and the object to its right.

$head equality$$
True is returned, if the value for
this object is equal to the value for the object to its right.
Otherwise false is returned.

$childtable%swig_xam/template_class.hpp%$$

$end
------------------------------------------------------------------------------
*/
# include "template_class.hpp"

# endif
