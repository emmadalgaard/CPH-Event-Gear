class Customer {
    constructor(name, address, city, email, password, phone) {
        this.name = name;
        this.address = address;
        this.city = city;
        this.email = email;
        this.password = password;
        this.phone = phone;
    }

    changeName = (name) => {
        this.name = name;
    };

    changeName(name) {
        
    }
}
