module.exports = (command) => {
    try {
        process.chdir(command[1])
    } catch (err) {
        console.log(err)
    }
}