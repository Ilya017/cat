let cat = {
    name: "Кот",
    age: 2,
    weight: 4,
    feeding: function() {
        this.weight += 0.5;
        alert("Вы покормили кота");
        if(this.weight >= 15) {
            alert("Вы перекормили кота. Будет запущенна автоматическая система диеты");
            this.diet();
        }
    },
    showWeight: function() {
        alert("Вес кота составляет: " + this.weight + "кг");
    },
    diet: function() {
        this.weight -= 0.5;
        alert("Вы посадили кота на диету");
        if (this.weight <= 1 ) {
            alert("Вы недокармливаете кота. Будет запущена автоматическая система кормления");
            this.feeding();
        }
    },
    toString: function() {
        return this.name + " " + "Возраст: " + this.age + "Вес: " + this.weight;
    },
};