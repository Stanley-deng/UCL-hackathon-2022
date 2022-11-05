module.exports = mongoose => {
    const User = mongoose.model(
        "user",
        mongoose.Schema(
            {
                name: String,
                email: String,
                department: String,
                note: String,
            },
        )
    );

    return User;
};