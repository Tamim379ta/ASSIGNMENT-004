let interviewList = [];
let rejectedList = [];

let currentFilter = 'all-btn';


let totalCount = document.getElementById('total');
let totalJobsCount = document.getElementById('total-jobs');
let interviewCount = document.getElementById('interview');
let rejectedCount = document.getElementById('rejected');

const noJob = document.getElementById('no-job');
const allJob = document.getElementById('all-available-job')

const allCardSection = document.getElementById('all-card-section');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filtered-section');


const allBtn = document.getElementById('all-btn');
const filterInterviewBtn = document.getElementById('filter-interview-btn');
const filterRejectedBtn = document.getElementById('filter-rejected-btn');



function count(){
  totalCount.innerText = allCardSection.children.length;
  totalJobsCount.innerText = allCardSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;

let listLength = 0;

if (currentFilter === 'all-btn') {
  listLength = allCardSection.children.length;
} 
else if (currentFilter === 'filter-interview-btn') {
  listLength = interviewList.length;
  totalJobsCount.innerText = interviewCount.innerText;
} 
else if (currentFilter === 'filter-rejected-btn') {
  listLength = rejectedList.length;
  totalJobsCount.innerText = rejectedCount.innerText;
}

noJob.classList.toggle('hidden', listLength !== 0);

}

count();



function btnStyle(id){
  currentFilter = id;
  allBtn.classList.remove('btn-primary');
  filterInterviewBtn.classList.remove('btn-primary')
  filterRejectedBtn.classList.remove('btn-primary')

  const selected = document.getElementById(id);


  selected.classList.add('btn-primary');

if (id == 'filter-interview-btn') {
      allCardSection.classList.add('hidden');
      filterSection.classList.remove('hidden');
      renderInterView()
    } else if (id == 'all-btn') {
      allCardSection.classList.remove('hidden');
      filterSection.classList.add('hidden')
    } else if (id == 'filter-rejected-btn') {
      allCardSection.classList.add('hidden');
      filterSection.classList.remove('hidden')
      renderRejected()
    }

    count();
}




mainContainer.addEventListener('click', function(event){
  if(event.target.classList.contains('interview-btn')){
    const parenNode = event.target.parentNode.parentNode;

    const jobName = parenNode.querySelector('.job-name').innerText;
    const jobDetails = parenNode.querySelector('.job-details').innerText;
    const jobSalary = parenNode.querySelector('.job-salary').innerText;
    const notApplied = parenNode.querySelector('.notApplied').innerText;
    const jobPara = parenNode.querySelector('.job-para').innerText;

   const statusEl = parenNode.querySelector('.notApplied');

    parenNode.querySelector('.notApplied').innerText = 'Interview';
    statusEl.classList.remove('btn', 'btn-error', 'btn-accent');
    statusEl.classList.add('btn', 'btn-outline', 'btn-accent' );

    const cardInfo = {
      jobName,
      jobDetails,
      jobSalary,
      notApplied: 'Interview',
      jobPara

    };

 const interviewExist = interviewList.find(item => item.jobName == cardInfo.jobName);

if (!interviewExist){
  interviewList.push(cardInfo)
}
rejectedList = rejectedList.filter(item => item.jobName != cardInfo.jobName)

if (currentFilter == 'filter-rejected-btn'){
  renderRejected()
}

count()
  }else if (event.target.classList.contains('rejected-btn')){

    const parenNode = event.target.parentNode.parentNode;

    const jobName = parenNode.querySelector('.job-name').innerText;
    const jobDetails = parenNode.querySelector('.job-details').innerText;
    const jobSalary = parenNode.querySelector('.job-salary').innerText;
    const notApplied = parenNode.querySelector('.notApplied').innerText;
    const jobPara = parenNode.querySelector('.job-para').innerText;

    const statusEl = parenNode.querySelector('.notApplied');

    parenNode.querySelector('.notApplied').innerText = 'Rejected';
    
    statusEl.classList.remove('btn' ,'btn-error', 'btn-accent');
    statusEl.classList.add('btn', 'btn-outline', 'btn-error' );


    const cardInfo = {
      jobName,
      jobDetails,
      jobSalary,
      notApplied: 'Rejected',
      jobPara

    }

    const rejectedExist = rejectedList.find(item => item.jobName == cardInfo.jobName);

    if (!rejectedExist){
      rejectedList.push(cardInfo)
    }

    interviewList = interviewList.filter(item => item.jobName != cardInfo.jobName)

    if (currentFilter == 'filter-interview-btn'){
      renderInterView()
    }
    count()

  }

})


function renderInterView() {
  filterSection.innerHTML = ''

  for(let interview of interviewList) {
    let div = document.createElement('div')
    div.className = ' mb-5  bg-white p-5 rounded-[10px]'
    div.innerHTML = `

        <div class="flex justify-between">   
        <div class="space-y-5">
          <div>
            <h1 class="text-2xl font-semibold job-name">${interview.jobName}</h1>
            <p class="job-details">${interview.jobDetails}</p>
          </div>
            <div>
              <p class="job-salary">${interview.jobSalary}</p>
              <span class="btn btn-accent btn-outline notApplied">${interview.notApplied}</span>
            </div>
            <p class="job-para">${interview.jobPara}</p>

          <div>
            <button class="btn btn-outline btn-accent interview-btn">Interview</button>
            <button class="btn btn-outline btn-error rejected-btn">Rejected</button>
          </div>
        </div>
        <div>
          <button class="btn btn-warning delete-btn">Delete</button>
        </div>

       </div>

    
    `;

    filterSection.appendChild(div)
  }
}


function renderRejected() {
  filterSection.innerHTML = ''

  for(let rejected of rejectedList) {
    let div = document.createElement('div')
    div.className = ' mb-5  bg-white p-5 rounded-[10px]'
    div.innerHTML = `

        <div class="flex justify-between">   
        <div class="space-y-5">
          <div>
            <h1 class="text-2xl font-semibold job-name">${rejected.jobName}</h1>
            <p class="job-details">${rejected.jobDetails}</p>
          </div>
            <div>
              <p class="job-salary">${rejected.jobSalary}</p>
              <span class="btn btn-error btn-outline notApplied">${rejected.notApplied}</span>
            </div>
            <p class="job-para">${rejected.jobPara}</p>

          <div>
            <button class="btn btn-outline btn-accent interview-btn">Interview</button>
            <button class="btn btn-outline btn-error rejected-btn">Rejected</button>
          </div>
        </div>
        <div>
          <button class="btn btn-warning delete-btn">Delete</button>
        </div>

       </div>

    
    `;

    filterSection.appendChild(div)
  }
}


// delete button
const buttons = document.getElementsByClassName('delete-btn');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function(event) {
    event.target.parentNode.parentNode.parentNode.remove();
    count();
  });

}









