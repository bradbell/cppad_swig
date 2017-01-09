# -----------------------------------------------------------------------------
#         cppad_swig: A C++ Object Library and Swig Interface to Cppad
#          Copyright (C) 2017-17 Bradley M. Bell (bradbell@seanet.com)
#              This program is distributed under the terms of the
#          GNU Affero General Public License version 3.0 or later see
#                     http://www.gnu.org/licenses/agpl.txt
# -----------------------------------------------------------------------------
#
# List of *.xam files in relative to lib/xam directory
SET(xam_file_list
	a_double/a_double_xam.xam
	a_fun/a_fun_xam.xam
	vector/ad_xam.xam
	vector/double_xam.xam
)
#
# sub-directories for each language (add to check_lib_depend)
ADD_SUBDIRECTORY(cplusplus)
ADD_SUBDIRECTORY(python)
ADD_SUBDIRECTORY(octave)
ADD_SUBDIRECTORY(perl)
#
# Change check_lib_depends in parent environment
SET(check_lib_depends "${check_lib_depends}" PARENT_SCOPE)