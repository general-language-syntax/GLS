import { NativeCallSyntax } from "./NativeCallSyntax";
import { StringFormatSyntax } from "./StringFormatSyntax";
import { StringSubstringSyntax } from "./StringSubstringSyntax";
import { StringToFloatSyntax } from "./StringToFloatSyntax";

/**
 * Metadata on a language's string syntax.
 */
export class StringSyntax {
    /**
     * How to make a block to be executed if a string can be converted to a float.
     */
    public toFloat: StringToFloatSyntax = new StringToFloatSyntax();

    /**
     * How to create a lower-case copy of a string.
     */
    public caseLower: NativeCallSyntax;

    /**
     * How to create an upper-case copy of a string.
     */
    public caseUpper: NativeCallSyntax;

    /**
     * The name of the string class.
     */
    public className: string;

    /**
     * The name of the concatenation operator.
     */
    public concatenate: string;

    /**
     * Metadata on the language's string formatting.
     */
    public formatting: StringFormatSyntax = new StringFormatSyntax();

    /**
     * How to find a substring within a string.
     */
    public indexOf: NativeCallSyntax;

    /**
     * The value returned by string searching when a substring isn't found.
     */
    public indexOfNotFound: string;

    /**
     * How to retrieve a string's length.
     */
    public length: NativeCallSyntax;

    /**
     * Metadata on the language's string substrings.
     */
    public substrings: StringSubstringSyntax = new StringSubstringSyntax();

    /**
     * How to trim strings.
     */
    public trim: NativeCallSyntax;
}