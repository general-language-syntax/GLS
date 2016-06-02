const testRequire = require("./testRequire");

const CommandsBag = testRequire("../Source/Commands/CommandsBag").CommandsBag;
const Conversion = testRequire("../Source/Conversions/Conversion").Conversion;
const ConversionContext = testRequire("../Source/Conversions/ConversionContext").ConversionContext;
const GlsParser = testRequire("../Source/Conversions/GlsParser").GlsParser;
const CaseStyleConverter = testRequire("../Source/Languages/Casing/CaseStyleConverter").CaseStyleConverter;
const CaseStyleConverterBag = testRequire("../Source/Languages/Casing/CaseStyleConverterBag").CaseStyleConverterBag;
const TypeScript = testRequire("../Source/Languages/TypeScript").TypeScript;

/**
 * Generators for (stub? mock?) class instances.
 */
var mocks = {
    /**
     * @returns A mocked CaseStyleConverterBag.
     */
    mockCaseStyleConverter: () => new CaseStyleConverter(),

    /**
     * @returns A mocked CaseStyleConverterBag.
     */
    mockCaseStyleConverterBag: () => new CaseStyleConverterBag(),

    /**
     * @param glsLines   Raw lines of GLS syntax.
     * @param context   A ConversionContext converting the code.
     * @returns A mocked Conversion.
     */
    mockConversion: (glsLines, context) => new Conversion(glsLines, context || mocks.mockConversionContext()),

    /**
     * @param language   A Language for the context (by default, a mocked Language).
     * @returns A mocked ConversionContext.
     */
    mockConversionContext: language => new ConversionContext(language || mocks.mockLanguage()),

    /**
     * @param language   A Language for the context (by default, a mocked Language).
     * @returns A mocked CommandsBag.
     */
    mockCommandsBag: context => new CommandsBag(context || mocks.mockConversionContext()),

    /**
     * @param language   A ConversionContext for the parser (by default, a mocked ConversionContext).
     * @returns A mocked GlsParser.
     */
    mockGlsParser: context => new GlsParser(context || mocks.mockConversionContext()),

    /**
     * @returns A mocked Language.
     */
    mockLanguage: () => new TypeScript()
};

module.exports = mocks;