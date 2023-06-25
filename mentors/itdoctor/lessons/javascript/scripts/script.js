class Human {
  /**
   * Declare a human
   * @param {*} fullName Example: "Petrov Petro Petrovich" 
   * @param {*} birthdate Example: "17.07.1993"
   * @param {*} contactNumbers Example: "+380123456789, +380987654321"
   * @param {*} roomNumber Example: 67
   */
  constructor(fullName, birthdate, contacts, room) {
    let nameObject = fullName.toLowerCase().split(" ");
    this.nameObject = {};
    this.nameObject.lastName = nameObject[0][0].toUpperCase() + nameObject[0].slice(1);
    this.nameObject.firstName = nameObject[1][0].toUpperCase() + nameObject[1].slice(1);
    this.nameObject.middleName = nameObject[2][0].toUpperCase() + nameObject[2].slice(1);
    
    let date = birthdate.split(".");
    this.date = {};
    this.date.day = date[0];
    this.date.month = date[1];
    this.date.year = date[2];

    this.contacts = contacts.split(", ");

    this.room = +room;
  }

  /**
   * get full name
   * @return {String} returns full name
   */
  getFullName() {
    return `${this.nameObject.firstName} ${this.nameObject.middleName} ${this.nameObject.lastName}`;
  }

  static monthsUkrainian = ["січня", "лютого", "березня", "квітня", "травня", "червня", "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"];

  /**
   * Get Birthday in Ukrainian format
   * @returns {String} Example: "17 липня 1993 року"
   */
  getBirthdayUkrainian() {
    return `Народився ${this.date.day} ${Human.monthsUkrainian[this.date.month-1]} ${this.date.year} року`;
  }
  /**
   * Return file name of human
   * @param {String} extention Example: "jpg", "bmp", "png", "pdf"
   * @returns {String} Example: "Petro_Oleksiyovych_Poroshenko.jpeg"
   */
  getFileName(extention) {
    const fullName = Object.values(this.nameObject);
    return `${fullName.join("_")}.${extention}`.toLowerCase();
  }
  /**
   * @param {Boolean} isFirst is true, returns only first number, false - all numbers
   * @returns {String} list of number(s)
   */
  displayNumbers(isFirst) {
    if (this.contacts.length === 0 || this.contacts[0].length === 0) {
      return undefined;
    }
    return `${isFirst === true ? this.contacts[0] : this.contacts.join(", ")}`;
  }
}

const h1 = new Human("poROSHENko PETro Oleskiyovych", "11.02.1965", "+380123456789, +380987654321", 144);