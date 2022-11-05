module.exports = (mongoose) => {
  const User = mongoose.model(
    "user",
    mongoose.Schema({
      name: String,
      email: String,
      department: String,
      note: String,
      events: [
        {
          userid: String,
          authtoken: String,
          preset_what: String,
          preset_time: String,
        },
      ],
    })
  );

  return User;
};
