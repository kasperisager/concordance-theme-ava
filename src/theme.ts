const ansiStyles = require("ansi-styles");
const chalk = require("chalk");

// Copyright (c) Sindre Sorhus <sindresorhus@gmail.com> (sindresorhus.com)
//
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to
// deal in the Software without restriction, including without limitation the
// rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
// sell copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.

export const theme = {
  boolean: ansiStyles.yellow,
  circular: chalk.grey("[Circular]"),
  date: {
    invalid: chalk.red("invalid"),
    value: ansiStyles.blue
  },
  diffGutters: {
    actual: chalk.red("-") + " ",
    expected: chalk.green("+") + " ",
    padding: "  "
  },
  error: {
    ctor: {
      open: ansiStyles.grey.open + "(",
      close: ")" + ansiStyles.grey.close
    },
    name: ansiStyles.magenta
  },
  function: {
    name: ansiStyles.blue,
    stringTag: ansiStyles.magenta
  },
  global: ansiStyles.magenta,
  item: { after: chalk.grey(",") },
  list: { openBracket: chalk.grey("["), closeBracket: chalk.grey("]") },
  mapEntry: { after: chalk.grey(",") },
  maxDepth: chalk.grey("…"),
  null: ansiStyles.yellow,
  number: ansiStyles.yellow,
  object: {
    openBracket: chalk.grey("{"),
    closeBracket: chalk.grey("}"),
    ctor: ansiStyles.magenta,
    stringTag: {
      open: ansiStyles.magenta.open + "@",
      close: ansiStyles.magenta.close
    },
    secondaryStringTag: {
      open: ansiStyles.grey.open + "@",
      close: ansiStyles.grey.close
    }
  },
  property: {
    after: chalk.grey(","),
    keyBracket: { open: chalk.grey("["), close: chalk.grey("]") },
    valueFallback: chalk.grey("…")
  },
  regexp: {
    source: {
      open: ansiStyles.blue.open + "/",
      close: "/" + ansiStyles.blue.close
    },
    flags: ansiStyles.yellow
  },
  stats: { separator: chalk.grey("---") },
  string: {
    open: ansiStyles.blue.open,
    close: ansiStyles.blue.close,
    line: { open: chalk.blue("'"), close: chalk.blue("'") },
    multiline: { start: chalk.blue("`"), end: chalk.blue("`") },
    controlPicture: ansiStyles.grey,
    diff: {
      insert: {
        open: ansiStyles.bgGreen.open + ansiStyles.black.open,
        close: ansiStyles.black.close + ansiStyles.bgGreen.close
      },
      delete: {
        open: ansiStyles.bgRed.open + ansiStyles.black.open,
        close: ansiStyles.black.close + ansiStyles.bgRed.close
      },
      equal: ansiStyles.blue,
      insertLine: {
        open: ansiStyles.green.open,
        close: ansiStyles.green.close
      },
      deleteLine: {
        open: ansiStyles.red.open,
        close: ansiStyles.red.close
      }
    }
  },
  symbol: ansiStyles.yellow,
  typedArray: {
    bytes: ansiStyles.yellow
  },
  undefined: ansiStyles.yellow
};
