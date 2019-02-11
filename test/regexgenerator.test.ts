import { describe, it } from "mocha";
import { assert } from "chai"
import { RegexGenerator } from "../lib/RegexGenerator";

describe('RegexGenerator', function() {
  describe('#add()', function() {
    it('bad dad => (bad|dad)', function() {
        let generator = RegexGenerator.getDEFAULT();
        generator.add("bad");
        generator.add("dad");
        assert.equal(generator.generate(), "(bad|dad)");
    });
    it('bad bat => (ba[dt])', function() {
        let generator = RegexGenerator.getDEFAULT();
        generator.add("bad");
        generator.add("bat");
        assert.equal(generator.generate(), "ba[dt]");
    });
    it('a b a => [ab]', function() {
        let generator = RegexGenerator.getDEFAULT();
        generator.add("a");
        generator.add("b");
        generator.add("a");
        assert.equal(generator.generate(), "[ab]");
    });
    it('escape', function() {
        let generator = RegexGenerator.getDEFAULT();
        generator.add("a.b");
        assert.equal(generator.generate(), "a\\.b");
    });
  });
});