import { LineResults } from "../LineResults";
import { CommandNames } from "../Names/CommandNames";
import { Command } from "./Command";
import { CommandResult } from "./CommandResult";
import { CommandMetadata } from "./Metadata/CommandMetadata";
import { SingleParameter } from "./Metadata/Parameters/SingleParameter";
import { addLineEnder } from "./Utilities";

/**
 * Starts a while loop.
 */
export class WhileStartCommand extends Command {
    /**
     * Metadata on the command.
     */
    private static metadata: CommandMetadata = new CommandMetadata(CommandNames.WhileStart)
        .withDescription("Starts a while loop")
        .withIndentation([1])
        .withParameters([new SingleParameter("conditional", "A conditional to check.", true)]);

    /**
     * @returns Metadata on the command.
     */
    public getMetadata(): CommandMetadata {
        return WhileStartCommand.metadata;
    }

    /**
     * Renders the command for a language with the given parameters.
     *
     * @param parameters   The command's name, followed by any parameters.
     * @returns Line(s) of code in the language.
     */
    public render(parameters: string[]): LineResults {
        let line: string = this.language.syntax.loops.whileStartLeft;
        line += this.language.syntax.loops.whileStartMiddle;

        const valueLine = this.context.convertParsed([CommandNames.Value, parameters[1]]);
        line += valueLine.commandResults[0].text;

        const lines: CommandResult[] = [new CommandResult(line, 0)];
        addLineEnder(lines, this.language.syntax.loops.whileStartRight, 1);

        return new LineResults(lines).withImports(valueLine.addedImports);
    }
}
