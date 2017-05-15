/**
 * A container for banned keywords for variable names.
 */
export class BannedKeywordsBag {
    /**
     * Banned keywords, keyed in alphabetical order.
     */
    private bannedKeywords: { [i: string]: boolean };

    /**
     * Initalizes a new instance of the BannedKeywordsBag class.
     */
    constructor() {
        this.bannedKeywords = {
            "BEGIN": true,
            "END": true,
            "__ENCODING__": true,
            "__FILE__": true,
            "__LINE__": true,
            "abstract": true,
            "acos": true,
            "add": true,
            "alias": true,
            "and": true,
            "any": true,
            "array": true,
            "as": true,
            "asin": true,
            "assert": true,
            "async": true,
            "atan": true,
            "await": true,
            "base": true,
            "bool": true,
            "boolean": true,
            "break": true,
            "byte": true,
            "case": true,
            "catch": true,
            "char": true,
            "checked": true,
            "class": true,
            "close": true,
            "const": true,
            "constructor": true,
            "continue": true,
            "cos": true,
            "debugger": true,
            "decimal": true,
            "declare": true,
            "def": true,
            "default": true,
            "defined": true,
            "del": true,
            "delegate": true,
            "delete": true,
            "do": true,
            "double": true,
            "e": true,
            "elif": true,
            "else": true,
            "elsif": true,
            "ensure": true,
            "enum": true,
            "event": true,
            "except": true,
            "exec": true,
            "exp": true,
            "explicit": true,
            "export": true,
            "extends": true,
            "extern": true,
            "fabs": true,
            "false": true,
            "final": true,
            "finally": true,
            "fixed": true,
            "floor": true,
            "for": true,
            "foreach": true,
            "from": true,
            "function": true,
            "get": true,
            "global": true,
            "goto": true,
            "hasOwnProperty": true,
            "if": true,
            "implements": true,
            "implicit": true,
            "import": true,
            "in": true,
            "input": true,
            "instanceof": true,
            "interaface": true,
            "interface": true,
            "internal": true,
            "is": true,
            "lambda": true,
            "let": true,
            "lock": true,
            "log": true,
            "log10": true,
            "long": true,
            "module": true,
            "namespace": true,
            "native": true,
            "new": true,
            "next": true,
            "nil": true,
            "not": true,
            "null": true,
            "number": true,
            "object": true,
            "of": true,
            "open": true,
            "operator": true,
            "or": true,
            "out": true,
            "override": true,
            "package": true,
            "params": true,
            "partial": true,
            "pass": true,
            "pi": true,
            "print": true,
            "private": true,
            "protected": true,
            "public": true,
            "raise": true,
            "range": true,
            "readonly": true,
            "redo": true,
            "ref": true,
            "remove": true,
            "require": true,
            "rescue": true,
            "retry": true,
            "return": true,
            "sbyte": true,
            "sealed": true,
            "self": true,
            "set": true,
            "short": true,
            "sin": true,
            "sizeof": true,
            "sqrt": true,
            "stackalloc": true,
            "static": true,
            "strictfp": true,
            "string": true,
            "struct": true,
            "super": true,
            "switch": true,
            "symbol": true,
            "synchronized": true,
            "tan": true,
            "then": true,
            "this": true,
            "throw": true,
            "throwas": true,
            "throws": true,
            "transient": true,
            "true": true,
            "try": true,
            "type": true,
            "typeof": true,
            "uint": true,
            "ulong": true,
            "unchecked": true,
            "undef": true,
            "unless": true,
            "unsafe": true,
            "until": true,
            "ushort": true,
            "using": true,
            "value": true,
            "var": true,
            "virtual": true,
            "void": true,
            "volatile": true,
            "when": true,
            "where": true,
            "while": true,
            "with": true,
            "write": true,
            "yield": true,
            "zeros": true,
        };
    }

    /**
     * Returns whether the variable name is valid.
     * 
     * @param name  A variable name.
     * @returns A boolean determining the validity of the variable name.
     */
    public validateName(alias: string): boolean {
        if (this.bannedKeywords[alias]) {
            return true;
        }

        return false;
    }
}
