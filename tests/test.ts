import moo from "../index";
import { test } from "uvu";
import * as assert from "uvu/assert";

test("", () => {
  assert.is(moo(), "");
  assert.is(moo("a", "b"), "a b");
  assert.is(moo("a b"), "a b");
  assert.is(moo("a", ["b"]), "a b");
  assert.is(moo("a", ["b", false]), "a");
  assert.is(moo("a", ["b", true]), "a b");
  assert.is(moo("a", ...["b", "c"]), "a b c");
  assert.is(moo("a", ...["b", "c"], ["d"]), "a b c d");
});

test.run();
