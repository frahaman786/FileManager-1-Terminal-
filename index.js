import { createFile, readMyFile, removeFile, renameFile, fileCopy, details, updateFile, CreateFolder, RemoveFolder, SearchFile, existFile, countFile, storageused } from "./filemanager.js";
import { showMenu, rl } from "./menu.js";

async function main() {
    
    while(true){
        const choice = await showMenu();

        switch (choice) {
            case "1":
                await createFile();
                break;

            case "2":
                
                await readMyFile();
                break;

            case "3":

                await removeFile();
                break;

            case "4":
                await renameFile();
                break;

            case "5":
                await fileCopy();
                break;
            case "6":
                await details();
                break;
            case "7":
                await updateFile();
                break;
            case "8":
                await CreateFolder();
                break;
            case "9":
                await RemoveFolder();
                break;
            case "10":
                await SearchFile();
                break;
            case "11":
                await existFile();
                break;
             case "12":
                await countFile();
                break;
            case "14":
                await storageused();
                break;

            case "16":
                console.log("Exit");
                rl.close();
                return;

            default:
                console.log("Invalid Choice");
        }
    }

    
}
main();
