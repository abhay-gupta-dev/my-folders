
#include<iostream>
#include<string>
using namespace std;

/* Mini project-ATM
-> check balance
-> cash withdrawl
-> user details
-> update mobile no.
*/

class atm{                        //class atm
 private:                        //private member variables
    long int account_No;
    string name;
    int PIN;
    double balance;
    string mobile_No;
 
public:                         //public member functions
   // setdata function is setting the Data into the private member variables
   void setData(long int account_No_a,string name_a,int PIN_a,double balance_a,string mobile_No_a)
   {
    account_No=account_No_a;
    name= name_a;
    PIN=PIN_a;
    balance=balance_a;
    mobile_No= mobile_No_a;
   }
   //getaccountNo function is returning the user's account no.
   long int getaccountNo()
   {
    return account_No;
   }
   
   //getName function is returning the user's name
   string getname()
   {
    return name;
   }
   //getPIN function is returning the user's pin
   int getPIN()
   {
    return PIN;
   }

   //getbalance is returning the user's balance
   double getbalance()
   {
    return balance;
   }
   //getmobileNo function is returning the user's Mobile No
   string getmobileNo()
   {
    return mobile_No;
   }
   //setmobile function is updating the user's mobile no
   void setmobile(string mob_prev,string mob_new)
   {
    if(mob_prev==mobile_No){                         //it will check old mobile no.
                                                    //and update with new,if old matches
        mobile_No=mob_new;
        cout<<endl<<"successfully updated mobile no.";
        system("pause");                              //getch is to hold the screen (until user press any key)

    }
    else
    {
        cout<<endl<<"Incorrect !!! old mobile no";
        system("pause");
    }
   }

   //cashwithdraw function is used to withdraw money from atm
   void cashwithdraw(int amount_a)
   {
    if(amount_a> 0 && amount_a<balance)      //check entered amount validity
    {
        balance-=amount_a;               //balance=balance-amount_a
        cout<<endl<<"please collect your cash";
        cout<<endl<<"Available balance :"<<balance;
        system("pause");
        
    }
    else
    {
        cout<<endl<<"Invalid input or Insufficient Balance";
        system("pause"); 
    }
   }



};

/////////////////////////////////////////////////////////////////////////////////////////////

int main()
{
    int choice = 0,enterPIN;       //enterPIN and eneraccountNo.----> user authentication
    long int enterAccountNo;

    system("cls");
    //created user (object)
    atm user1;
    //set user details (into object)      (setting Default Data)
    user1.setData(1234567, "Tim",1111,45000.90,"3456987949");

    do
    {
        system("cls");
        cout<<endl<<"******welcome to ATM******"<<endl;
        cout<<endl<<"Enter your account No ";         //asking user to enter account no
        cin>> enterAccountNo;

        cout<<endl<<"Enter PIN ";               //asking user to enter pin
        cin>>enterPIN;

        //check whether enter values matches with user details
        if((enterAccountNo == user1.getaccountNo()) && (enterPIN== user1.getPIN()))
        {
            do
            {
                int amount=0;
                string oldmobileNo, newmobileNo;
                system("cls");
                cout<<endl<<"******Welcome to ATM******"<<endl;
                cout<<endl<<"select options ";
                cout<<endl<<"1. check balance";
                cout<<endl<<"2. cash withdraw";
                cout<<endl<<"3. Show user's details";
                cout<<endl<<"4. update Mobile No";
                cout<<endl<<"5. Exit"<<endl;
                cin>>choice;                      //taking user choice

                switch (choice)              //switch condition
                {
                case 1:
                     cout<<endl<<"your bank balance is: "<<user1.getbalance();
                                 //getbalance is ..... printing the user bank balance
                system("pause");
                break;

                case 2:              //if user presses 2
                     cout<<endl<<"Enter the amount :";
                     cin>>amount;
                     user1.cashwithdraw(amount);           //calling cash withdraw function
                                                           //passing the withdraw amount
                    break;
                case 3:
                      cout<<endl<<"******User details are :-";
                      cout<<endl<<"->Account no"<<user1.getaccountNo();    
                      cout<<endl<<"-> Name   "<<user1.getname();      
                      cout<<endl<<"->balance  "<<user1.getbalance();
                      cout<<endl<<"->Mobile No."<<user1.getmobileNo();
                      
                      system("pause");
                      break;


                    case 4:
                          cout<<endl<<"Enter old mobile No. ";
                          cin>>oldmobileNo;

                          cout<<endl<<"Enter new mobile No. ";
                          cin>>newmobileNo;

                          user1.setmobile(oldmobileNo,newmobileNo);
                          break;

                    case 5:
                         exit(0);

                 default:
                       cout<<endl<<"enter valid data !!!";

                }
            } while (1);
            
        }


    } while (1);

    return 0;
    

}
