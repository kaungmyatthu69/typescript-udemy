"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// const reader = new MatchReader('football.csv');
// reader.read();
// const csvFileReader = new CsvFileReader("football.csv");
const matchReader = MatchReader_1.MatchReader.FormCsv('football.csv');
matchReader.load();
// let manUnitedWins = 0;
// const summary = new Summary(
//   new WinAnalysis('Man United'),
//   // new  ConsoleReport()
//   new HtmlReport()
// )
const summary = Summary_1.Summary.winAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
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
