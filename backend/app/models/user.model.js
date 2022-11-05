module.exports = mongoose => {
    const User = mongoose.model(
        "user",
        mongoose.Schema(
            {
                name: String,
                email: String,
                department: String,
                degree: String,
                note: Array,
            },
        )
    );

    return User;
};