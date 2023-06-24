class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`I'm ${this.name}. I'm ${this.age}.`);
  }
}

class Admin extends User {
  
  constructor(name, age, isAdmin = true) {
    super(name, age);
    this.isAdmin = isAdmin;
  }
  
  introduce() {
    super.introduce();
    console.log(`I'm admin, btw.`);
  }
}

const u1 = new Admin("Brad", 26, true);
u1.introduce();
