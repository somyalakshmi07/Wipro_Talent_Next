//write single program which covers all oops(abstration,encasulation,inheritence,polymorphism) concept in java
// Program to demonstrate OOP concepts in Java
//inheretence->polymorphism->encapsulation->abstraction
class oops_inherit implements Oops_Interface {
    // inheritance example
    static class SquareChecker {
        // Method to check if a number is a perfect square
        public void checkPerfectSquare(int num) {
            double sqrt = Math.sqrt(num);
            if (sqrt == Math.floor(sqrt)) {
                System.out.println(num + " is a perfect square.");
            } else {
                System.out.println(num + " is not a perfect square.");
            }
        }
        
    }
    public void displayMessage() {
            System.out.println("This is a message from the SquareChecker class.");
        }
    @Override
    // Implementing the method from the interface
    public void checkPerfectSquare(int num) {
        SquareChecker squareChecker = new SquareChecker();
        squareChecker.checkPerfectSquare(num);
    }
    @Override
    // Another method from the interface
    public void displayMessage1() {
        System.out.println("This is a message from the Oops_Interface.");
    }
}

interface Oops_Interface {
    void checkPerfectSquare(int num);//declaration of method,hidden abstract method
    void displayMessage();
    void displayMessage1(); // Another method declaration
}


class oops extends oops_inherit {
    public static void main(String[] args){
        // Create an instance of the SquareChecker class
        SquareChecker squareChecker = new SquareChecker();//object creation
        
        // Check if a number is a perfect square
        squareChecker.checkPerfectSquare(16); // Example input
        squareChecker.checkPerfectSquare(20); // Example input
        // squareChecker.displayMessage(); // Demonstrating method call
        oops_inherit obj = new oops_inherit();
        obj.displayMessage(); // Demonstrating method call from inherited class
        obj.displayMessage1(); // Demonstrating method call from interface

    }
}