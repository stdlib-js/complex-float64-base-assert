/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name isEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float64/base/assert/is-equal}
*/
setReadOnly( ns, 'isEqual', require( '@stdlib/complex-float64-base-assert-is-equal' ) );

/**
* @name isNotEqual
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float64/base/assert/is-not-equal}
*/
setReadOnly( ns, 'isNotEqual', require( '@stdlib/complex-float64-base-assert-is-not-equal' ) );

/**
* @name isSameValue
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float64/base/assert/is-same-value}
*/
setReadOnly( ns, 'isSameValue', require( '@stdlib/complex-float64-base-assert-is-same-value' ) );

/**
* @name isSameValueZero
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/complex/float64/base/assert/is-same-value-zero}
*/
setReadOnly( ns, 'isSameValueZero', require( '@stdlib/complex-float64-base-assert-is-same-value-zero' ) );


// EXPORTS //

module.exports = ns;
