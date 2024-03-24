// Dummy data for initial complaints
const complaints = [
    { id: 1, title: 'Issue with Payroll', description: 'I have not received my salary for the past two months.' },
    { id: 2, title: 'Harassment at Workplace', description: 'I am facing harassment from my manager.' }
  ];
  
  // Function to display complaints
  function displayComplaints() {
    const complaintList = document.getElementById('complaintList');
    complaintList.innerHTML = '';
    complaints.forEach(complaint => {
      const listItem = document.createElement('li');
      listItem.textContent = `${complaint.title} - ${complaint.description}`;
      complaintList.appendChild(listItem);
    });
  }
  
  // Function to handle form submission
  function submitComplaint(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const complaintData = {
      id: complaints.length + 1,
      title: formData.get('complaintTitle'),
      description: formData.get('complaintDescription')
    };
    complaints.push(complaintData);
    form.reset();
    displayComplaints();
  }
  
  // Add event listener for form submission
  const complaintForm = document.getElementById('complaintForm');
  complaintForm.addEventListener('submit', submitComplaint);
  
  // Display initial complaints
  displayComplaints();
  
