# -----------------------------------------------------------------------------
#         cppad_swig: A C++ Object Library and Swig Interface to Cppad
#          Copyright (C) 2017-17 Bradley M. Bell (bradbell@seanet.com)
#              This program is distributed under the terms of the
#          GNU Affero General Public License version 3.0 or later see
#                     http://www.gnu.org/licenses/agpl.txt
# -----------------------------------------------------------------------------
# check if we are using Swig
FIND_PACKAGE(SWIG)
FIND_PACKAGE(PerlLibs)
IF( SWIG_FOUND AND PERLLIBS_FOUND )
	#
	# include the Swig specific macros
	INCLUDE( ${CMAKE_ROOT}/Modules/UseSWIG.cmake )
	#
	# use include files in parent directory
	INCLUDE_DIRECTORIES( ${CMAKE_CURRENT_SOURCE_DIR}/.. )
	#
	# treat like a C++ files
	SET_SOURCE_FILES_PROPERTIES(../example.i PROPERTIES CPLUSPLUS ON)
	#
	# Swig flags when processing this file
	SET_SOURCE_FILES_PROPERTIES(./example.i PROPERTIES SWIG_FLAGS "-Wall")
	#
	# include directory determined by find PythonLibs
	# (treat like system include files to suppress warnings)
	INCLUDE_DIRECTORIES( SYSTEM ${PERL_INCLUDE_PATH})
	#
	# SWIG_ADD_MODULE(name language [ files ])
	SET(module_files ../example.i ../function.cpp ../normal_class.cpp)
	SWIG_ADD_MODULE(pl_example perl ${module_files})
	#
	# SWIG_LINK_LIBRARIES(name [ libraries ])
	SWIG_LINK_LIBRARIES(pl_example ${PERL_LIBRARY})
	#
	# additional flags for compiling Swig wrapper
	SET_TARGET_PROPERTIES( ${SWIG_MODULE_pl_example_REAL_NAME}
		 PROPERTIES COMPILE_FLAGS "${swig_cxx_flags}"
	)
	#
	# example use of CMAKE_SWIG_OUTDIR (not necessary in this case)
	SET(CMAKE_SWIG_OUTDIR "${CMAKE_CURRENT_BINARY_DIR}")
	#
	# copy check_exmaple.pl from source to binary directory
	ADD_CUSTOM_TARGET(check_pl_example
		"${CMAKE_COMMAND}" -E copy
		"${CMAKE_CURRENT_SOURCE_DIR}/check_pl_example.pl"
		"${CMAKE_CURRENT_BINARY_DIR}/check_pl_example.pl"
		DEPENDS
		"${CMAKE_CURRENT_SOURCE_DIR}/check_pl_example.pl"
	)
	#
	# check_example_perl
	ADD_CUSTOM_TARGET(check_example_perl
		perl check_pl_example.pl
		DEPENDS ${SWIG_MODULE_pl_example_REAL_NAME} check_pl_example
	)
	MESSAGE(STATUS "make check_example_perl: available")
	#
	# add this check to list of checks for parent directory
	SET(check_example_depends
		${check_example_depends} check_example_perl PARENT_SCOPE
	)
	#
ENDIF( SWIG_FOUND AND PERLLIBS_FOUND )