const siddobj = {
    name: "siddhant",
    birthyear: 2002,
    calcage: function () {
        return 2022 - this.birthyear;
    },
    greet: () => `hey good morning!`
};
console.log(siddobj.calcage);