import { writeFile, readFile, unlink, rename, copyFile, stat, appendFile } from "fs/promises";
import { ask } from "./menu.js";
import path from "path";
import { rmdir } from "fs";


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

export { createFile, readMyFile, removeFile, renameFile, fileCopy, details, updateFile };