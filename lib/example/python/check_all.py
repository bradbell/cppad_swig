# -----------------------------------------------------------------------------
#         cppad_swig: A C++ Object Library and Swig Interface to Cppad
#          Copyright (C) 2017-17 Bradley M. Bell (bradbell@seanet.com)
#              This program is distributed under the terms of the
#          GNU Affero General Public License version 3.0 or later see
#                     http://www.gnu.org/licenses/agpl.txt
# -----------------------------------------------------------------------------
import sys
import os
# cppad_swig_lib.dll is in .. directory
os.environ['PATH'] = '..;' + os.environ['PATH']
#
error_count = 0
def run_test(name) :
	exec( 'import ' + name )
	exec( 'ok = ' + name + '.' + name + '()' )
	if ok :
		print('python: ' + name + ': OK')
	else :
		print('python: ' + name + ': Error')
		error_count = error_count + 1
#
fun_list = [
	'a_double_value_xam',
	'a_double_ad_binary_xam',
	'a_double_compare_xam',
	'a_fun_a_fun_xam',
	'vector_ad_xam',
	'vector_double_xam'
]
for name in fun_list :
	run_test(name)
#
if error_count > 0 :
	print('python: check_all: error_count = ', error_count)
	sys.exit(1)
print('python: check_all: OK')
sys.exit(0)