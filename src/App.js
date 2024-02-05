import { useState } from 'react';
import './App.css';
import Box from './component/Box';


const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-1200x834.jpg",
  },
  scissors: {
    name: "scissors",
    img: "https://imageengine.victorinox.com/mediahub/31970/1280Wx1120H/CUT_8_0904_10__S1.jpg",
  },
  paper: {
    name: "paper",
    img: "https://media.istockphoto.com/id/178565230/photo/isolated-male-hand-showing-the-number-five.jpg?s=612x612&w=0&k=20&c=kAyc_dBCs6qZK5_8D21Z3uStBFyMYIpEWSecRFRPWB8=",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null); // 사용자가 선택할 값
  const [computerSelect, setComputerSelect] = useState(null); // 컴퓨터가 선택할 값
  const [result, setResult] = useState(""); // 누가 이겼는지
  const [comResult, setComResult] = useState("");

  const play = (userChoice) => {  //버튼 누르면 play함수
    console.log("선택됨", userChoice); // 사용자가 누른 값 나오기
    setUserSelect(choice[userChoice]); // 눌러서 번한값 실행
    let computerChoice = randomChoice();  // 함수 담기 
    setComputerSelect(computerChoice);  // 컴퓨터에 고른 거 세팅
    setResult(judgement(choice[userChoice], computerChoice));
    // setComResult(comJudgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    console.log("user",user,"computer",computer);

    if(user.name == computer.name){
      return "tie";
    }else if(user.name == "Rock") return computer.name == "Scissors"?"Win":"lose"
    else if(user.name == "scissors") return computer.name == "Rock"?"Win":"lose";
    else if(user.name == "paper") return computer.name == "scissors"?"Win":"lose";
  }

  //  const comJudgement = (user, computer) => {
  //    console.log("user", user, "computer", computer);

  //    if (user.name == computer.name) {
  //      return "tie";
  //    } else if (computer.name == "Rock") return user.name == "Scissors" ? "Win" : "lose";
  //    else if (computer.name == "scissors") return user.name == "Rock" ? "Win" : "lose";
  //    else if (computer.name == "paper") return user.name == "scissors" ? "Win" : "lose";
  //  };

  // 과제
  // 내가 이기면 컴퓨더가 지게하기
  //이기면 빨간색 테두리, 지면 초록색테두리되게 만들기

  const randomChoice = () => {    // 컴퓨터가 선택할 랜덤값 구하는 함수만들기
    let itemArray = Object.keys(choice); // [rock,scissors,paper]
    console.log("itemArray", itemArray);
    let randomItem = Math.floor(Math.random() * itemArray.length); // 인덱스 숫자 나오게하기 0,1,2
    let final = itemArray[randomItem];  // ex : rock[0]
    return choice[final];
  }

  return (
    <div>
      <div className="main">
        <Box
          title="you"
          item={userSelect}
          result={result}
          // comResult={comResult}
        />
        <Box
          title="Computer"
          item={computerSelect}
          result={result}
          // comResult={comResult}
        />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
