#! /usr/bin/env node
"use strict";
// Solution # 6
// Stripping Names: store a person name, and include some white space characters at the begining and end of the name. make sure you
// use each character combination,"\t and \n" atleast once.
// Print the name , so the white space around the name is displayed, then print the name after stripping the white space.  
Object.defineProperty(exports, "__esModule", { value: true });
let personName = `\n\t BABAR AZAM \t\n`;
console.log(personName);
let stripped = personName.trim();
console.log(stripped);
