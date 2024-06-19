"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Summary = void 0;
const WinAnalysis_1 = require("./analyzers/WinAnalysis");
const HTMLReport_1 = require("./reportTargets/HTMLReport");
class Summary {
    static winAnalysisWithHtmlReport(team) {
        return new Summary(new WinAnalysis_1.WinAnalysis(team), new HTMLReport_1.HtmlReport());
    }
    constructor(analyzer, OutputTarget) {
        this.analyzer = analyzer;
        this.OutputTarget = OutputTarget;
    }
    buildAndPrintReport(matches) {
        const output = this.analyzer.run(matches);
        this.OutputTarget.print(output);
    }
}
exports.Summary = Summary;
;
