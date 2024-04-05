function handleError(err, req, res, next) {
    console.error(err.stack)
    console.error(err.message)
    const errors = {
        "missing title" : {
            statusReturn: 400,
            writeToLog: "Must provide title"
        },
        "missing author" : {
            statusReturn: 400,
            writeToLog: "Must provide author"
        },
        "missing publishDate" : {
            statusReturn: 400,
            writeToLog: "Must provide publish Date"
        },
        "book not found": {
            statusReturn: 404,
            writeToLog: "Book Not Found with the given id."
        }

    };

    let errObj = errors[err.message];

    if (!errObj){
        errObj = {
            statusReturn : 500,
            writeToLog: "General Error"
        }
    }
    res.status(errObj.statusReturn).send('Error!:' + errObj.writeToLog)
}

export default handleError