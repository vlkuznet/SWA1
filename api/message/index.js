module.exports = async function (context, req) {
    context.res.json({
        text: "This message is from the Function app. Random number to prove we're working: "+ Math.floor(Math.random()*1000)
    });
};