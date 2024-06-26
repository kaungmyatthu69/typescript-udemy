import fs from "fs";
import {dateStringToDate} from "./utils";
import {MatchResult} from "./MatchResult";


export abstract class CsvFileReader<T>{
    data: T[] = [];
    constructor(public filename: string){}
    abstract mapRow(row: string[]): T;
    read():void{
        this.data = fs.readFileSync(this.filename, {
            encoding:'utf-8'
        }).split('\n').map((data:string):string[]=>data.split(','))
            .map(this.mapRow)
    }

}