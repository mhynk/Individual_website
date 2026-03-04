function showDutiesJob1() {

  var countStr = document.getElementById("dutiesCount1").value;
  var count = parseInt(countStr);

  if (isNaN(count) || count <= 0) {
    document.getElementById("dutiesOutput1").innerHTML =
      "Please enter a valid number greater than 0.";
    return;
  }

  var duties = [
    "Supported IT and tech-related tasks for diplomatic operations.",
    "Assisted with troubleshooting hardware and software issues.",
    "Maintained internal documentation and process guides.",
    "Tracked and resolved service requests efficiently.",
    "Communicated technical updates to non-technical staff."
  ];

  if (count > duties.length) {
    count = duties.length;
  }

  var index = count - 1;   //input - 1
  var result = "";         //MUST start as blank 

  while (index >= 0) {
    result = result + duties[index] + "<br />";
    index = index - 1;
  }

  document.getElementById("dutiesOutput1").innerHTML = result;
}


function showDutiesJob2() {

  var countStr = document.getElementById("dutiesCount2").value;
  var count = parseInt(countStr);

  if (isNaN(count) || count <= 0) {
    document.getElementById("dutiesOutput2").innerHTML =
      "Please enter a valid number greater than 0.";
    return;
  }

  var duties = [
    "Assisted with research data collection and analysis.",
    "Developed small scripts to automate repetitive tasks.",
    "Organized datasets for academic projects.",
    "Documented research findings clearly.",
    "Collaborated with team members on project milestones."
  ];

  if (count > duties.length) {
    count = duties.length;
  }

  var index = count - 1;
  var result = "";

  while (index >= 0) {
    result = result + duties[index] + "<br />";
    index = index - 1;
  }

  document.getElementById("dutiesOutput2").innerHTML = result;
}

function calculateSalary() {
  // 1) 입력값을 문자열로 가져오기
  var hourlyWageStr = document.getElementById("hourlyWage").value;
  var hoursPerWeekStr = document.getElementById("hoursPerWeek").value;

  // 2) 숫자로 파싱하기
  var hourlyWage = parseFloat(hourlyWageStr);
  var hoursPerWeek = parseFloat(hoursPerWeekStr);

  // 3) 유효성 검사 (숫자가 아니면 안내)
  // // Extra Feature: Input validation
  // This ensures the user enters valid numbers before calculating salary.
  // If invalid input is detected, an alert message appears.
  if (isNaN(hourlyWage) || isNaN(hoursPerWeek)) {
    document.getElementById("salaryOutput").innerHTML =
      "Please enter valid numbers for hourly wage and hours per week.";
    return;
  }

  // 4) 연봉 계산
  var annualSalary = hourlyWage * hoursPerWeek * 52;

  // 5) if...else
  var salaryMessage; // undefined로 시작

  if (annualSalary < 20000) {
    salaryMessage = ". The salary is too little.";
  } else if (annualSalary > 20000 && annualSalary < 25000) {
    salaryMessage = ". The salary is almost enough. Let’s negotiate.";
  } else {
    salaryMessage = ". This is a great salary for me.";
  }

  // 6) 최종 출력
  document.getElementById("salaryOutput").innerHTML =
    "The salary is $" + annualSalary.toFixed(2) + salaryMessage;
}
