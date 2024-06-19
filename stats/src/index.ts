import { MatchResult } from "./MatchResult";
import { MatchReader } from "./MatchReader";
import { CsvFileReader } from "./CsvFileReader";
import { Summary } from "./Summary";
import { WinAnalysis } from "./analyzers/WinAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HTMLReport";
// const reader = new MatchReader('football.csv');
// reader.read();

// const csvFileReader = new CsvFileReader("football.csv");

const matchReader = MatchReader.FormCsv('football.csv');
matchReader.load();

// let manUnitedWins = 0;

// const summary = new Summary(
//   new WinAnalysis('Man United'),
//   // new  ConsoleReport()
//   new HtmlReport()
// )

const summary = Summary.winAnalysisWithHtmlReport('Man United')
summary.buildAndPrintReport(matchReader.matches)

// for (let match of reader.data) {
//     if(match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//         manUnitedWins++;
//     }else if(match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
//         manUnitedWins++;
//     }
// }

// for (let match of matchReader.matches) {
//   if (match[1] === "Man United" && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++;
//   } else if (match[2] === "Man United" && match[5] === MatchResult.AwayWin) {
//     manUnitedWins++;
//   }
// }

// console.log(`Man United has won ${manUnitedWins} games.`);
