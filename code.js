let today = new Date().toISOString().split('T')[0];
if(today === '2023-02-08'){
    ourClassroom += 1;
}

$('.date').append(today);

