import "mocha";

import { DirectoryUpperCaseConverter } from "../../../../lib/Rendering/Casing/DirectoryUpperCaseConverter";
import { itConvertsFromTo } from "./ConverterTests";

describe("DirectoryUpperCaseConverter", () => {
    describe("convert", () => {
        itConvertsFromTo(DirectoryUpperCaseConverter, ["abc"], "Abc");
        itConvertsFromTo(DirectoryUpperCaseConverter, ["abc", "def"], "Abc/Def");
        itConvertsFromTo(DirectoryUpperCaseConverter, ["abc", "def", "ghi"], "Abc/Def/Ghi");
    });
});
