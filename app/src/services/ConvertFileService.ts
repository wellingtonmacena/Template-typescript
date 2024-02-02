import { convertWordFiles } from 'convert-multiple-files';
import * as path from 'path';

export   class ConvertFileService {

    constructor(){

    }
    
    async test() {
        // Return promise => convertWordFiles(path of the file to be converted, convertTo, outputDir)
        const pathOutput = await convertWordFiles('C:\\Users\\wellm\\Desktop\\carteira senai.docx', 'pdf', 'C:\\Users\\wellm\\Desktop');
        console.log(pathOutput);
      }

      

    main():boolean {
    return true;
  }
}
