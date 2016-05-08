/// <reference path="../Languages/Language.ts" />
/// <reference path="../Languages/Casing/CaseStyle.ts" />
/// <reference path="Command.ts" />
/// <reference path="LineResults.ts" />
/// <reference path="Parameters/Parameter.ts" />
/// <reference path="Parameters/SingleParameter.ts" />
/// <reference path="Parameters/RepeatingParameters.ts" />

namespace GLS.Commands {
    "use strict";

    /**
     * A command for retrieving a member variable.
     */
    export class MemberVariableCommand extends Command {
        /**
         * Information on parameters this command takes in.
         * 
         * @todo Use a value restriction on privacy (once it's implemented).
         */
        private static parameters: Parameters.Parameter[] = [
            new Parameters.SingleParameter("privacy", "The privacy of the member variable.", false),
            new Parameters.SingleParameter("instanceName", "A class instance retrieving a member variable.", true),
            new Parameters.SingleParameter("variableName", "The name of the member variable.", true)
        ];

        /**
         * @returns Information on parameters this command takes in.
         */
        public getParameters(): Parameters.Parameter[] {
            return MemberVariableCommand.parameters;
        }

        /**
         * Renders the command for a language with the given parameters.
         * 
         * @param parameters   The command's name, followed by any parameters.
         * @returns Line(s) of code in the language.
         */
        public render(parameters: string[]): LineResults {
            let privacy: string = parameters[1],
                instanceName: string,
                variableName: string,
                variablePrefix: string,
                casingStyle: Languages.Casing.CaseStyle;

            if (privacy === "protected") {
                instanceName = parameters[2];
                variableName = parameters[3];
                variablePrefix = this.language.properties.classes.members.variables.protectedPrefix;
                casingStyle = this.language.properties.classes.members.variables.protectedCase;
            } else if (privacy === "private") {
                instanceName = parameters[2];
                variableName = parameters[3];
                variablePrefix = this.language.properties.classes.members.variables.privatePrefix;
                casingStyle = this.language.properties.classes.members.variables.privateCase;
            } else {
                if (privacy === "public") {
                    instanceName = parameters[2];
                    variableName = parameters[3];
                } else {
                    instanceName = privacy;
                    variableName = parameters[2];
                }

                variablePrefix = this.language.properties.classes.members.variables.publicPrefix;
                casingStyle = this.language.properties.classes.members.variables.publicCase;
            }

            variableName = this.context.convertToCase(variableName, casingStyle);

            let output: string = "";
            output += instanceName + ".";
            output += variablePrefix;
            output += variableName;

            return LineResults.newSingleLine(output, true);
        }
    }
}