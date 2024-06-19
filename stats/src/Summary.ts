import { WinAnalysis } from "./analyzers/WinAnalysis";
import { MatchData } from "./MatchData";
import { HtmlReport } from "./reportTargets/HTMLReport";

export interface Analyzer{
    run(matches:MatchData[]):string;
}
export interface OutputTarget{
    print(report:string):void;
}
export class Summary{
    static winAnalysisWithHtmlReport(team:string):Summary{
        return new Summary(new WinAnalysis(team),new HtmlReport());
    }
    constructor(public analyzer:Analyzer, public OutputTarget:OutputTarget){}
    buildAndPrintReport(matches:MatchData[]):void{
        const output=this.analyzer.run(matches);
        this.OutputTarget.print(output);
    }
};