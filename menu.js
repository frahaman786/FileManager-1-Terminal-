import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


function ask(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

async function showMenu() {
    console.log("\n===== FILE MANAGER =====");
    console.log("1. Create File");
    console.log("2. Read File");
    console.log("3. Delete File");
    console.log("4. Rename File");
    console.log("5. Copy File");
    console.log("6. File Details");
    console.log("7. Update Details")
    console.log("8. Create Folder");
    console.log("9. Delete Folder");
    console.log("10. Search File");
    console.log("11. Check File Exist");
    console.log("12. Count Files");
    console.log("13. Count Folder");
    console.log("14. Storage Used");
    console.log("15. List Files");
    console.log("16. Exit");

    const choice = await ask("\nChoose an option: ");

    return choice;
}

export { showMenu, ask, rl };