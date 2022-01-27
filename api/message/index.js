module.exports = async function (context, req) {
    context.res.json({
        text: "This message is from the Function app."
    });
};