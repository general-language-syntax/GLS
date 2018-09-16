import { LineResults } from "../LineResults";
import { Command } from "./Command";
import { CommandNames } from "./CommandNames";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";

/**
 * Initializes a new dictionary.
 */
export class DictionaryNewCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.DictionaryNew)
        .withDescription("Initializes a new dictionary")
        .withParameters([
            new SingleParameter("keyType", "The type of the keys.", true),
            new SingleParameter("valueType", "The type of the values", true),
        ]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return DictionaryNewCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        if (!this.language.properties.dictionaries.initializeAsNew) {
            return LineResults.newSingleLine(this.language.properties.dictionaries.initializeAsLiteral, false);
        }

        let output = this.language.properties.classes.newStart;
        output += this.language.properties.dictionaries.className;

        if (this.language.properties.classes.generics.used) {
            output += this.language.properties.classes.generics.left;
            output += this.context.convertCommon(CommandNames.Type, parameters[1]);
            output += this.language.properties.classes.generics.middle;
            output += this.context.convertCommon(CommandNames.Type, parameters[2]);
            output += this.language.properties.classes.generics.right;
        }

        output += "()";

        return LineResults.newSingleLine(output, false);
    }
}
