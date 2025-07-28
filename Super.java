// Program to demonstrate the use of the super keyword in Java
//super keyword is used to refer to the immediate parent class object
//use concept of inheritance
class Superdemo {
    // Base class with a method to display a message
    void display() {
        System.out.println("This is the display method of the Super class.");
    }
}
class Sub extends Superdemo {
    // Overriding the display method
    @Override
    void display() {
        // Calling the display method of the Super class using super    
        super.display();
        System.out.println("This is the display method of the Sub class.");
    }
}

class Super extends Superdemo {
    public static void main(String[] args) {
        // Creating an instance of the Sub class
        Sub sub = new Sub();
        // Calling the display method, which will invoke the overridden method
        sub.display();
    }
}
