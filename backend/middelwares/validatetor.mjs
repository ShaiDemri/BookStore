export const validateBook = (req, res, next) => {
    const body = req.body;
    const {title, description = "", author, publishDate} = body;
    if (!title) {
        const error = new Error("missing title");
        return next(error)
    }
    if (!author) {
        const error = new Error("missing author");
        return next(error)
    }
    if (!publishDate) {
        const error = new Error("missing publishDate");
        return next(error)
    }
    next();
};