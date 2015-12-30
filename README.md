mocha-multi-reporters
===

Generate multiple mocha reports in a single mocha execution.

[![Build Status](https://travis-ci.org/stanleyhlng/mocha-multi-reporters.svg)](https://travis-ci.org/stanleyhlng/mocha-multi-reporters)

## Install

```
npm install mocha-multi-reporters --save-dev
```

## Usage

### Basic

```bash
$ mocha --reporter mocha-multi-reporters
  mocha-test #1
    ✓ sample test #1.1
    ✓ sample test #1.2

  mocha-test #2
    ✓ sample test #2.1
    - sample test #2.2


  3 passing (7ms)
  1 pending

$ cat xunit.xml
<testsuite name="Mocha Tests" tests="4" failures="0" errors="0" skipped="1" timestamp="Wed, 30 Dec 2015 22:56:39 GMT" time="0.005">
```

### Advance

* Generate `spec` and `json` reports.

```js
// File: config.json
{
    "reporterEnabled": "spec, json"
}
```

```bash
$ mocha --reporter mocha-multi-reporters --reporter-options configFile=config.json
  mocha-test #1
    ✓ sample test #1.1
    ✓ sample test #1.2

  mocha-test #2
    ✓ sample test #2.1
    - sample test #2.2


  3 passing (6ms)
  1 pending

{
  "stats": {
    "suites": 2,
    "tests": 4,
    "passes": 3,
    "pending": 1,
    "failures": 0,
    "start": "2015-12-30T22:49:39.713Z",
    "end": "2015-12-30T22:49:39.717Z",
    "duration": 4
  },
  "tests": [
    {
      "title": "sample test #1.1",
      "fullTitle": "mocha-test #1 sample test #1.1",
      "duration": 1,
      "err": {}
    },
    {
      "title": "sample test #1.2",
      "fullTitle": "mocha-test #1 sample test #1.2",
      "duration": 0,
      "err": {}
    },
    {
      "title": "sample test #2.1",
      "fullTitle": "mocha-test #2 sample test #2.1",
      "duration": 0,
      "err": {}
    },
    {
      "title": "sample test #2.2",
      "fullTitle": "mocha-test #2 sample test #2.2",
      "err": {}
    }
  ],
  "pending": [
    {
      "title": "sample test #2.2",
      "fullTitle": "mocha-test #2 sample test #2.2",
      "err": {}
    }
  ],
  "failures": [],
  "passes": [
    {
      "title": "sample test #1.1",
      "fullTitle": "mocha-test #1 sample test #1.1",
      "duration": 1,
      "err": {}
    },
    {
      "title": "sample test #1.2",
      "fullTitle": "mocha-test #1 sample test #1.2",
      "duration": 0,
      "err": {}
    },
    {
      "title": "sample test #2.1",
      "fullTitle": "mocha-test #2 sample test #2.1",
      "duration": 0,
      "err": {}
    }
  ]
}%
```

* Generate `tap` and `xunit` reports.

```js
// File: config.json
{
    "reporterEnabled": "tap, xunit",
    "xunitReporterOptions": {
        "output": "xunit-custom.xml"
    }
}
```
```bash
$ mocha --reporter mocha-multi-reporters --reporter-options configFile=config.json

1..4
ok 1 mocha-test 1 sample test 1.1
ok 2 mocha-test 1 sample test 1.2
ok 3 mocha-test 2 sample test 2.1
ok 4 mocha-test 2 sample test 2.2 # SKIP -
# tests 3
# pass 3
# fail 0

$ cat xunit-custom.xml
<testsuite name="Mocha Tests" tests="4" failures="0" errors="0" skipped="1" timestamp="Wed, 30 Dec 2015 22:46:26 GMT" time="0.006">
```

## License

The MIT License (MIT)

Copyright(c) 2015 Stanley Ng

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
