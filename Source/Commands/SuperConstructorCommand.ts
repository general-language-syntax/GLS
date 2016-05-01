/// <reference path="../Languages/Language.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for calling a parent class constructor.
     */
    export class SuperConstructorCommand extends Command {
        /**
         * Information on parameters this command takes in.
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.RepeatingParameters(
                "Function arguments.",
                [
                    new Parameters.SingleParameter("argument", "An argument for the super constructor.", true),
                ])
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return SuperConstructorCommand.parameters;
        }

        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        public render(parameters: string[]): LineResults {
            let output: string = "";

            output += this.language.properties.classes.superConstructor;
            output += "(";

            if (parameters.length > 1) {
                output += parameters[2];

                for (let i: number = 3; i < parameters.length; i += 1) {
                    output += ", " + parameters[i];
                }
            }

            output += ")";

            return LineResults.newSingleLine(output, true);
        }
    }
}
