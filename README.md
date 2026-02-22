1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById("id") হলো শুধু একটা element select করে , শুধু id দিয়ে কাজ করা যায়। getElementsByClassName("class") হলো একাধিক element নিয়ে কাজ করা যায় ,একই টাইপ এর কাজ করতে হলে ক্লাস দিয়ে করা হয় । querySelector("select") এর মাধমে প্রথম matching element select করা হয় , এর মাধমে tagname  , classname বা id দিয়ে সিলেক্ট  করা যায় , nodelist দেয়  না । querySelectorAll("select") এর মাধমে সকল matching element select করা হয় , nodelist দেয়।  

2. How do you create and insert a new element into the DOM?
Ans: কোনো নতুন এলিমেন্ট তৈরী করা হয় , এলিমেন্ট এর ভিতর কোনো Content দেওয়া হয় , সর্বশেষ appendChild() এর মাধমে তা  DOM এ  যোগ করা হয়।   

3. What is Event Bubbling? And how does it work?
Ans:যখন কোনো child element এ event করা হয় সেটা ধাপে ধাপে তার parent ধরে ধরে উপরের দিকে উঠতে থাকে যাকে event bubbling বল। 

4. What is Event Delegation in JavaScript? Why is it useful?
Ans:Event Delegation এর মাধমে প্রতিটা child কে আলাদা করে ইভেন্ট না করে এক বারে তার parent কে event listener দেয়া হয়। Event Delegation এর ফলে code কম লাগে ,Performance ভালো দেয় ,Dynamic element এ কাজ করা যায়।  

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans:preventDefault() browser এর default ভাবে কাজ করা বন্ধ করে। যেমন : Form submit বন্ধ করা ইত্যাদি। 
stopPropagation() event bubbling করা বন্ধ করে। অর্থাৎ event উপরে যাওয়া বন্ধ করে।  

