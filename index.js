const myDictionary = {
  "kdhanush862@gmail.com" : "KANCHAMIREDDY DHANUSH KUMAR REDDY",
  "dineshpabbisetty2002@gmail.com" : "Pabbisetty Dinesh",
  "keertana02@gmail.com" : "ARAVAPALLI KEERTANA",
  "owkukrishnapriya@gmail.com" : "Krishna Priya",
  "katuruakhila@gmail.com" : "Akhila K",
  "nithishakandukuri07@gmail.com" : "Nithisha",
  "sneha.veerabathini@gmail.com" : "Sneha V",
  "navyasrionly1@gmail.com" : "Navyasri",
  "sarikiswetha2002@gmail.com" : "S Swetha",
  "lochu5vilehya@gmail.com" : "S.Lochani",
  "sripilla94@gmail.com" : "Sri jyothsna",
  "kashyapsanthoshi20@gmail.com" : "Santhoshi Kumari",
  "bebirani711.2017@gmail.com" : "KILLI BEBI RANI",
  "pravalikareddynedula@gmail.com" : "Nedula Pravalika Reddy",
  "surendra20030509@gmail.com" : "Surendra Kumar",
  "sairavula2002@gmail.com" : "Sainath",
  "kaliseerapu2001@gmail.com" : "Seerapu kali",
  "anudeepchebrolu467@gmail.com" : "Anudeep",
  "vinodh068322@gmail.com" : "Vinod",
  "sravyabharaniannavarapu@gmail.com" : "Sravya",
  "charithar992@gmail.com" : "Charitha",
  "sureshnaidu10159@gmail.com" : "Suresh Naidu",
  "saibanumula955@gmail.com" : "M Saibhanu",
  "ingolepadmavathi@gmail.com" : "I. Padmavathi",
  "bandiprudhvi143@gmail.com" : "Bandi prudhvi",
  "velichetimaidhile@gmail.com" : "V Maidhile",
  "manaswinikinnera1234@gmail.com" : "Manaswini",
  "divyakadari121@gmail.com" : "Divya",
  "makkenapravallika777@gmail.com" : "Pravallika.M",
  "p.upendra8010@gmail.com" : "Upendra",
  "bhavanipadala430@gmail.com" : "PADALA BHAVANI",
  "shaikreshma7979@gmail.com" : "Shaik Reshma",
  "gowthaminarayanasetti850@gmail.com" : "Narayanasetti Gowthami",
  "varalaxmiganta066@gmail.com" : "Ganta Varalaxmi",
  "ramuraparthi193@gmail.com" : "Ram",
  "abhishekweslee@gmail.com" : "Abhishek john weslee Malaka",
  "natarajaddagatla@gmail.com" : "Nataraj",
  "srinathtingilkar@gmail.com" : "Srinath",
  "tejaschandradesaboina@gmail.com" : "Tejas",
  "deepakvemula16@gmail.com" : "Deepak vemula",
  "juluribittu89@gmail.com" : "J Manish",
  "shurikengaming1@gmail.com" : "Harindevnath Malathkar",
  "revanthgitti229@gmail.com" : "Revanth",
  "chidanandap999@gmail.com" : "Chidananda",
  "hchallag@gmail.com" : "Hemanth",
  "madhasatish25@gmail.com" : "M.Sathish",
  "singupurapuudaykiran@gmail.com" : "Uday Kiran",
  "bhanu@gmail.com" : "Bhanu",
  "razak@gmail.com" : "Razak",
  "santhosh@gmail.com" : "Santhosh"
  };

  const pairs = {"KILLI BEBI RANI" : "Srinath",
  "Deepak vemula" : "Nataraj",
  "Navyasri" : "KANCHAMIREDDY DHANUSH KUMAR REDDY",
  "Abhishek john weslee Malaka" : "Harindevnath Malathkar",
  "Srinath" : "Akhila K",
  "Nataraj" : "Manaswini",
  "KANCHAMIREDDY DHANUSH KUMAR REDDY" : "V Maidhile",
  "Sneha V" : "Anudeep",
  "Akhila K" : "Pabbisetty Dinesh",
  "Manaswini" : "Seerapu kali",
  "Suresh Naidu" : "Charitha",
  "Ganta Varalaxmi" : "J Manish",
  "Pabbisetty Dinesh" : "Navyasri",
  "Seerapu kali" : "Narayanasetti Gowthami",
  "V Maidhile" : "Abhishek john weslee Malaka",
  "Charitha" : "Suresh Naidu",
  "Anudeep" : "Santhoshi Kumari",
  "Vinod" : "PADALA BHAVANI",
  "Ram" : "Divya",
  "Sainath" : "Sri jyothsna",
  "Narayanasetti Gowthami" : "Ram",
  "PADALA BHAVANI" : "Vinod",
  "Divya" : "M.Sathish",
  "Sri jyothsna" : "Sainath",
  "Santhoshi Kumari" : "Surendra Kumar",
  "Nedula Pravalika Reddy" : "Tejas",
  "Krishna Priya" : "Revanth",
  "S Swetha" : "M Saibhanu",
  "Surendra Kumar" : "Shaik Reshma",
  "Upendra" : "Pravallika.M",
  "Pravallika.M" : "Bhanu",
  "M Saibhanu" : "S.Lochani",
  "Shaik Reshma" : "Bandi prudhvi",
  "Tejas" : "ARAVAPALLI KEERTANA",
  "I. Padmavathi" : "Uday Kiran",
  "S.Lochani" : "Upendra",
  "Bandi prudhvi" : "KILLI BEBI RANI",
  "ARAVAPALLI KEERTANA" : "Deepak vemula",
  "Nithisha" : "Hemanth",
  "Sravya" : "Chidananda",
  "Uday Kiran" : "Razak",
  "J Manish" : "Krishna Priya",
  "Harindevnath Malathkar" : "Sneha V",
  "Revanth" : "Ganta Varalaxmi",
  "Chidananda" : "Santhosh",
  "Hemanth" : "Sravya",
  "M.Sathish" : "Nedula Pravalika Reddy",
  "Santhosh" : "Nithisha",
  "Bhanu" : "I Padmavathi",
  "Razak" : "S Swetha"
  }

function  buttonClicked() { 
    document.addEventListener('contextmenu', event => event.preventDefault());
    console.log("Uday Kiran");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const finalName = name.toLowerCase();
    const finalEmail = email.toLowerCase();
    console.log(name);
    var flag = 0;
    for (const key in myDictionary) {
      // const finalKey = key.toLowerCase();
        if(myDictionary[key].toLowerCase() == finalName && key.toLowerCase() == finalEmail){
            flag = 1;
            // console.log("You are a Santa for " + pairs[myDictionary[key]]);
            document.getElementById("error").innerHTML = "You are a Santa for " + pairs[myDictionary[key]];
            document.getElementById("cost").innerHTML = "Minimum gift value starts from 100 rupees";
            break;
        }
    }
    if(flag == 0){
      document.getElementById("cost").innerHTML = "";
      document.getElementById("error").innerHTML = "Enter Valid Credentials";
    }

}

//Final Project
