import java.util.*;
class myException extends Exception{
void custom(String str){
System.out.println("Not Eligible for voting");
}

}
 class Valid{
void check(int n)throws myException{
if(n<18){

throw new myException();

}
else{
System.out.println("Welcome to vote") ;
}

}




class Test{
public static void main(String args[]){

Scanner sc = new Scanner(System.in);
System.out.println("Enter Your Age:");
int n=sc.nextInt();
Valid obj=new Valid();
try{
obj.check(n);
}
catch(myException e){
System.out.println("Your are Eligible for voting:");
}
}
}
}