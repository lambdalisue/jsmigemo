import { Migemo } from "../src/Migemo";
import { CompactDictionary } from "../src/CompactDictionary";
import { readFileSync } from "fs";

describe("migemo", () => {
    const buff = readFileSync('migemo-compact-dict');
    const dict = new CompactDictionary(buff.buffer);

    it("kikai", () => {
        const migemo = new Migemo();
        migemo.setDict(dict);
        const result = migemo.query("kikai");
        expect(result).toBe("(kikai|きかい|キカイ|喜界|器械|奇怪|既会員|棋界|機[会械]|毀壊|気塊|貴会|ｋｉｋａｉ|ｷｶｲ)");
    });

    it("連文節の検索（大文字区切り）", () => {
        const migemo = new Migemo();
        migemo.setDict(dict);
        const result = migemo.query("renbunsetuNoKensaku");
        const regex = RegExp(result);
        expect(regex.exec("連文節の検索")).toEqual(expect.anything());
    });

    it("連文節の検索（空白区切り）", () => {
        const migemo = new Migemo();
        migemo.setDict(dict);
        const result = migemo.query("renbunsetu no kensaku");
        const regex = RegExp(result);
        expect(regex.exec("連文節の検索")).toEqual(expect.anything());
    });
});
