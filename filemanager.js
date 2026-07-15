import { writeFile, readFile, unlink, rename, copyFile, stat, appendFile, mkdir, rm, readdir, access} from "fs/promises";
import { ask } from "./menu.js";
import path from "path";



async function createFile() {
    try {
        const filename = await ask("Enter file name: ");
        const content = await ask("Enter file content: ");

        
        const filePath = path.join("files", filename);
        await writeFile(filePath, content);

        console.log("\n✅ File created successfully!");
    } catch (err) {
        console.log("❌ Error:", err.message);
    }
}

async function readMyFile() {
   
    try {
        const filename = await ask("Enter file name: ");
        

        const filePath = path.join("files", filename);

        const data = await readFile(filePath, "utf-8");

        console.log("\n===== FILE CONTENT =====");
        console.log(data);
        console.log("========================");
    } catch (err) {
        console.log("❌ Error:", err.message);
    }
}

async function removeFile(){
    try{
        const filename = await ask("Enter File For Delete: ");
        const filePath = path.join("files", filename);
        await unlink(filePath, "utf-8");
        console.log("\n File Removed: ");
    }catch(err){
        console.log("Eror");
    }
}
async function renameFile(){
    try{
        const filename = await ask ("Enter File name: ");
        const destination = await ask ("Rename : ");
        const oldfilePath = path.join("files", filename);
        const newfilePath = path.join("files", destination);
        await rename(oldfilePath, newfilePath);
        console.log("\n ✅Renamed old: " + oldfilePath + " To: " + newfilePath);

    }catch(err){
        console.log("Files Mismatch");
    }
}
async function fileCopy(){
    try{
        const filename = await ask ("Enter File to Copy: ");
        const copyname = await ask ("Enter destination name: ");
        const olddestination = path.join("files", filename);
        const destination = path.join("files", copyname);
        await copyFile(olddestination, destination);
        console.log("\n ✅File Copyed");

    }catch(err){
        console.log(err);
    }
}
async function details(){
    try{
        const filename = await ask ("Enter File name: ");
        const filepath = path.join("files", filename);
        const details = await stat(filepath);
        console.log("\n====File Details========")
        console.log("File Name: "+ filename);
        console.log("\nFile Size: " + details.size, "bytes");
        console.log("\nCreated Time: "+ details.birthtime);
        console.log("\nIs File: "+ details.isFile());
        console.log("===========================")


    }catch(err){
        console.log("Files Not Found")
    }
}
async function updateFile(){
    try{
        const filename = await ask ("Enter File name: ");
        const addContent = await ask ("Enter Content to add: ");
        const filepath = path.join("files", filename);
        
        await appendFile(filepath, "\n" +addContent);
        console.log("✅Content added");
       

    }catch(err){
        console.log(err);
    }
}
async function CreateFolder(){
    try{
        const foldername = await ask ("Enter Folder Name: ");
        const folderpath = path.join("folder", foldername );
        await mkdir(folderpath,{recursive: true});
        console.log("✅Folder Created Successfully.")
        
    }catch(err){
        console.log(err)
    }
}
async function RemoveFolder(){
    try{
        const foldername = await ask("Enter Folder Name: ");
        const folderpath = path.join("folder", foldername);
        await rm(folderpath, {recursive : true, force : true})
        console.log("✅Folder Delted")
    }catch(err){
        console.log(err)
    }
}
async function SearchFile(){
    try{
        const filename = await ask("Enter File Name: ");
        const files = await readdir("files");
        if(files.includes(filename)){
            console.log("✅ File Found");
        }else{
            console.log("❌Files Not Found");
        }
    }catch(err){
        console.log(err)
    }
}
async function existFile(){
    try{
        const filename = await ask("Enter File Name: ");
        const filepath = path.join("files", filename);
        await access(filepath);
        console.log("✅File Exist")
        
    }catch(err){
        console.log("❌Files Doesnot Exist");
    }
}

async function countFile(){
    try{
        const folderpath = path.join("files");
        const files = await readdir(folderpath);
        console.log(`Total files ${files.length}`);
        

    }catch(err){
        console.log(err);
    }
}
async function storageused(){
    try{
        const folderpath = path.join("files");
        const files = await readdir(folderpath);

        let totalSize = 0;
        for(const file of files){
            const filepath = path.join(folderpath, file);
            const info = await stat(filepath);
            totalSize += info.size;
        }
        console.log(`Total Storage: ${totalSize} Bytes`);
        console.log(`Total Storage: ${(totalSize/1024).toFixed(2)} KB`);
        console.log(`Total Storage: ${(totalSize/(1024*1024)).toFixed(2)} MB`);
    }catch(err){
        console.log(err.message);
    }
}
async function count(){
    try{
        const folderpath = path.join("files");
        const files = await readdir(folderpath);
        console.log("======");
        console.log("\n"+ files);
        

    }catch(err){
        console.log(err);
    }
}

export { createFile, readMyFile, removeFile, renameFile, fileCopy, details, updateFile, CreateFolder, RemoveFolder, SearchFile, existFile, countFile, storageused, count };