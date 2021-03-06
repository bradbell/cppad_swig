# -----------------------------------------------------------------------------
#         cppad_swig: A C++ Object Library and Swig Interface to Cppad
#          Copyright (C) 2017-17 Bradley M. Bell (bradbell@seanet.com)
#              This program is distributed under the terms of the
#              GNU General Public License version 3.0 or later see
#                    https://www.gnu.org/licenses/gpl-3.0.txt
# -----------------------------------------------------------------------------
assert(m4_executable)
#
# List of automatically generated source files
SET(auto_list
	a_double_xam.pm
	a_fun_xam.pm
	vec_a_double_xam.pm
	vec_double_xam.pm
)
SET(auto_output_list "")
FOREACH( xam_file ${xam_file_list} )
	STRING(REGEX REPLACE "[.]xam" ".pm" source_file ${xam_file})
	STRING(REGEX REPLACE "/"      "_"   source_file ${source_file})
	ADD_CUSTOM_COMMAND(
		OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/${source_file}
		COMMAND ${m4_executable}
		-D Language_=perl
		-I ${CMAKE_SOURCE_DIR}/lib/xam
		${CMAKE_SOURCE_DIR}/lib/xam/${xam_file}
		> ${CMAKE_CURRENT_BINARY_DIR}/${source_file}
		DEPENDS
		${CMAKE_SOURCE_DIR}/lib/xam/${xam_file}
		${CMAKE_SOURCE_DIR}/lib/xam/perl.m4
	)
	add_to_list(auto_output_list ${CMAKE_CURRENT_BINARY_DIR}/${source_file} )
ENDFOREACH( xam_file ${xam_file_list} )
ADD_CUSTOM_TARGET(auto_lib_perl DEPENDS ${auto_output_list} )
MESSAGE(STATUS "make auto_lib_perl: available")
#
# ----------------------------------------------------------------------------
assert( SWIG_FOUND )
FIND_PACKAGE(PerlLibs)
IF ( PERLLIBS_FOUND )
	ADD_CUSTOM_COMMAND(
		OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/check_all.pl
		COMMAND
		${CMAKE_COMMAND} -E copy
		${CMAKE_CURRENT_SOURCE_DIR}/check_all.pl
		${CMAKE_CURRENT_BINARY_DIR}/check_all.pl
	)

	# treat like a C++ files
	SET_SOURCE_FILES_PROPERTIES(
		${swig_control_file} PROPERTIES CPLUSPLUS ON
	)

	# Swig Perl warns that it does not support *=, or /=,
	# and that it does not know about std::exception: suppress these warnings.
	# 2DO: ask swig mailing list what is going on here.
	SET(CMAKE_SWIG_FLAGS -Wextra -w367,368,401 )

	# include directory determined by find PerlLibs
	INCLUDE_DIRECTORIES( SYSTEM ${PERL_INCLUDE_PATH})

	# add_swig_library(library language files)
	add_swig_library(pm_cppad perl swig_control_file)

	# SWIG_LINK_LIBRARIES(name [ libraries ])
	SWIG_LINK_LIBRARIES(pm_cppad cppad_swig_lib ${PERL_LIBRARIES})

	# additional flags for compiling Swig wrapper
	SET_TARGET_PROPERTIES( ${SWIG_MODULE_pm_cppad_REAL_NAME}
		 PROPERTIES COMPILE_FLAGS "${swig_cxx_flags}"
	)

	# check_lib_perl
	ADD_CUSTOM_TARGET(check_lib_perl
		perl check_all.pl
		DEPENDS
		${SWIG_MODULE_pm_cppad_REAL_NAME}
		${CMAKE_CURRENT_BINARY_DIR}/check_all.pl
		auto_lib_perl
	)
	MESSAGE(STATUS "make check_lib_perl: available")

	# Change check depends in parent environment
	add_to_list(check_lib_depends check_lib_perl)
	SET(check_lib_depends "${check_lib_depends}" PARENT_SCOPE)

ENDIF ( PERLLIBS_FOUND )
